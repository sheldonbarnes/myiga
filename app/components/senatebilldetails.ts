import {Component, View, Inject, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {MyIGADataService} from '../services/MyIGADataService';
import {MyLocalIGADataService} from '../services/MyLocalIGADataService';
import {IMyIGADataService} from '../models/IMyIGADataService';
import {Legislator} from '../models/Legislator';
import {Bill, IBill, BillComment} from '../models/Bill';
import {Router, RouteParams, RouterLink, Location} from 'angular2/router';
import {LegislatureImage} from './app.legislatureimage';
import {LegislatureImageSmall} from './app.legislatureimagesmall';

import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';


@Component({
    selector: 'senatebilldetails'
})

@View({

    directives : [LegislatureImage, LegislatureImageSmall ],
    templateUrl: 'senatebilldetails.html'
})


export class SenateBillDetailsComponent {





  //public senateLegislators1 : Legislator[] = [];
  //public senateBills : Bill[] = [];
  public thisBill : Bill = new Bill();


  public inUser: string = "Sheldon";
  public inComment: string;
  public comments: any[] = [];


  constructor(@Inject(MyLocalIGADataService) public dataService: IMyIGADataService, public params:RouteParams) {

    this.dataService.billsList
    //.mergeAll()
    .filter(bill => bill.billName == this.params.get('id'))
    //.subscribe(x => console.log(JSON.stringify(x) + ' is some of them'));
  .subscribe(x => {
    console.log(JSON.stringify(x) + ' is the bill name');

    //console.log(this.thisBill.authors);

    this.thisBill = x;


    this.dataService.getBillComments(x.billName)
    .map( res => res.json())
    .mergeAll()
    .subscribe (x => {
      console.log('These are the comments' + JSON.stringify(x));
      this.comments.push(x);
    });
    //this.senateBills.push(x);

  });



    console.log(params.get('id'));


    console.log('I am in the senate bills details component');

  }

  commentBill(inBill: Bill) {

    console.log(JSON.stringify(inBill));
    console.log(this.inComment);

    this.dataService.commentBill(inBill, this.inUser, this.inComment)
    .map(res => res.json())
    .subscribe( x => console.log('This is the result from the API' + JSON.stringify(x)));


    this.comments = [];

    this.dataService.getBillComments(inBill.billName)
    .map( res => res.json())
    .mergeAll()
    .subscribe (x => {
      console.log('These are the comments' + JSON.stringify(x));

      this.comments.push(x);
    });


  }

  followBill (billName: string) {
    console.log('I am going to try to follow ' + billName);

    this.dataService.followBill("Sheldon", billName)
    .map(res => res.json())
    .subscribe( x => console.log('This is the result from the API' + JSON.stringify(x)));

  }

  ngOnInit () {

  }

}
