System.register(['angular2/core', '../services/MyIGADataService', './app.legislatureimage', './chart.directive', './chart.donutchart', './app.senatelegislatorscomponent', 'rxjs/add/operator/count', 'rxjs/add/operator/filter', 'rxjs/add/operator/mergeAll', 'rxjs/add/operator/merge', 'rxjs/add/operator/take', 'rxjs/add/observable/from', 'rxjs/add/observable/fromArray', 'rxjs/add/operator/map', 'rxjs/add/operator/zipAll'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, MyIGADataService_1, app_legislatureimage_1, chart_directive_1, chart_donutchart_1, app_senatelegislatorscomponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyIGADataService_1_1) {
                MyIGADataService_1 = MyIGADataService_1_1;
            },
            function (app_legislatureimage_1_1) {
                app_legislatureimage_1 = app_legislatureimage_1_1;
            },
            function (chart_directive_1_1) {
                chart_directive_1 = chart_directive_1_1;
            },
            function (chart_donutchart_1_1) {
                chart_donutchart_1 = chart_donutchart_1_1;
            },
            function (app_senatelegislatorscomponent_1_1) {
                app_senatelegislatorscomponent_1 = app_senatelegislatorscomponent_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dataService) {
                    this.dataService = dataService;
                    this.legislators = [];
                    this.mylegislators = [];
                    this.senators1 = [];
                    this.reps = [];
                    this.republicanCount = 0;
                    this.mylegislators = dataService.representatives;
                    this.senators1 = dataService.senators;
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log(this.dataService.representatives + ' is the people I received');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, app_senatelegislatorscomponent_1.SenateLegislatorsComponent, chart_directive_1.ChartDirective, chart_directive_1.ChartDirective1, chart_donutchart_1.DonutChart, chart_directive_1.ExecutiveChart],
                        template: "\n    <h1>This is the main application</h1>\n    <div style=\"width:100px;border: none;float:left;overflow: hidden;\">\n\n    <canvas id=\"myChart\" chart width=\"100\" height=\"100\"></canvas> <br>\n\n    <center>House</center>\n    </div>\n\n    <div style=\"width:100px;border: none;float:left;overflow: hidden;\">\n\n    <canvas id=\"myChart\" chart1 width=\"100\" height=\"100\"></canvas> <br>\n\n    <center>Senate</center>\n    </div>\n\n    <div style=\"width:100px;border: none;overflow: hidden;\">\n\n        <img src=\"https://pbs.twimg.com/profile_images/656557453518110720/9nofiWkK_400x400.jpg\" height=\"90\" width=\"90\" style=\"border-radius:100%; border:5px solid red\">\n         <br>\n\n    <center>Governor</center>\n    </div>\n\n\n    <senators [senateLegislators]=\"mylegislators\" [chambername]=\"House\"></senators>\n\n    <senators [senateLegislators]=\"senators1\" [chambername]='25'></senators>\n\n\n    <style>\n    .containerdiv { float: left; position: relative; }\n    .cornerimage { position: absolute; top: 0; right: 0; }\n    </style>\n\n\n\n    "
                    }),
                    __param(0, core_1.Inject(MyIGADataService_1.MyIGADataService)), 
                    __metadata('design:paramtypes', [MyIGADataService_1.MyIGADataService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map