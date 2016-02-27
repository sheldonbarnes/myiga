System.register(['angular2/core', '../services/MyLocalIGADataService', '../models/Legislator', 'angular2/router', './app.legislatureimage', './app.legislatureimagesmall', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, MyLocalIGADataService_1, Legislator_1, router_1, app_legislatureimage_1, app_legislatureimagesmall_1;
    var LegislatorDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyLocalIGADataService_1_1) {
                MyLocalIGADataService_1 = MyLocalIGADataService_1_1;
            },
            function (Legislator_1_1) {
                Legislator_1 = Legislator_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_legislatureimage_1_1) {
                app_legislatureimage_1 = app_legislatureimage_1_1;
            },
            function (app_legislatureimagesmall_1_1) {
                app_legislatureimagesmall_1 = app_legislatureimagesmall_1_1;
            },
            function (_1) {}],
        execute: function() {
            LegislatorDetailsComponent = (function () {
                function LegislatorDetailsComponent(dataService, params) {
                    var _this = this;
                    this.dataService = dataService;
                    this.thisLegislator = new Legislator_1.Legislator();
                    this.billsAuthored = [];
                    this.billsCoauthored = [];
                    this.billsSponsored = [];
                    this.dataService.legislators.mergeAll()
                        .filter(function (x) { return x._id == params.get('id'); })
                        .subscribe(function (legislator) {
                        if (legislator.chamber.name == 'Senate') {
                            _this.salutation = "Senator";
                        }
                        else {
                            _this.salutation = "Representative";
                        }
                        if (legislator.party == 'Republican') {
                            _this.partyImage = 'Republican.png';
                        }
                        else {
                            _this.partyImage = 'Democratic.png';
                        }
                        _this.thisLegislator = legislator;
                    });
                    this.dataService.billsList
                        .subscribe(function (bill) {
                        Rx.Observable.fromArray(bill.authors)
                            .filter(function (x) { return x.lastName == _this.thisLegislator.lastName; })
                            .subscribe(function (x) {
                            _this.billsAuthored.push(bill);
                        });
                    });
                    this.dataService.billsList
                        .subscribe(function (bill) {
                        Rx.Observable.fromArray(bill.coauthors)
                            .filter(function (x) { return x.lastName == _this.thisLegislator.lastName; })
                            .subscribe(function (x) {
                            _this.billsCoauthored.push(bill);
                        });
                    });
                    this.dataService.billsList
                        .subscribe(function (bill) {
                        Rx.Observable.fromArray(bill.coauthors)
                            .filter(function (x) { return x.lastName == _this.thisLegislator.lastName; })
                            .subscribe(function (x) {
                            _this.billsCoauthored.push(bill);
                        });
                    });
                    this.dataService.billsList
                        .subscribe(function (bill) {
                        Rx.Observable.fromArray(bill.sponsors)
                            .filter(function (x) { return x.lastName == _this.thisLegislator.lastName; })
                            .subscribe(function (x) {
                            _this.billsSponsored.push(bill);
                        });
                    });
                    this.dataService.billsList
                        .subscribe(function (bill) {
                        Rx.Observable.fromArray(bill.cosponsors)
                            .filter(function (x) { return x.lastName == _this.thisLegislator.lastName; })
                            .subscribe(function (x) {
                            _this.billsSponsored.push(bill);
                        });
                    });
                }
                LegislatorDetailsComponent.prototype.ngOnInit = function () {
                };
                LegislatorDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'senators'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, app_legislatureimagesmall_1.LegislatureImageSmall, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'legislators.html'
                    }),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [Object, router_1.RouteParams])
                ], LegislatorDetailsComponent);
                return LegislatorDetailsComponent;
            })();
            exports_1("LegislatorDetailsComponent", LegislatorDetailsComponent);
        }
    }
});
//# sourceMappingURL=app.legislatorsdetailscomponent.js.map