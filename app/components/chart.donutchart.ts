
import {Directive, ElementRef, Renderer,Component, View, Input, Inject} from 'angular2/core';
import {DonutInfo} from '../models/DonutInfo';
import {MyIGADataService} from '../services/MyIGADataService';
import {CHART_DIRECTIVES} from  './charts/charts';

@Component({
    selector: 'donutchart'
})


@View ({
  template:
  `

    <h1>Donut Chart</h1>

    <canvas id="myChart" chart width="100" height="100"></canvas> <br>


  `

})

export class DonutChart {



    constructor(public el: ElementRef, public renderer: Renderer) {


            var data = [{
                    value: 3,
                    color: "#0000FF"
                }, {
                    value: 80,
                    color: "#F7464A"
                }

                ]
        var ctx = el.nativeElement.getContext("2d");
        var donutChart = new Chart(ctx);
                donutChart.Doughnut(data);
      }
      ngOnInit() {


        ////var lineChartOptions = areaChartOptions;
        ////lineChartOptions.datasetFill = false;

      }

}
