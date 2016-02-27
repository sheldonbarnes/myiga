import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {MyLocalIGADataService} from '../services/MyLocalIGADataService';
import {IMyIGADataService} from '../models/IMyIGADataService';
import {Legislator} from '../models/Legislator';
import {Router, RouteParams, RouterLink, Location, ROUTER_DIRECTIVES} from 'angular2/router';

import {LegislatureImage} from './app.legislatureimage';

import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Component({
    selector: 'senators'
})

@View({

    directives : [LegislatureImage, RouterLink, ROUTER_DIRECTIVES],
    templateUrl: 'senators.html'
/*
    template:
    `
    <h1>{{chamber}} Legislators</h1>


{{senateLegislators.length}} Legislators


    <table border=0 cellspacing=5 cellspacing=5>

    <tbody>
      <tr><td>Image</td><td>First Name</td><td>Last Name</td><td>Party</td><td>chamber</td></tr>
      <tr  *ngFor="#legislator of senateLegislators1">

      <td>

      <legimg [link] = "legislator.pngDownloadLink"> </legimg>

      </td>
      <td>{{legislator.firstName}}  </td>
      <td>{{legislator.lastName}}</td>
      <td>{{legislator.party}}</td>
      <td>{{legislator.chamber.name}}</td>
      <td><button>follow</button></td>

      </tr>
    </tbody>
    </table>

    `*/
})


export class SenateLegislatorsComponent {

  @Input() senateLegislators: Legislator[] = [];
  @Input() chambername: string = "";

  public senateLegislators1 : Legislator[] = [];
  public senateDemocrats : Legislator[] = [];



  followLegislator(inLeg: Legislator) {
    console.log('FOLLOWING ' + JSON.stringify(inLeg));

    this.dataService.followLegislator(inLeg)
    .map( res => res.json())
    .subscribe ( x => {
       inLeg.isFollowed = true;
       console.log(JSON.stringify('asdasd ' + inLeg))
    });

  }
  constructor(@Inject(MyLocalIGADataService) public dataService: IMyIGADataService) {
    //console.log(this.chambername);

    console.log('This is the beginning of the constructor for SenateLegislatorsComponent ');


    dataService.legislators
    .mergeAll()
    .filter(leg => leg.party == "Democratic" && leg.chamber.name == "Senate")
    .subscribe(x=> this.senateDemocrats.push(x));

    dataService.legislators
    .mergeAll()
    .filter(leg => leg.party == "Republican" && leg.chamber.name == "Senate")
    .subscribe(x=>
      {
        console.log('Pushing from the SenateLegislatorsComponent');
        this.senateLegislators1.push(x);
        //console.log(this.senateLegislators1.length);
      },
      function(err){
          console.log(err);
      },
      function() {
          console.log('Completed');
      }
    );

    console.log(dataService.senators.length + ' is the length');
    //this.senateLegislators1 = this.dataService.legislators;

  }

  ngOnInit () {
    console.log(this.dataService.senators.length + ' is the length');

    //console.log('I am in the constructor for SenateLegislatorsComponent ' + this.senateLegislators);

  }

}
