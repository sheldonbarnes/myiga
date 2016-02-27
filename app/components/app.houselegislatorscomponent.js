System.register(['angular2/core', '../services/MyLocalIGADataService', 'angular2/router', './app.legislatureimage', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, MyLocalIGADataService_1, router_1, app_legislatureimage_1;
    var HouseLegislatorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyLocalIGADataService_1_1) {
                MyLocalIGADataService_1 = MyLocalIGADataService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_legislatureimage_1_1) {
                app_legislatureimage_1 = app_legislatureimage_1_1;
            },
            function (_1) {}],
        execute: function() {
            HouseLegislatorsComponent = (function () {
                function HouseLegislatorsComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.senateLegislators = [];
                    this.chambername = "";
                    this.senateLegislators1 = [];
                    this.senateDemocrats = [];
                    console.log('This is the beginning of the constructor for SenateLegislatorsComponent ');
                    dataService.legislators
                        .mergeAll()
                        .filter(function (leg) { return leg.party == "Democratic" && leg.chamber.name == "House"; })
                        .subscribe(function (x) { return _this.senateDemocrats.push(x); });
                    dataService.legislators
                        .mergeAll()
                        .filter(function (leg) { return leg.party == "Republican" && leg.chamber.name == "House"; })
                        .subscribe(function (x) {
                        console.log('Pushing from the HouseLegislatorsComponent');
                        _this.senateLegislators1.push(x);
                    }, function (err) {
                        console.log(err);
                    }, function () {
                        console.log('Completed');
                    });
                    console.log(dataService.senators.length + ' is the length');
                }
                HouseLegislatorsComponent.prototype.ngOnInit = function () {
                    console.log(this.dataService.senators.length + ' is the length');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], HouseLegislatorsComponent.prototype, "senateLegislators", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HouseLegislatorsComponent.prototype, "chambername", void 0);
                HouseLegislatorsComponent = __decorate([
                    core_1.Component({
                        selector: 'reps'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'reps.html'
                    }),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [Object])
                ], HouseLegislatorsComponent);
                return HouseLegislatorsComponent;
            })();
            exports_1("HouseLegislatorsComponent", HouseLegislatorsComponent);
        }
    }
});
//# sourceMappingURL=app.houselegislatorscomponent.js.map