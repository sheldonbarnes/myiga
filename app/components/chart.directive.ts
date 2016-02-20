/// <reference path="../../typings/chartjs/chart.d.ts" />

import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
@Directive({
    selector: '[chart]'
})
export class ChartDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        //el.nativeElement.style.backgroundColor = 'yellow';

        var data = [{
                value: 20,
                color: "#0000FF"
            }, {
                value: 80,
                color: "#F7464A"
            }

            ]

            var options = {
                animation: false
            };

            //Get the context of the canvas element we want to select

        var ctx: any = el.nativeElement.getContext("2d");
        var donutChart = new Chart(ctx);
        ////var lineChartOptions = areaChartOptions;
        ////lineChartOptions.datasetFill = false;
        donutChart.Doughnut(data);
    }
}
