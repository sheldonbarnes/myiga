import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {Legislator} from '../models/Legislator';

import {LegislatureImage} from './app.legislatureimage';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Component({
    selector: 'senators'
})

@View({

    directives : [LegislatureImage],

    template:
    `
    <h1>{{chamber}} Legislators</h1>


{{senateLegislators.length}} Legislators


    <table border=0 cellspacing=5 cellspacing=5>

    <tbody>
      <tr><td>Image</td><td>First Name</td><td>Last Name</td><td>Party</td><td>chamber</td></tr>
      <tr  *ngFor="#legislator of senateLegislators">

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

    `
})


export class SenateLegislatorsComponent {

  @Input() senateLegislators: Legislator[] = [];
  @Input() chambername: string = "";

  public senateLegislators1 : Legislator[] = [];
  constructor(@Inject(MyIGADataService) public dataService: MyIGADataService) {
    //console.log(this.chambername);

    console.log('This is the beginning of the constructor for SenateLegislatorsComponent ');

    dataService.legislators
    .subscribe(x=> console.log('Cool' + JSON.stringify(x)));
    //this.senateLegislators1 = this.dataService.legislators;

  }

  ngOnInit () {
    console.log(this.chambername);

    //console.log('I am in the constructor for SenateLegislatorsComponent ' + this.senateLegislators);

  }

}
