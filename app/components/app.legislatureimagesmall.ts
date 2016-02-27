import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {Legislator} from '../models/Legislator';

import  'rxjs/add/operator/map';


@Component({
    selector: 'legimg1'
})

@View({

    template:
    `
    <img src="http://iga.in.gov/legislative/2016/portraits/{{ link }}" width=40 height=30 alt="Cool Guy" style="border-radius:55%;border:2px solid {{borderColor}};">


    `
})



export class LegislatureImageSmall {

  public image: any;
  public labels: any[];
  public data: any[];

  public borderColor: string;

  @Input() public link: any;
  @Input() public legislator: any;


  constructor(public dataService: MyIGADataService) {
  }

  ngOnInit() {
    console.log('I am in the leg image 1' + JSON.stringify(this.legislator));
    this.link = this.link.replace("/2016/legislators/","legislator_");
    this.link = this.link.replace("?format=png","");

    if (this.legislator.party == 'Republican') {
      this.borderColor = "Red"
    }
    else {
      this.borderColor = "Blue";
    }

  }

}
