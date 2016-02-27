import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {MyLocalIGADataService} from '../services/MyLocalIGADataService';
import {IMyIGADataService} from '../models/IMyIGADataService';
import {Legislator} from '../models/Legislator';
import {Bill, IBill} from '../models/Bill';
import {Router, RouteParams, RouterLink, Location, ROUTER_DIRECTIVES} from 'angular2/router';

import {LegislatureImage} from './app.legislatureimage';
import {LegislatureImageSmall} from './app.legislatureimagesmall';

import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Component({
    selector: 'senators'
})

@View({

    directives : [LegislatureImage, LegislatureImageSmall, RouterLink, ROUTER_DIRECTIVES],
    templateUrl: 'legislators.html'
})


export class LegislatorDetailsComponent {

  public thisLegislator : Legislator = new Legislator();
  public billsAuthored : Bill[] = [];
  public billsCoauthored : Bill[] = [];
  public billsSponsored : Bill[] = [];
  public salutation : string;
  public partyImage : string;

  constructor(@Inject(MyLocalIGADataService) public dataService: IMyIGADataService, params:RouteParams) {

    //Get data on the legislator
    this.dataService.legislators.mergeAll()
    .filter(x => x._id == params.get('id'))
    .subscribe(legislator => {
      //console.log(JSON.stringify(legislator));
      //console.log(legislator.chamber.name);
      if(legislator.chamber.name == 'Senate'){
        this.salutation = "Senator";
      }else{
        this.salutation = "Representative"
      }

      if(legislator.party == 'Republican'){
        this.partyImage = 'Republican.png';
      }else{
        this.partyImage = 'Democratic.png';
      }

      this.thisLegislator = legislator;
    });

    //Get data on bills authored
    this.dataService.billsList
    //.filter(bills => bills.authors.)
    .subscribe(bill => {
      Rx.Observable.fromArray(bill.authors)
      //.mergeAll()
      .filter (x => x.lastName == this.thisLegislator.lastName)
      .subscribe(x => {
          this.billsAuthored.push(bill);
      });
    });

    //Get data on bills coauthored
    this.dataService.billsList
    //.filter(bills => bills.authors.)
    .subscribe(bill => {
      Rx.Observable.fromArray(bill.coauthors)
      //.mergeAll()
      .filter (x => x.lastName == this.thisLegislator.lastName)
      .subscribe(x => {
          this.billsCoauthored.push(bill);

      });
    });

    //Get data on bills coauthored
    this.dataService.billsList
    //.filter(bills => bills.authors.)
    .subscribe(bill => {
      Rx.Observable.fromArray(bill.coauthors)
      //.mergeAll()
      .filter (x => x.lastName == this.thisLegislator.lastName)
      .subscribe(x => {
          this.billsCoauthored.push(bill);

      });
    });

    //Get data on bills sponsored
    this.dataService.billsList
    //.filter(bills => bills.authors.)
    .subscribe(bill => {
      Rx.Observable.fromArray(bill.sponsors)
      //.mergeAll()
      .filter (x => x.lastName == this.thisLegislator.lastName)
      .subscribe(x => {
          this.billsSponsored.push(bill);

      });
    });

    //Get data on bills sponsored
    this.dataService.billsList
    //.filter(bills => bills.authors.)
    .subscribe(bill => {
      Rx.Observable.fromArray(bill.cosponsors)
      //.mergeAll()
      .filter (x => x.lastName == this.thisLegislator.lastName)
      .subscribe(x => {
          this.billsSponsored.push(bill);

      });
    });

/*uncomment to refresh data
    dataService.billsList
    //.filter(bill => bill.originChamber.name == 'Senate')
    .map(y => dataService.getBillDetails(y.link))
    .mergeAll()
    //.take(5)
    //.filter(x => x.motions.length > 0)
    //.filter(x =>  StaticBill.getFullCount(x).getTotalRepublicans() > 3 && StaticBill.getFullCount(x).getTotalDemocrats() > 3 &&  StaticBill.biPartisanRatio(x) > 0.80)
    .subscribe(x => {

      dataService.postBill(x)
      .map(res => res.json())
      .subscribe( x => console.log(''));

      console.log('Pushing ' + x.billName + ' ' + this.senateBills.length);
      this.senateBills.push(x);
    }); */

  }

  ngOnInit () {

  }

}
