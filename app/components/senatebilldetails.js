System.register(['angular2/core', '../services/MyLocalIGADataService', '../models/Bill', 'angular2/router', './app.legislatureimage', './app.legislatureimagesmall', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, MyLocalIGADataService_1, Bill_1, router_1, app_legislatureimage_1, app_legislatureimagesmall_1;
    var SenateBillDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyLocalIGADataService_1_1) {
                MyLocalIGADataService_1 = MyLocalIGADataService_1_1;
            },
            function (Bill_1_1) {
                Bill_1 = Bill_1_1;
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
            SenateBillDetailsComponent = (function () {
                function SenateBillDetailsComponent(dataService, params) {
                    var _this = this;
                    this.dataService = dataService;
                    this.params = params;
                    this.thisBill = new Bill_1.Bill();
                    this.inUser = "Sheldon";
                    this.comments = [];
                    this.dataService.billsList
                        .filter(function (bill) { return bill.billName == _this.params.get('id'); })
                        .subscribe(function (x) {
                        console.log(JSON.stringify(x) + ' is the bill name');
                        _this.thisBill = x;
                        _this.dataService.getBillComments(x.billName)
                            .map(function (res) { return res.json(); })
                            .mergeAll()
                            .subscribe(function (x) {
                            console.log('These are the comments' + JSON.stringify(x));
                            _this.comments.push(x);
                        });
                    });
                    console.log(params.get('id'));
                    console.log('I am in the senate bills details component');
                }
                SenateBillDetailsComponent.prototype.commentBill = function (inBill) {
                    var _this = this;
                    console.log(JSON.stringify(inBill));
                    console.log(this.inComment);
                    this.dataService.commentBill(inBill, this.inUser, this.inComment)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (x) { return console.log('This is the result from the API' + JSON.stringify(x)); });
                    this.comments = [];
                    this.dataService.getBillComments(inBill.billName)
                        .map(function (res) { return res.json(); })
                        .mergeAll()
                        .subscribe(function (x) {
                        console.log('These are the comments' + JSON.stringify(x));
                        _this.comments.push(x);
                    });
                };
                SenateBillDetailsComponent.prototype.followBill = function (billName) {
                    console.log('I am going to try to follow ' + billName);
                    this.dataService.followBill("Sheldon", billName)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (x) { return console.log('This is the result from the API' + JSON.stringify(x)); });
                };
                SenateBillDetailsComponent.prototype.ngOnInit = function () {
                };
                SenateBillDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'senatebilldetails'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, app_legislatureimagesmall_1.LegislatureImageSmall],
                        templateUrl: 'senatebilldetails.html'
                    }),
                    __param(0, core_1.Inject(MyLocalIGADataService_1.MyLocalIGADataService)), 
                    __metadata('design:paramtypes', [Object, router_1.RouteParams])
                ], SenateBillDetailsComponent);
                return SenateBillDetailsComponent;
            })();
            exports_1("SenateBillDetailsComponent", SenateBillDetailsComponent);
        }
    }
});
//# sourceMappingURL=senatebilldetails.js.map