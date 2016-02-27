import {Chamber} from './Chamber';
import {Legislator} from './Legislator';
import {ILegislator} from './Legislator';
//import  'rxjs/add/operator/count';
import  '../../node_modules/rx/dist/rx.all.js';

export class IBill {
  billName: string;
  originChamber: Chamber;
  type: string;
  link: string;

  constructor() {

    this.originChamber = new Chamber();

  }

}

export class BillComment {
  _id: string;
  billName: string;
  comment: string;
  __v: number;
}

export class BillFollow {
  _id: string;
  user: string;
  billName: string;
  __v: number;
}
export class Bill {

  title: string;
  billName: string;
  number: number;
  description: string;
  status: string;
  stage: string;
  year: string;
  originChamber: string;
  currentChamber: string;
  type: string;
  authors: ILegislator[] = [];
  coauthors: ILegislator[] = [];
  sponsors: ILegislator[] = [];
  cosponsors: ILegislator[] = [];
  advisors: ILegislator[] = [];
  motions: any[] = [];
  currentVersion: any = {};
  latestVersion: any = {};
  actions: any;
  revno: any;
  versions: any;
  link: string;
  committeeStatus: string;

  constructor() {

  }

}


export class CountInfo {
  RepublicanAuthors: number;
  DemocraticAuthors: number;

  RepublicanCoAuthors: number;
  DemocraticCoAuthors: number;

  RepublicanSponsors: number;
  DemocraticSponsors: number;

  RepublicanCoSponsors: number;
  DemocraticCoSponsors: number;

  RepublicanAdvisors: number;
  DemocraticAdvisors: number;


  getTotalRepublicans() : number {
    return this.RepublicanAuthors + this.RepublicanCoAuthors + this.RepublicanSponsors + this.RepublicanCoSponsors + this.RepublicanAdvisors;
  }

  getTotalDemocrats() : number {
    return this.DemocraticAuthors + this.DemocraticCoAuthors + this.DemocraticSponsors + this.DemocraticCoSponsors + this.DemocraticAdvisors;
  }


}
export class StaticBill {


  static biPartisanRatio (thisBill: Bill): number {

    var newCount: CountInfo = StaticBill.getFullCount(thisBill);

    var republicanCount: number = newCount.RepublicanAuthors + newCount.RepublicanCoAuthors
    + newCount.RepublicanSponsors + newCount.RepublicanCoSponsors + newCount.RepublicanAdvisors;

    var democraticCount: number = newCount.DemocraticAuthors + newCount.DemocraticCoAuthors
    + newCount.DemocraticSponsors + newCount.DemocraticCoSponsors + newCount.DemocraticAdvisors;


    //console.log('The ratio is ' + democraticCount + ' and ' + republicanCount);
    if (republicanCount > democraticCount) {
      return democraticCount / republicanCount;
    }
    else {
      return republicanCount / democraticCount;
    }
  }

  static isBiPartisan(thisBill: Bill): boolean {

    var newCount: CountInfo = StaticBill.getFullCount(thisBill);

    var republicanCount: number = newCount.RepublicanAuthors + newCount.RepublicanCoAuthors
    + newCount.RepublicanSponsors + newCount.RepublicanCoSponsors + newCount.RepublicanAdvisors;

    var democraticCount: number = newCount.DemocraticAuthors + newCount.DemocraticCoAuthors
    + newCount.DemocraticSponsors + newCount.DemocraticCoSponsors + newCount.DemocraticAdvisors;


    //console.log(republicanCount);
    return (republicanCount > 0 && democraticCount > 0);
  }

  static getFullCount (thisBill: Bill): CountInfo {
    var newCount = new CountInfo();

    newCount.RepublicanAuthors = StaticBill.getAuthorCount(thisBill.authors,"Republican");
    newCount.DemocraticAuthors = StaticBill.getAuthorCount(thisBill.authors,"Democratic");

    newCount.RepublicanCoAuthors = StaticBill.getAuthorCount(thisBill.coauthors,"Republican");
    newCount.DemocraticCoAuthors = StaticBill.getAuthorCount(thisBill.coauthors,"Democratic");

    newCount.RepublicanSponsors = StaticBill.getAuthorCount(thisBill.sponsors,"Republican");
    newCount.DemocraticSponsors = StaticBill.getAuthorCount(thisBill.sponsors,"Democratic");

    newCount.RepublicanCoSponsors = StaticBill.getAuthorCount(thisBill.cosponsors,"Republican");
    newCount.DemocraticCoSponsors = StaticBill.getAuthorCount(thisBill.cosponsors,"Democratic");

    newCount.RepublicanAdvisors = StaticBill.getAuthorCount(thisBill.advisors,"Republican");
    newCount.DemocraticAdvisors = StaticBill.getAuthorCount(thisBill.advisors,"Democratic");


    return newCount;
  }
  static getAuthorCount (legs: ILegislator[], party: string) : number {

    var countToReturn: number = 0;

    Rx.Observable.fromArray(legs)
    .subscribeOn(Rx.Scheduler.currentThread)
    .filter(x => x.party == party)
    .count()
    .subscribe(x => countToReturn = x);

    return countToReturn;
  }

  static getAuthorCount1 (thisBill: Bill, party: string) : number {
    var countToReturn: number = 0;

    Rx.Observable.fromArray(thisBill.authors)
    .filter(x => x.party == 'Republican')
    .count()
    .subscribe(x => countToReturn = x);

    return countToReturn;
  }
}
