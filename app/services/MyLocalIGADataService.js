System.register(['angular2/http', 'angular2/core', 'rxjs/subject/ReplaySubject', './MyToken', '../../node_modules/rx/dist/rx.all.js'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, ReplaySubject_1, MyToken_1;
    var MyLocalIGADataService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ReplaySubject_1_1) {
                ReplaySubject_1 = ReplaySubject_1_1;
            },
            function (MyToken_1_1) {
                MyToken_1 = MyToken_1_1;
            },
            function (_1) {}],
        execute: function() {
            MyLocalIGADataService = (function () {
                function MyLocalIGADataService(http) {
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
                    console.log('I am using my local implementation');
                    this.getLegislators()
                        .map(function (res) { return res.json(); })
                        .subscribe(function (x) { return _this.legislators.next(x); });
                    this.getLegislators()
                        .map(function (res) { return res.json(); })
                        .mergeAll()
                        .subscribe(function (x) { return _this.legislatorsList.next(x); });
                    this.getBillsLocal()
                        .map(function (res) { return res.json(); })
                        .mergeAll()
                        .subscribe(function (x) { return _this.billsList.next(x); });
                    this.legislators
                        .mergeAll()
                        .filter(function (x) { return x.chamber.name == 'House'; })
                        .subscribe(function (x) { return _this.representatives.push(x); });
                    this.legislators
                        .mergeAll()
                        .filter(function (x) { return x.chamber.name == 'Senate'; })
                        .subscribe(function (x) { return _this.senators.push(x); });
                }
                MyLocalIGADataService.prototype.getSessions = function () { };
                MyLocalIGADataService.prototype.getConstitution = function () { };
                MyLocalIGADataService.prototype.getChambers = function () {
                    return this.http.get('dapi/chambers.json');
                };
                MyLocalIGADataService.prototype.getCalendars = function () { };
                MyLocalIGADataService.prototype.getJournals = function () { };
                MyLocalIGADataService.prototype.getLegislators = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('http://localhost:8080/api/legislators');
                };
                MyLocalIGADataService.prototype.getLegislators1 = function () {
                    console.log('Getting legislators');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/legislators?per_page=100000', { headers: headers });
                };
                MyLocalIGADataService.prototype.getLegislatorsList = function () {
                    console.log('Getting legislators');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/legislators?per_page=300', { headers: headers });
                };
                MyLocalIGADataService.prototype.getBillsList = function () {
                    console.log('Getting Bills List');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/bills?per_page=2000', { headers: headers });
                };
                MyLocalIGADataService.prototype.getBills = function () {
                    console.log('Getting Bills');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    return this.http.get('https://api.iga.in.gov/2016/bills?per_page=2000', { headers: headers });
                };
                MyLocalIGADataService.prototype.getFollowedBills = function (user) {
                    console.log('Getting getFollowedBills ' + user);
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    return this.http.get('http://localhost:8080/api/followedBills/' + user, { headers: headers });
                };
                MyLocalIGADataService.prototype.getBillComments = function (billName) {
                    console.log('Getting Bill Comments for ' + billName);
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    return this.http.get('http://localhost:8080/api/billComments/' + billName, { headers: headers });
                };
                MyLocalIGADataService.prototype.getBillsLocal = function () {
                    console.log('Getting Bills');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    return this.http.get('http://localhost:8080/api/bills', { headers: headers });
                };
                MyLocalIGADataService.prototype.followBill = function (inUser, inbillName) {
                    console.log('Posting Bills' + JSON.stringify(inbillName));
                    var stuff = { user: inUser, billName: inbillName };
                    console.log('Thie stuff ' + stuff);
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/followBill', JSON.stringify(stuff), { headers: headers1 });
                };
                MyLocalIGADataService.prototype.postBill = function (inBill) {
                    console.log('Posting Bills' + JSON.stringify(inBill));
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/bill', JSON.stringify(inBill), { headers: headers1 });
                };
                MyLocalIGADataService.prototype.postLegislator = function (inBill) {
                    console.log('Posting Legislator' + JSON.stringify(inBill));
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/legislator', JSON.stringify(inBill), { headers: headers1 });
                };
                MyLocalIGADataService.prototype.getBillDetails = function (link) {
                    console.log('Bill details called');
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    var legLink = 'https://api.iga.in.gov' + link;
                    return this.http.get(legLink, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                MyLocalIGADataService.prototype.getLegislatorDetails = function (link) {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    headers.append('Authorization', this.myToken);
                    var legLink = 'https://api.iga.in.gov' + link;
                    return this.http.get(legLink, { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                MyLocalIGADataService.prototype.followLegislator = function (inLeg) {
                    console.log('making the call');
                    var stuff = { user: "Sheldon", legislatorID: inLeg._id };
                    console.log('Thie stuff ' + JSON.stringify(stuff));
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/followLegislator', JSON.stringify(stuff), { headers: headers1 });
                };
                MyLocalIGADataService.prototype.commentBill = function (inBill, inUser, inComment) {
                    var stuff = { user: inUser, billName: inBill.billName, comment: inComment };
                    console.log('Thie stuff ' + JSON.stringify(stuff));
                    var headers1 = new http_1.Headers();
                    headers1.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:8080/api/billComment', JSON.stringify(stuff), { headers: headers1 });
                };
                MyLocalIGADataService.prototype.getLegislatorImage = function (link) {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'image/png');
                    headers.append('Authorization', this.myToken);
                    var legImageLink = 'https://api.iga.in.gov' + link;
                    return this.http.get(legImageLink, { headers: headers })
                        .map(function (res) { return res; });
                };
                MyLocalIGADataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MyLocalIGADataService);
                return MyLocalIGADataService;
            })();
            exports_1("MyLocalIGADataService", MyLocalIGADataService);
        }
    }
});
//# sourceMappingURL=MyLocalIGADataService.js.map