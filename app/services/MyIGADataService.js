System.register(['angular2/http', 'angular2/core', 'rxjs/Observable', './MyToken', 'rxjs/add/operator/map', 'rxjs/add/operator/count', 'rxjs/add/operator/filter', 'rxjs/add/observable/from', 'rxjs/add/observable/fromArray'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1, MyToken_1;
    var MyIGADataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (MyToken_1_1) {
                MyToken_1 = MyToken_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {}],
        execute: function() {
            MyIGADataService = (function () {
                function MyIGADataService(http) {
                    this.http = http;
                    this.myToken = MyToken_1.MyToken.getToken();
                }
                MyIGADataService.prototype.getSessions = function () { };
                MyIGADataService.prototype.getConstitution = function () { };
                MyIGADataService.prototype.getChambers = function () {
                    return this.http.get('dapi/chambers.json');
                };
                MyIGADataService.prototype.getCalendars = function () { };
                MyIGADataService.prototype.getJournals = function () { };
                MyIGADataService.prototype.getLegislators = function () {
                    this.getBills1();
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/legislators', { headers: headers });
                };
                MyIGADataService.prototype.getBills = function () {
                    return this.http.get('dapi/bills.json');
                };
                MyIGADataService.prototype.getLegislatorDetails = function (link) {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    var legLink = 'https://api.iga.in.gov' + link;
                    return this.http.get(legLink, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                MyIGADataService.prototype.getLegislatorImage = function (link) {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'image/png');
                    headers.append('Authorization', this.myToken);
                    var legImageLink = 'https://api.iga.in.gov' + link;
                    return this.http.get(legImageLink, { headers: headers })
                        .map(function (res) { return res; });
                };
                MyIGADataService.prototype.getLegislatorsWithDetails = function () {
                    var _this = this;
                    var myNewLeg = [];
                    console.log('I was called: true I was called');
                    this.http.get('dapi/legislators.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (legislators) {
                        Observable_1.Observable.fromArray(legislators).subscribe(function (leg) {
                            _this.getLegislatorDetails(leg.link)
                                .filter(function (te) { return te.chamber.name == 'House' && te.party == 'Republican'; })
                                .subscribe(function (test) {
                                myNewLeg.push(test);
                            });
                        });
                    });
                    return myNewLeg;
                };
                MyIGADataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyIGADataService);
                return MyIGADataService;
            })();
            exports_1("MyIGADataService", MyIGADataService);
        }
    }
});
//# sourceMappingURL=MyIGADataService.js.map