import {Component, View, Inject, Directive, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {MyLocalIGADataService} from '../services/MyLocalIGADataService';
import {Legislator} from '../models/Legislator';
import {Bill} from '../models/Bill';
import {IBill} from '../models/Bill';
import {LegislatureImage} from './app.legislatureimage';
import {ChartDirective,ChartDirective1, ExecutiveChart} from './chart.directive';
import {DonutChart} from './chart.donutchart';
import { RouterLink, ROUTER_DIRECTIVES,RouteConfig } from 'angular2/router';

import {SenateLegislatorsComponent} from './app.senatelegislatorscomponent';
import {HouseLegislatorsComponent} from './app.houselegislatorscomponent';
import {SenateBillsComponent} from './app.senatebillscomponent';
import {SenateBillDetailsComponent} from './senatebilldetails';



import {HomeDashBoardComponent} from './app.homedashboardcomponent';
import {LegislatorDetailsComponent} from './app.legislatorsdetailscomponent';

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

@Component({
    selector: 'my-app'
})

@View({
    directives: [LegislatureImage, HomeDashBoardComponent,SenateBillsComponent,SenateBillDetailsComponent,ChartDirective,
      ChartDirective1, DonutChart, ExecutiveChart, RouterLink, ROUTER_DIRECTIVES ],
    templateUrl: 'main.html'
})


@RouteConfig([
  {path: '/Home',
    as: 'Home',
    component: HomeDashBoardComponent },
  {path: '/',
    as: 'Senators',
    component: HomeDashBoardComponent },
  {path: '/SenateSenators',
    as: 'SenateSenators',
    component: SenateLegislatorsComponent },
    {path: '/HouseRepresentatives',
      as: 'HouseRepresentatives',
      component: HouseLegislatorsComponent },
    {path: '/SenateBills',
      as: 'SenateBills',
      component: SenateBillsComponent },

      {path: '/SenateBillDetails/:id',
        as: 'SenateBillDetails',
        component: SenateBillDetailsComponent },

    {path: '/LegislatorDetails/:id',
      as: 'LegislatorDetails',
      component: LegislatorDetailsComponent},

    {path: '/Representatives',
      as: 'CustomerDetails',
      component: SenateLegislatorsComponent }
])
//asds
export class AppComponent {

  public legislators: Legislator[] = [];
  public mylegislators: Legislator[] = [];
  public senators1: Legislator[] = [];
  public reps: Legislator[] = [];
  public mylegislators1: any;
  public republicanCount: number =0;
  public houseBills: IBill[] = [];
  public houseBillsList: IBill[] = [];
  public senateBillsList: IBill[] = [];

  public houseRepublicansList: Legislator[] = [];
  public houseDemocratsList: Legislator[] = [];

  public senateRepublicansList: Legislator[] = [];
  public senateDemocratsList: Legislator[] = [];

  getClass(currentIndex: number) : string {
    //console.log('I was called' + currentIndex );


    if (currentIndex % 2 == 0) {
      return "";
    }
    else  {
      return "timeline-inverted";
    }
  }
  constructor(@Inject(MyLocalIGADataService) public dataService: MyIGADataService) {

    console.log('This is the home controller');

/*
    this.mylegislators = dataService.representatives;
    this.senators1 = dataService.senators;

    dataService.legislatorsList.filter(x => x.party == 'Republican' && x.position_title == 'Senator')
    .subscribe(senator => this.senateRepublicansList.push(senator));

    dataService.legislatorsList.filter(x => x.party == 'Democratic' && x.position_title == 'Senator')
    .subscribe(senator => this.senateDemocratsList.push(senator));

    dataService.legislatorsList.filter(x => x.party == 'Republican' && x.position_title == 'Representative')
    .subscribe(senator => this.houseRepublicansList.push(senator));


    dataService.legislatorsList.filter(x => x.party == 'Democratic' && x.position_title == 'Representative')
    .subscribe(senator => this.houseDemocratsList.push(senator));


    dataService.billsList.filter(x => x.originChamber.name == 'House')
    .subscribe(bill => this.houseBillsList.push(bill));

    dataService.billsList.filter(x => x.originChamber.name == 'Senate')
    .subscribe(bill => this.senateBillsList.push(bill));

  /*

    dataService.billsList.filter(x => x.originalChamber.name == 'Senate')
    .subscribe(bill => this.senateBills.push(bill));*/
    /*
    this.dataService.legislators

    .subscribe(x => {
        //console.log(x);
    });*/

  }

  ngOnInit() {

    console.log(this.dataService.representatives + ' is the people I received');


}
}
