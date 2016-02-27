System.register(['angular2/core', '../services/MyLocalIGADataService', './app.legislatureimage', './chart.directive', './chart.donutchart', 'angular2/router', './app.senatelegislatorscomponent', 'rxjs/add/operator/count', 'rxjs/add/operator/filter', 'rxjs/add/operator/mergeAll', 'rxjs/add/operator/merge', 'rxjs/add/operator/take', 'rxjs/add/observable/from', 'rxjs/add/observable/fromArray', 'rxjs/add/operator/map', 'rxjs/add/operator/zipAll'], function(exports_1) {
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
    var core_1, MyLocalIGADataService_1, app_legislatureimage_1, chart_directive_1, chart_donutchart_1, router_1, app_senatelegislatorscomponent_1;
    var HomeDashBoardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
            HomeDashBoardComponent = (function () {
                function HomeDashBoardComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.legislators = [];
                    this.mylegislators = [];
                    this.senators1 = [];
                    this.reps = [];
                    this.republicanCount = 0;
                    this.houseBills = [];
                    this.houseBillsList = [];
                    this.senateBillsList = [];
                    this.biPartisanBills = [];
                    this.houseRepublicansList = [];
                    this.houseDemocratsList = [];
                    this.senateRepublicansList = [];
                    this.senateDemocratsList = [];
                    this.followedBills = [];
                    console.log('I am in the home dashboard controller');
                    this.mylegislators = dataService.representatives;
                    this.senators1 = dataService.senators;
                    console.log('This is where it starts');
                    console.log(JSON.stringify(dataService.biPartisanBills1));
                    dataService.legislatorsList
                        .filter(function (x) { return x.party == 'Republican' && x.chamber.name == 'Senate'; })
                        .subscribe(function (senator) { return _this.senateRepublicansList.push(senator); });
                    dataService.legislatorsList.filter(function (x) { return x.party == 'Democratic' && x.chamber.name == 'Senate'; })
                        .subscribe(function (senator) { return _this.senateDemocratsList.push(senator); });
                    dataService.legislatorsList.filter(function (x) { return x.party == 'Republican' && x.chamber.name == 'House'; })
                        .subscribe(function (senator) { return _this.houseRepublicansList.push(senator); });
                    dataService.legislatorsList.filter(function (x) { return x.party == 'Democratic' && x.chamber.name == 'House'; })
                        .subscribe(function (senator) { return _this.houseDemocratsList.push(senator); });
                    dataService.getFollowedBills("Sheldon")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (myBill) {
                        Rx.Observable.fromArray(myBill)
                            .subscribe(function (x) {
                            console.log(JSON.stringify(x));
                            _this.followedBills.push(x);
                        });
                    });
                    dataService.billsList.filter(function (x) { return x.originChamber == 'house'; })
                        .subscribe(function (bill) { return _this.houseBillsList.push(bill); });
                    dataService.billsList.filter(function (x) { return x.originChamber == 'senate'; })
                        .subscribe(function (bill) { return _this.senateBillsList.push(bill); });
                }
                HomeDashBoardComponent.prototype.getClass = function (currentIndex) {
                    if (currentIndex % 2 == 0) {
                        return "";
                    }
                    else {
                        return "timeline-inverted";
                    }
                };
                HomeDashBoardComponent.prototype.ngOnInit = function () {
                    console.log(this.dataService.representatives + ' is the people I received');
                };
                HomeDashBoardComponent = __decorate([
                    core_1.Component({
                        selector: 'homedashboard'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, app_senatelegislatorscomponent_1.SenateLegislatorsComponent, chart_directive_1.ChartDirective,
                            chart_directive_1.ChartDirective1, chart_donutchart_1.DonutChart, chart_directive_1.ExecutiveChart, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'dashboard.html'
                    }),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [Object])
                ], HomeDashBoardComponent);
                return HomeDashBoardComponent;
            })();
            exports_1("HomeDashBoardComponent", HomeDashBoardComponent);
        }
    }
});
//# sourceMappingURL=app.homedashboardcomponent.js.map