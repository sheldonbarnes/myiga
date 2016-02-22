import {Http,  Headers} from 'angular2/http';


import {Injectable} from 'angular2/core';
import {IMyIGADataService} from '../models/IMyIGADataService';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/subject/ReplaySubject';
import {Subject} from 'rxjs/subject';

import {Response} from 'angular2/src/http/static_response';
import {Chamber} from '../models/Chamber';
import {Legislator} from '../models/Legislator';
import {Bill} from '../models/Bill';
import {IBill} from '../models/Bill';
import {MyToken} from './MyToken';

import  'rxjs/add/operator/map';
import  'rxjs/add/operator/count';
import  'rxjs/add/operator/filter';
import  'rxjs/add/observable/from';
import  'rxjs/add/observable/fromArray';

@Injectable()
export class MyIGADataService implements IMyIGADataService{

  myToken: string = MyToken.getToken();


  mylegislators: Legislator[] = [];

  /*

  declare a class with a static method that returns your token.

  export class MyToken {
    static getToken() : string {
        return "Token your_beautiful_long_token";
    }
  }
  */

  public representatives: Legislator[] = [];
  public senators: Legislator[] = [];
  //public legislators: Legislator[] = [];
  public legislators: ReplaySubject<Legislator> = new ReplaySubject<Legislator>();

  constructor (public http: Http) {
    this.getLegislators1()
    .map(res => Observable.fromArray(res.json().items))
    .mergeAll()
    .map(y => this.getLegislatorDetails(y.link))
    .mergeAll()
    .subscribe(x => {
      //this.legislators.push(x);
      this.legislators.next(x);
    });


    //this.cool.subscribe(x => console.log(x));

    this.legislators.filter(x => x.chamber.name == 'House')
    .subscribe(x => this.representatives.push(x));


    this.legislators.filter(x => x.chamber.name == 'Senate')
    .subscribe(x => this.senators.push(x));


  }



  getSessions() {}
  getConstitution() {}
  getChambers() : Observable<Response> {
    return this.http.get('dapi/chambers.json');
  }
  getCalendars() {}
  getJournals() {}

  getLegislators() : Observable<Response> {

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    return this.http.get('dapi/legislators.json');
    //return this.http.get('https://api.iga.in.gov/2016/legislators', { headers: headers});


  }

  getLegislators1() : Observable<Response>{

    console.log('Getting legislators');
    //this.republicanRepresentativeCount = 25;

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    return this.http.get('https://api.iga.in.gov/2016/legislators', { headers: headers})
    //.map(res => res.json().items);


  }


  getBills() : Observable<Response> {
    return this.http.get('dapi/bills.json');
  }

  getLegislatorDetails(link: string) : any {


    console.log('Legislator details called');
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    var legLink: string = 'https://api.iga.in.gov' + link;
    //console.log('About to make a call to ' + legLink);

    return this.http.get(legLink, { headers: headers})
          .map (res =>  res.json());

  }

  getLegislatorImage (link: string) : Observable<Response> {
    var headers = new Headers();
    headers.append('Accept', 'image/png');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    var legImageLink: string = 'https://api.iga.in.gov' + link;
    //console.log('About to get image for ' + legImageLink);

    return this.http.get(legImageLink, { headers: headers})
          .map (res =>   res);
  }


}
