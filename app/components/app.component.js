System.register(['angular2/core', '../services/MyIGADataService', '../services/MyLocalIGADataService', './app.legislatureimage', './chart.directive', './chart.donutchart', 'angular2/router', './app.senatelegislatorscomponent', './app.houselegislatorscomponent', './app.senatebillscomponent', './senatebilldetails', './app.homedashboardcomponent', './app.legislatorsdetailscomponent', 'rxjs/add/operator/count', 'rxjs/add/operator/filter', 'rxjs/add/operator/mergeAll', 'rxjs/add/operator/merge', 'rxjs/add/operator/take', 'rxjs/add/observable/from', 'rxjs/add/observable/fromArray', 'rxjs/add/operator/map', 'rxjs/add/operator/zipAll'], function(exports_1) {
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
    var core_1, MyIGADataService_1, MyLocalIGADataService_1, app_legislatureimage_1, chart_directive_1, chart_donutchart_1, router_1, app_senatelegislatorscomponent_1, app_houselegislatorscomponent_1, app_senatebillscomponent_1, senatebilldetails_1, app_homedashboardcomponent_1, app_legislatorsdetailscomponent_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyIGADataService_1_1) {
                MyIGADataService_1 = MyIGADataService_1_1;
            },
            function (MyLocalIGADataService_1_1) {
                MyLocalIGADataService_1 = MyLocalIGADataService_1_1;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_senatelegislatorscomponent_1_1) {
                app_senatelegislatorscomponent_1 = app_senatelegislatorscomponent_1_1;
            },
            function (app_houselegislatorscomponent_1_1) {
                app_houselegislatorscomponent_1 = app_houselegislatorscomponent_1_1;
            },
            function (app_senatebillscomponent_1_1) {
                app_senatebillscomponent_1 = app_senatebillscomponent_1_1;
            },
            function (senatebilldetails_1_1) {
                senatebilldetails_1 = senatebilldetails_1_1;
            },
            function (app_homedashboardcomponent_1_1) {
                app_homedashboardcomponent_1 = app_homedashboardcomponent_1_1;
            },
            function (app_legislatorsdetailscomponent_1_1) {
                app_legislatorsdetailscomponent_1 = app_legislatorsdetailscomponent_1_1;
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
                    this.houseBills = [];
                    this.houseBillsList = [];
                    this.senateBillsList = [];
                    this.houseRepublicansList = [];
                    this.houseDemocratsList = [];
                    this.senateRepublicansList = [];
                    this.senateDemocratsList = [];
                    console.log('This is the home controller');
                }
                AppComponent.prototype.getClass = function (currentIndex) {
                    if (currentIndex % 2 == 0) {
                        return "";
                    }
                    else {
                        return "timeline-inverted";
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    console.log(this.dataService.representatives + ' is the people I received');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, app_homedashboardcomponent_1.HomeDashBoardComponent, app_senatebillscomponent_1.SenateBillsComponent, senatebilldetails_1.SenateBillDetailsComponent, chart_directive_1.ChartDirective,
                            chart_directive_1.ChartDirective1, chart_donutchart_1.DonutChart, chart_directive_1.ExecutiveChart, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'main.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/Home',
                            as: 'Home',
                            component: app_homedashboardcomponent_1.HomeDashBoardComponent },
                        { path: '/',
                            as: 'Senators',
                            component: app_homedashboardcomponent_1.HomeDashBoardComponent },
                        { path: '/SenateSenators',
                            as: 'SenateSenators',
                            component: app_senatelegislatorscomponent_1.SenateLegislatorsComponent },
                        { path: '/HouseRepresentatives',
                            as: 'HouseRepresentatives',
                            component: app_houselegislatorscomponent_1.HouseLegislatorsComponent },
                        { path: '/SenateBills',
                            as: 'SenateBills',
                            component: app_senatebillscomponent_1.SenateBillsComponent },
                        { path: '/SenateBillDetails/:id',
                            as: 'SenateBillDetails',
                            component: senatebilldetails_1.SenateBillDetailsComponent },
                        { path: '/LegislatorDetails/:id',
                            as: 'LegislatorDetails',
                            component: app_legislatorsdetailscomponent_1.LegislatorDetailsComponent },
                        { path: '/Representatives',
                            as: 'CustomerDetails',
                            component: app_senatelegislatorscomponent_1.SenateLegislatorsComponent }
                    ]),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [MyIGADataService_1.MyIGADataService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map