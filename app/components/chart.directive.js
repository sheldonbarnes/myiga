System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ChartDirective, ChartDirective1, ExecutiveChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChartDirective = (function () {
                function ChartDirective(el, renderer) {
                    var data = [{
                            value: 29,
                            color: "Blue"
                        }, {
                            value: 71,
                            color: "Red"
                        }
                    ];
                    var ctx = el.nativeElement.getContext("2d");
                    var donutChart = new Chart(ctx);
                    donutChart.Doughnut(data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChartDirective.prototype, "house", void 0);
                ChartDirective = __decorate([
                    core_1.Directive({
                        selector: '[chart]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ChartDirective);
                return ChartDirective;
            }());
            exports_1("ChartDirective", ChartDirective);
            ChartDirective1 = (function () {
                function ChartDirective1(el, renderer) {
                    var data = [{
                            value: 10,
                            color: "Blue"
                        }, {
                            value: 40,
                            color: "Red"
                        }
                    ];
                    var ctx = el.nativeElement.getContext("2d");
                    var donutChart = new Chart(ctx);
                    donutChart.Doughnut(data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ChartDirective1.prototype, "house", void 0);
                ChartDirective1 = __decorate([
                    core_1.Directive({
                        selector: '[chart1]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ChartDirective1);
                return ChartDirective1;
            }());
            exports_1("ChartDirective1", ChartDirective1);
            ExecutiveChart = (function () {
                function ExecutiveChart(el, renderer) {
                    var data = [{
                            value: 100,
                            color: "Red"
                        }
                    ];
                    var ctx = el.nativeElement.getContext("2d");
                    var donutChart = new Chart(ctx);
                    donutChart.Doughnut(data);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ExecutiveChart.prototype, "house", void 0);
                ExecutiveChart = __decorate([
                    core_1.Directive({
                        selector: '[executive]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ExecutiveChart);
                return ExecutiveChart;
            }());
            exports_1("ExecutiveChart", ExecutiveChart);
        }
    }
});
//# sourceMappingURL=chart.directive.js.map