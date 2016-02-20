System.register(['angular2/core'], function(exports_1) {
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
    var ChartDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ChartDirective = (function () {
                function ChartDirective(el, renderer) {
                    var data = [{
                            value: 20,
                            color: "#0000FF"
                        }, {
                            value: 80,
                            color: "#F7464A"
                        }
                    ];
                    var options = {
                        animation: false
                    };
                    var ctx = el.nativeElement.getContext("2d");
                    var donutChart = new Chart(ctx);
                    donutChart.Doughnut(data);
                }
                ChartDirective = __decorate([
                    core_1.Directive({
                        selector: '[chart]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], ChartDirective);
                return ChartDirective;
            })();
            exports_1("ChartDirective", ChartDirective);
        }
    }
});
//# sourceMappingURL=chart.directive.js.map