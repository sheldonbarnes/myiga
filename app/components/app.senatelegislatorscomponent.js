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
    var SenateLegislatorsComponent;
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
            SenateLegislatorsComponent = (function () {
                function SenateLegislatorsComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.senateLegislators = [];
                    this.chambername = "";
                    this.senateLegislators1 = [];
                    this.senateDemocrats = [];
                    console.log('This is the beginning of the constructor for SenateLegislatorsComponent ');
                    dataService.legislators
                        .mergeAll()
                        .filter(function (leg) { return leg.party == "Democratic" && leg.chamber.name == "Senate"; })
                        .subscribe(function (x) { return _this.senateDemocrats.push(x); });
                    dataService.legislators
                        .mergeAll()
                        .filter(function (leg) { return leg.party == "Republican" && leg.chamber.name == "Senate"; })
                        .subscribe(function (x) {
                        console.log('Pushing from the SenateLegislatorsComponent');
                        _this.senateLegislators1.push(x);
                    }, function (err) {
                        console.log(err);
                    }, function () {
                        console.log('Completed');
                    });
                    console.log(dataService.senators.length + ' is the length');
                }
                SenateLegislatorsComponent.prototype.followLegislator = function (inLeg) {
                    console.log('FOLLOWING ' + JSON.stringify(inLeg));
                    this.dataService.followLegislator(inLeg)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (x) {
                        inLeg.isFollowed = true;
                        console.log(JSON.stringify('asdasd ' + inLeg));
                    });
                };
                SenateLegislatorsComponent.prototype.ngOnInit = function () {
                    console.log(this.dataService.senators.length + ' is the length');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SenateLegislatorsComponent.prototype, "senateLegislators", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SenateLegislatorsComponent.prototype, "chambername", void 0);
                SenateLegislatorsComponent = __decorate([
                    core_1.Component({
                        selector: 'senators'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'senators.html'
                    }),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [Object])
                ], SenateLegislatorsComponent);
                return SenateLegislatorsComponent;
            })();
            exports_1("SenateLegislatorsComponent", SenateLegislatorsComponent);
        }
    }
});
//# sourceMappingURL=app.senatelegislatorscomponent.js.map