import {Component, View, Inject, Directive, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {Legislator} from '../models/Legislator';
import {LegislatureImage} from './app.legislatureimage';
import {ChartDirective,ChartDirective1, ExecutiveChart} from './chart.directive';
import {DonutChart} from './chart.donutchart';


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

@Component({
    selector: 'my-app'
})

@View({
    directives: [LegislatureImage, SenateLegislatorsComponent,ChartDirective, ChartDirective1, DonutChart, ExecutiveChart],
    template:
    `
    <h1>This is the main application</h1>
    <div style="width:100px;border: none;float:left;overflow: hidden;">

    <canvas id="myChart" chart width="100" height="100"></canvas> <br>

    <center>House</center>
    </div>

    <div style="width:100px;border: none;float:left;overflow: hidden;">

    <canvas id="myChart" chart1 width="100" height="100"></canvas> <br>

    <center>Senate</center>
    </div>

    <div style="width:100px;border: none;overflow: hidden;">

        <img src="https://pbs.twimg.com/profile_images/656557453518110720/9nofiWkK_400x400.jpg" height="90" width="90" style="border-radius:100%; border:5px solid red">
         <br>

    <center>Governor</center>
    </div>


    <senators [senateLegislators]="mylegislators" [chambername]="House"></senators>

    <senators [senateLegislators]="senators1" [chambername]='25'></senators>


    <style>
    .containerdiv { float: left; position: relative; }
    .cornerimage { position: absolute; top: 0; right: 0; }
    </style>



    `
})
//asds
export class AppComponent {

  public legislators: Legislator[] = [];
  public mylegislators: Legislator[] = [];
  public senators1: Legislator[] = [];
  public reps: Legislator[] = [];
  public mylegislators1: any;
  public republicanCount: number =0;

  constructor(@Inject(MyIGADataService) public dataService: MyIGADataService) {
    this.mylegislators = dataService.representatives;
    this.senators1 = dataService.senators;
  }

  ngOnInit() {

    console.log(this.dataService.representatives + ' is the people I received');


}
}
