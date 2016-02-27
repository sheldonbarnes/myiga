import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {MyLocalIGADataService} from '../services/MyLocalIGADataService';
import {IMyIGADataService} from '../models/IMyIGADataService';
import {Legislator} from '../models/Legislator';
import {Bill, IBill} from '../models/Bill';
import { RouterLink, ROUTER_DIRECTIVES,RouteConfig } from 'angular2/router';

import {LegislatureImage} from './app.legislatureimage';
import {LegislatureImageSmall} from './app.legislatureimagesmall';

import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Component({
    selector: 'senatebills'
})

@View({

    directives : [LegislatureImage, LegislatureImageSmall, RouterLink, ROUTER_DIRECTIVES ],
    templateUrl: 'senatebills.html'
})


export class SenateBillsComponent {

  public senateLegislators1 : Legislator[] = [];
  public senateBills : Bill[] = [];
  constructor(@Inject(MyLocalIGADataService) public dataService: IMyIGADataService) {


    dataService.billsList
    //.mergeAll()
    .filter(bill => bill.originChamber == 'senate')
    //.subscribe(x => console.log(JSON.stringify(x) + ' is some of them'));
  .subscribe(x => this.senateBills.push(x));

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


    console.log('I am in the senate bills component');

  }

  ngOnInit () {

  }

}
