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
import {StaticBill} from '../models/Bill';

import {IBill} from '../models/Bill';
import {MyToken} from './MyToken';

import  '../../node_modules/rx/dist/rx.all.js';


@Injectable()
export class MyLocalIGADataService implements IMyIGADataService{

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
  public biPartisanBills: ReplaySubject<Bill> = new ReplaySubject<Bill>();
  public billsList: ReplaySubject<Bill> = new ReplaySubject<Bill>();
  public legislatorsList: ReplaySubject<Legislator> = new ReplaySubject<Legislator>();
  public biPartisanBills1: Bill[] = [];
  public bills1: Bill[] = [];

  //public bills: Bill[] = [];
  constructor (public http: Http) {
    console.log('I am using my local implementation');

    this.getLegislators()
    .map( res => res.json())
    .subscribe(x => this.legislators.next(x));

    this.getLegislators()
    .map( res => res.json())
    .mergeAll()
    .subscribe(x => this.legislatorsList.next(x));

    this.getBillsLocal()
    .map( res => res.json())
    .mergeAll()
    .subscribe(x => this.billsList.next(x));


/*
    this.legislators
    .mergeAll()
    .filter(x => x.chamber.name == 'House')
    .subscribe(x => console.log(JSON.stringify(x)));
*/
  this.legislators
  .mergeAll()
  .filter(x => x.chamber.name == 'House')
  //.mergeAll()
  .subscribe(x => this.representatives.push(x));


  this.legislators
  .mergeAll()
  .filter(x => x.chamber.name == 'Senate')
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

    return this.http.get('http://localhost:8080/api/legislators');
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

  getBillsLocal() : Observable<Response> {

    console.log('Getting Bills');
    //this.republicanRepresentativeCount = 25;

    var headers = new Headers();
    headers.append('Accept', 'application/json');
    //headers.append('Authorization', this.myToken);

    //return this.http.get('dapi/legislators.json');
    return this.http.get('http://localhost:8080/api/bills', { headers: headers})
    //https://api.iga.in.gov//2016/bills?per_page=2000
    //return this.http.get('dapi/bills.json');
  }

  postBill(inBill: Bill) : Observable<Response> {

    console.log('Posting Bills' + JSON.stringify(inBill));
    //this.republicanRepresentativeCount = 25;
    var headers1 = new Headers();
    //headers1.append('Accept', 'application/json');
    headers1.append('Content-Type', 'application/json');


    //return this.http.get('dapi/legislators.json');
    return this.http.post('http://localhost:8080/api/bill', JSON.stringify(inBill), {headers: headers1});
    //https://api.iga.in.gov//2016/bills?per_page=2000
    //return this.http.get('dapi/bills.json');
  }


  postLegislator(inBill: Legislator) : Observable<Response> {

    console.log('Posting Legislator' + JSON.stringify(inBill));
    //this.republicanRepresentativeCount = 25;
    var headers1 = new Headers();
    //headers1.append('Accept', 'application/json');
    headers1.append('Content-Type', 'application/json');


    //return this.http.get('dapi/legislators.json');
    return this.http.post('http://localhost:8080/api/legislator', JSON.stringify(inBill), {headers: headers1});
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


    //console.log('Legislator details called');
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
