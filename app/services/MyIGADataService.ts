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
import {AsapScheduler} from 'rxjs/scheduler/AsapScheduler';
import {QueueScheduler} from 'rxjs/scheduler/QueueScheduler';


import  'rxjs/add/operator/map';
import  'rxjs/add/operator/count';
import  'rxjs/add/operator/filter';
import  'rxjs/add/operator/observeOn';
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
  public bills: ReplaySubject<Bill> = new ReplaySubject<Bill>();
  public billsList: ReplaySubject<IBill> = new ReplaySubject<IBill>();
  public legislatorsList: ReplaySubject<Legislator> = new ReplaySubject<Legislator>();

  //public bills: Bill[] = [];
  constructor (public http: Http) {


    this.getLegislators1()
    .map(res => Observable.fromArray(res.json().items))
    .mergeAll()
    .map(y => this.getLegislatorDetails(y.link))
    .mergeAll()
    //.take(15)
    .subscribe(x => {
      this.legislators.next(x);
    },
    function(err){

    },
    function() {
      console.log('Completed receiving legislators');
    }


  );

  this.getLegislatorsList()
  .map(res => Observable.fromArray(res.json().items),AsapScheduler)
  .mergeAll()
  .subscribe (x => this.legislatorsList.next(x));

  console.log(this.legislatorsList.count + 'is the count of legislators I received');
  this.getBillsList()
  .map(res => Observable.fromArray(res.json().items),AsapScheduler)
  .mergeAll()
  .subscribe (x => this.billsList.next(x));

  /*
  .map(y => this.getBillDetails(y.link), AsapScheduler)
  .mergeAll()
  .subscribe(x => {
    //this.legislators.push(x);
    //console.log(JSON.stringify(x));

    this.bills.next(x);
  },
  function(err){

  },
  function() {
    console.log('Completed receiving bills');
  }


);*/

    console.log('This is the end');


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
    return this.http.get('https://api.iga.in.gov/2016/legislators?per_page=100000', { headers: headers})
    //.map(res => res.json().items);


  }

  getLegislatorsList() : Observable<Response>{

    console.log('Getting legislators');
    //this.republicanRepresentativeCount = 25;

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    return this.http.get('https://api.iga.in.gov/2016/legislators?per_page=300', { headers: headers})
    //.map(res => res.json().items);


  }

  getBillsList() : Observable<Response> {

    console.log('Getting Bills List');
    //this.republicanRepresentativeCount = 25;

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    return this.http.get('https://api.iga.in.gov/2016/bills?per_page=2000', { headers: headers})
    //https://api.iga.in.gov//2016/bills?per_page=2000
    //return this.http.get('dapi/bills.json');
  }
  getBills() : Observable<Response> {

    console.log('Getting Bills');
    //this.republicanRepresentativeCount = 25;

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    return this.http.get('https://api.iga.in.gov/2016/bills?per_page=2000', { headers: headers})
    //https://api.iga.in.gov//2016/bills?per_page=2000
    //return this.http.get('dapi/bills.json');
  }
  getBillDetails(link: string) : any {
    console.log('Bill details called');
    var headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    var legLink: string = 'https://api.iga.in.gov' + link;
    //console.log('About to make a call to ' + legLink);

    return this.http.get(legLink, { headers: headers})
          .map (res =>  res.json());
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
