System.register(['angular2/http', 'angular2/core', 'rxjs/Observable', 'rxjs/subject/ReplaySubject', './MyToken', '../../node_modules/rx/dist/rx.all.js', 'rxjs/add/operator/map', 'rxjs/add/operator/count', 'rxjs/add/operator/filter', 'rxjs/add/operator/observeOn', 'rxjs/add/observable/from', 'rxjs/add/observable/fromArray'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1, ReplaySubject_1, MyToken_1;
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
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (MyToken_1_1) {
                MyToken_1 = MyToken_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {}],
        execute: function() {
            MyIGADataService = (function () {
                function MyIGADataService(http) {
                    var _this = this;
                    this.http = http;
                    this.myToken = MyToken_1.MyToken.getToken();
                    this.mylegislators = [];
                    this.representatives = [];
                    this.senators = [];
                    this.legislators = new ReplaySubject_1.ReplaySubject();
                    this.bills = new ReplaySubject_1.ReplaySubject();
                    this.biPartisanBills = new ReplaySubject_1.ReplaySubject();
                    this.billsList = new ReplaySubject_1.ReplaySubject();
                    this.legislatorsList = new ReplaySubject_1.ReplaySubject();
                    this.biPartisanBills1 = [];
                    this.bills1 = [];
                    this.getLegislatorsList()
                        .map(function (res) { return Observable_1.Observable.fromArray(res.json().items); }, Rx.Scheduler.immediate)
                        .mergeAll()
                        .subscribe(function (x) { return _this.legislatorsList.next(x); });
                    console.log(this.legislatorsList.count + 'is the count of legislators I received');
                    this.getBillsList()
                        .map(function (res) { return Observable_1.Observable.fromArray(res.json().items); })
                        .mergeAll()
                        .subscribe(function (x) { return _this.billsList.next(x); });
                    console.log('This is the end');
                    this.legislators.filter(function (x) { return x.chamber.name == 'House'; })
                        .subscribe(function (x) { return _this.representatives.push(x); });
                    this.legislators.filter(function (x) { return x.chamber.name == 'Senate'; })
                        .subscribe(function (x) { return _this.senators.push(x); });
                }
                MyIGADataService.prototype.followLegislator = function (inLeg) {
                };
                MyIGADataService.prototype.followBill = function (inUser, inbillName) {
                };
                MyIGADataService.prototype.getSessions = function () { };
                MyIGADataService.prototype.getConstitution = function () { };
                MyIGADataService.prototype.getChambers = function () {
                    return this.http.get('dapi/chambers.json');
                };
                MyIGADataService.prototype.getCalendars = function () { };
                MyIGADataService.prototype.getJournals = function () { };
                MyIGADataService.prototype.getLegislators = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('dapi/legislators.json');
                };
                MyIGADataService.prototype.getLegislators1 = function () {
                    console.log('Getting legislators');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/legislators?per_page=100000', { headers: headers });
                };
                MyIGADataService.prototype.getLegislatorsList = function () {
                    console.log('Getting legislators');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/legislators?per_page=300', { headers: headers });
                };
                MyIGADataService.prototype.getBillsList = function () {
                    console.log('Getting Bills List');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/bills?per_page=2000', { headers: headers });
                };
                MyIGADataService.prototype.getBills = function () {
                    console.log('Getting Bills');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/bills?per_page=2000', { headers: headers });
                };
                MyIGADataService.prototype.postBill = function (inBill) {
                    console.log('Posting Bills' + JSON.stringify(inBill));
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/bill', JSON.stringify(inBill), { headers: headers1 });
                };
                MyIGADataService.prototype.postLegislator = function (inBill) {
                    console.log('Posting Legislator' + JSON.stringify(inBill));
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/legislator', JSON.stringify(inBill), { headers: headers1 });
                };
                MyIGADataService.prototype.getBillDetails = function (link) {
                    console.log('Bill details called');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    var legLink = 'https://api.iga.in.gov' + link;
                    return this.http.get(legLink, { headers: headers })
                        .map(function (res) { return res.json(); });
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