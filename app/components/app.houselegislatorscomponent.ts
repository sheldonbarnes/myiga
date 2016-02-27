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
    selector: 'reps'
})

@View({

    directives : [LegislatureImage, RouterLink, ROUTER_DIRECTIVES],
    templateUrl: 'reps.html'
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


export class HouseLegislatorsComponent {

  @Input() senateLegislators: Legislator[] = [];
  @Input() chambername: string = "";

  public senateLegislators1 : Legislator[] = [];
  public senateDemocrats : Legislator[] = [];
  constructor(@Inject(MyLocalIGADataService) public dataService: IMyIGADataService) {
    //console.log(this.chambername);

    console.log('This is the beginning of the constructor for SenateLegislatorsComponent ');


    dataService.legislators
    .mergeAll()
    .filter(leg => leg.party == "Democratic" && leg.chamber.name == "House")
    .subscribe(x=> this.senateDemocrats.push(x));

    dataService.legislators
    .mergeAll()
    .filter(leg => leg.party == "Republican" && leg.chamber.name == "House")
    .subscribe(x=>
      {
        console.log('Pushing from the HouseLegislatorsComponent');
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
