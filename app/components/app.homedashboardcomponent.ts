import {Component, View, Inject, Directive, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {MyLocalIGADataService} from '../services/MyLocalIGADataService';
import {IMyIGADataService} from '../models/IMyIGADataService';
import {Legislator} from '../models/Legislator';
import {Bill,BillComment, BillFollow} from '../models/Bill';
import {IBill} from '../models/Bill';
import {StaticBill} from '../models/Bill';

import {LegislatureImage} from './app.legislatureimage';
import {ChartDirective,ChartDirective1, ExecutiveChart} from './chart.directive';
import {DonutChart} from './chart.donutchart';
import { RouterLink, ROUTER_DIRECTIVES,RouteConfig } from 'angular2/router';

import {SenateLegislatorsComponent} from './app.senatelegislatorscomponent';

import  'rxjs/add/operator/count';
import  'rxjs/add/operator/filter';
import  'rxjs/add/operator/mergeAll';
import  'rxjs/add/operator/merge';
import  'rxjs/add/operator/take';

import  'rxjs/add/observable/from';
import  'rxjs/add/observable/fromArray';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/zipAll';

import {Observable} from 'rxjs/Observable';
/*
@Component({
    selector: 'my-app'
})*/


@Component({
    selector: 'homedashboard'
})

@View({
    directives: [LegislatureImage, SenateLegislatorsComponent,ChartDirective,
      ChartDirective1, DonutChart, ExecutiveChart, RouterLink, ROUTER_DIRECTIVES ],
    templateUrl: 'dashboard.html'
})



//asds
export class HomeDashBoardComponent {

  public legislators: Legislator[] = [];
  public mylegislators: Legislator[] = [];
  public senators1: Legislator[] = [];
  public reps: Legislator[] = [];
  public mylegislators1: any;
  public republicanCount: number =0;
  public houseBills: Bill[] = [];
  public houseBillsList: Bill[] = [];
  public senateBillsList: Bill[] = [];

  public biPartisanBills : Bill[] = [];

  public houseRepublicansList: Legislator[] = [];
  public houseDemocratsList: Legislator[] = [];

  public senateRepublicansList: Legislator[] = [];
  public senateDemocratsList: Legislator[] = [];
  public followedBills: any[] = [];



  getClass(currentIndex: number) : string {
    //console.log('I was called' + currentIndex );


    if (currentIndex % 2 == 0) {
      return "";
    }
    else  {
      return "timeline-inverted";
    }
  }
  constructor(@Inject(MyLocalIGADataService) public dataService: IMyIGADataService) {
    console.log('I am in the home dashboard controller');

    this.mylegislators = dataService.representatives;
    this.senators1 = dataService.senators;
    //this.biPartisanBills = dataService.biPartisanBills1;

    console.log('This is where it starts');

    console.log(JSON.stringify(dataService.biPartisanBills1));

    dataService.legislatorsList
    .filter(x => x.party == 'Republican' && x.chamber.name == 'Senate')
    //.mergeAll()
    .subscribe(senator => this.senateRepublicansList.push(senator));

    dataService.legislatorsList.filter(x => x.party == 'Democratic' && x.chamber.name == 'Senate')
    //.mergeAll()
    .subscribe(senator => this.senateDemocratsList.push(senator));

    dataService.legislatorsList.filter(x => x.party == 'Republican' && x.chamber.name == 'House')
    .subscribe(senator => this.houseRepublicansList.push(senator));


    dataService.legislatorsList.filter(x => x.party == 'Democratic' && x.chamber.name == 'House')
    .subscribe(senator => this.houseDemocratsList.push(senator));

    dataService.getFollowedBills("Sheldon")
    .map(res => res.json())
    .subscribe (myBill => {

        Rx.Observable.fromArray(myBill)
        .subscribe(x => {


          console.log(JSON.stringify(x));
          this.followedBills.push(x);

        })

      });

/*
      var billFollow :  BillFollow = myBill;


      console.log(billFollow);
      dataService.billsList
      .filter(x => x.billName == billFollow.billName)
      .subscribe(x => {


        //console.log(test);
        console.log(JSON.stringify(x));

      })
*/



    dataService.billsList.filter(x => x.originChamber == 'house')
    .subscribe(bill => this.houseBillsList.push(bill));

    dataService.billsList.filter(x => x.originChamber == 'senate')
    .subscribe(bill => this.senateBillsList.push(bill));


  }

  ngOnInit() {

    console.log(this.dataService.representatives + ' is the people I received');


}
}
