import {Chamber} from './Chamber';
import {Legislator} from './Legislator';
import {IBill} from './Bill';
import {Bill} from './Bill';
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/subject/ReplaySubject';
import {Response} from 'angular2/src/http/static_response';
import  '../../node_modules/rx/dist/rx.all.js';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/count';
import  'rxjs/add/operator/filter';
import  'rxjs/add/operator/next';
import  'rxjs/add/operator/observeOn';
import  'rxjs/add/observable/from';
import  'rxjs/add/observable/fromArray';

export interface IMyIGADataService {

  /*
   representatives: Legislator[];
   senators: Legislator[];
  //public legislators: Legislator[] = [];
   legislators: Rx.ReplaySubject<Legislator>;
   bills: Rx.ReplaySubject<Bill>;
   biPartisanBills: Rx.ReplaySubject<Bill>;
   billsList: Rx.ReplaySubject<Bill>;
   legislatorsList: Rx.ReplaySubject<Legislator> ;
   biPartisanBills1: Bill[];
   bills1: Bill[] ;*/

   legislators: ReplaySubject<Legislator>;
   senators: Legislator[];
   representatives: Legislator[];

   biPartisanBills1: Bill[]
   billsList: ReplaySubject<Bill>;
  legislatorsList: ReplaySubject<Legislator> ;

  getFollowedBills (user: string) : Observable<Response>;
  getSessions();
  getBillComments(billName: string) : Observable<Response>;

  getConstitution();
  followLegislator(inLeg : Legislator);
  getChambers() : Observable<Response>;
  getCalendars();
  followBill(inUser: string, inbillName: string);
  followLegislator(inLeg : Legislator);
  commentBill(inBill: Bill, user: string, comment: string) ;
  getJournals();
  getLegislators() : Observable<Response>;
  //getLegislatorsWithDetails() : Legislator[];
  getBills() : Observable<Response>;
}
