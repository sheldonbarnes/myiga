

import {Component, View, Inject, Directive, ElementRef, Renderer} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {Legislator} from '../models/Legislator';
import {LegislatureImage} from './app.legislatureimage';
import {ChartDirective} from './chart.directive';

import  'rxjs/add/operator/map';


@Component({
    selector: 'my-app'
})

@View({
    directives: [LegislatureImage,ChartDirective],
    template:
    `

    <canvas id="myChart" chart width="100" height="100"></canvas> <br>
    House
    <h1>Hello World</h1>

    <style>
    .containerdiv { float: left; position: relative; }
    .cornerimage { position: absolute; top: 0; right: 0; }
    </style>



    <table border=0 cellspacing=5 cellspacing=5>

    <tbody>
      <tr><td>Image</td><td>First Name</td><td>Last Name</td><td>Party</td><td>chamber</td></tr>
      <tr  *ngFor="#legislator of mylegislators">

      <td>


  <legimg [link] = "legislator.pngDownloadLink"> </legimg>




      </td>
      <td>{{legislator.firstName}}  </td>
      <td>{{legislator.lastName}}</td>
      <td>{{legislator.party}}</td>
      <td>{{legislator.chamber.name}}</td>

      </tr>
    </tbody>
    </table>

    `
})
//asds
export class AppComponent {

  public mylegislators: Legislator[] = [];


  constructor(public dataService: MyIGADataService, el: ElementRef, renderer: Renderer) {

    this.mylegislators = dataService.getLegislatorsWithDetails();

  }

}
