import {Directive, ElementRef, Renderer, Input, Inject, Component} from 'angular2/core';
import {MyIGADataService} from '../services/MyIGADataService';

@Directive({
    selector: '[chart]'
})
export class ChartDirective {

  @Input() house: number;

    constructor(el: ElementRef, renderer: Renderer) {
        //el.nativeElement.style.backgroundColor = 'yellow';

        var data = [{
               value: 29,
               color: "Blue"
           }, {
               value: 71,
               color: "Red"
           }

         ];
            //Get the context of the canvas element we want to select

        var ctx: any = el.nativeElement.getContext("2d");
        var donutChart = new Chart(ctx);
        ////var lineChartOptions = areaChartOptions;
        ////lineChartOptions.datasetFill = false;
        donutChart.Doughnut(data);
    }


}

@Directive({
    selector: '[chart1]'
})
export class ChartDirective1 {

  @Input() house: number;

    constructor(el: ElementRef, renderer: Renderer) {
        //el.nativeElement.style.backgroundColor = 'yellow';

        var data = [{
               value: 10,
               color: "Blue"
           }, {
               value: 40,
               color: "Red"
           }

         ];
            //Get the context of the canvas element we want to select

        var ctx: any = el.nativeElement.getContext("2d");
        var donutChart = new Chart(ctx);
        ////var lineChartOptions = areaChartOptions;
        ////lineChartOptions.datasetFill = false;
        donutChart.Doughnut(data);
    }


}


@Directive({
    selector: '[executive]'
})
export class ExecutiveChart {

  @Input() house: number;

    constructor(el: ElementRef, renderer: Renderer) {
        //el.nativeElement.style.backgroundColor = 'yellow';

        var data = [{
               value: 100,
               color: "Red"
           }

         ];
            //Get the context of the canvas element we want to select

        var ctx: any = el.nativeElement.getContext("2d");
        var donutChart = new Chart(ctx);
        ////var lineChartOptions = areaChartOptions;
        ////lineChartOptions.datasetFill = false;
        donutChart.Doughnut(data);
    }


}
