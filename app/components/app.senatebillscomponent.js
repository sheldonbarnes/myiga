System.register(['angular2/core', '../services/MyLocalIGADataService', 'angular2/router', './app.legislatureimage', './app.legislatureimagesmall', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, MyLocalIGADataService_1, router_1, app_legislatureimage_1, app_legislatureimagesmall_1;
    var SenateBillsComponent;
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
            function (app_legislatureimagesmall_1_1) {
                app_legislatureimagesmall_1 = app_legislatureimagesmall_1_1;
            },
            function (_1) {}],
        execute: function() {
            SenateBillsComponent = (function () {
                function SenateBillsComponent(dataService) {
                    var _this = this;
                    this.dataService = dataService;
                    this.senateLegislators1 = [];
                    this.senateBills = [];
                    dataService.billsList
                        .filter(function (bill) { return bill.originChamber == 'senate'; })
                        .subscribe(function (x) { return _this.senateBills.push(x); });
                    console.log('I am in the senate bills component');
                }
                SenateBillsComponent.prototype.ngOnInit = function () {
                };
                SenateBillsComponent = __decorate([
                    core_1.Component({
                        selector: 'senatebills'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, app_legislatureimagesmall_1.LegislatureImageSmall, router_1.RouterLink, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'senatebills.html'
                    }),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [Object])
                ], SenateBillsComponent);
                return SenateBillsComponent;
            })();
            exports_1("SenateBillsComponent", SenateBillsComponent);
        }
    }
});
//# sourceMappingURL=app.senatebillscomponent.js.map