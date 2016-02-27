System.register(['./Chamber', '../../node_modules/rx/dist/rx.all.js'], function(exports_1) {
    var Chamber_1;
    var IBill, BillComment, BillFollow, Bill, CountInfo, StaticBill;
    return {
        setters:[
            function (Chamber_1_1) {
                Chamber_1 = Chamber_1_1;
            },
            function (_1) {}],
        execute: function() {
            IBill = (function () {
                function IBill() {
                    this.originChamber = new Chamber_1.Chamber();
                }
                return IBill;
            })();
            exports_1("IBill", IBill);
            BillComment = (function () {
                function BillComment() {
                }
                return BillComment;
            })();
            exports_1("BillComment", BillComment);
            BillFollow = (function () {
                function BillFollow() {
                }
                return BillFollow;
            })();
            exports_1("BillFollow", BillFollow);
            Bill = (function () {
                function Bill() {
                    this.authors = [];
                    this.coauthors = [];
                    this.sponsors = [];
                    this.cosponsors = [];
                    this.advisors = [];
                    this.motions = [];
                    this.currentVersion = {};
                    this.latestVersion = {};
                }
                return Bill;
            })();
            exports_1("Bill", Bill);
            CountInfo = (function () {
                function CountInfo() {
                }
                CountInfo.prototype.getTotalRepublicans = function () {
                    return this.RepublicanAuthors + this.RepublicanCoAuthors + this.RepublicanSponsors + this.RepublicanCoSponsors + this.RepublicanAdvisors;
                };
                CountInfo.prototype.getTotalDemocrats = function () {
                    return this.DemocraticAuthors + this.DemocraticCoAuthors + this.DemocraticSponsors + this.DemocraticCoSponsors + this.DemocraticAdvisors;
                };
                return CountInfo;
            })();
            exports_1("CountInfo", CountInfo);
            StaticBill = (function () {
                function StaticBill() {
                }
                StaticBill.biPartisanRatio = function (thisBill) {
                    var newCount = StaticBill.getFullCount(thisBill);
                    var republicanCount = newCount.RepublicanAuthors + newCount.RepublicanCoAuthors
                        + newCount.RepublicanSponsors + newCount.RepublicanCoSponsors + newCount.RepublicanAdvisors;
                    var democraticCount = newCount.DemocraticAuthors + newCount.DemocraticCoAuthors
                        + newCount.DemocraticSponsors + newCount.DemocraticCoSponsors + newCount.DemocraticAdvisors;
                    if (republicanCount > democraticCount) {
                        return democraticCount / republicanCount;
                    }
                    else {
                        return republicanCount / democraticCount;
                    }
                };
                StaticBill.isBiPartisan = function (thisBill) {
                    var newCount = StaticBill.getFullCount(thisBill);
                    var republicanCount = newCount.RepublicanAuthors + newCount.RepublicanCoAuthors
                        + newCount.RepublicanSponsors + newCount.RepublicanCoSponsors + newCount.RepublicanAdvisors;
                    var democraticCount = newCount.DemocraticAuthors + newCount.DemocraticCoAuthors
                        + newCount.DemocraticSponsors + newCount.DemocraticCoSponsors + newCount.DemocraticAdvisors;
                    return (republicanCount > 0 && democraticCount > 0);
                };
                StaticBill.getFullCount = function (thisBill) {
                    var newCount = new CountInfo();
                    newCount.RepublicanAuthors = StaticBill.getAuthorCount(thisBill.authors, "Republican");
                    newCount.DemocraticAuthors = StaticBill.getAuthorCount(thisBill.authors, "Democratic");
                    newCount.RepublicanCoAuthors = StaticBill.getAuthorCount(thisBill.coauthors, "Republican");
                    newCount.DemocraticCoAuthors = StaticBill.getAuthorCount(thisBill.coauthors, "Democratic");
                    newCount.RepublicanSponsors = StaticBill.getAuthorCount(thisBill.sponsors, "Republican");
                    newCount.DemocraticSponsors = StaticBill.getAuthorCount(thisBill.sponsors, "Democratic");
                    newCount.RepublicanCoSponsors = StaticBill.getAuthorCount(thisBill.cosponsors, "Republican");
                    newCount.DemocraticCoSponsors = StaticBill.getAuthorCount(thisBill.cosponsors, "Democratic");
                    newCount.RepublicanAdvisors = StaticBill.getAuthorCount(thisBill.advisors, "Republican");
                    newCount.DemocraticAdvisors = StaticBill.getAuthorCount(thisBill.advisors, "Democratic");
                    return newCount;
                };
                StaticBill.getAuthorCount = function (legs, party) {
                    var countToReturn = 0;
                    Rx.Observable.fromArray(legs)
                        .subscribeOn(Rx.Scheduler.currentThread)
                        .filter(function (x) { return x.party == party; })
                        .count()
                        .subscribe(function (x) { return countToReturn = x; });
                    return countToReturn;
                };
                StaticBill.getAuthorCount1 = function (thisBill, party) {
                    var countToReturn = 0;
                    Rx.Observable.fromArray(thisBill.authors)
                        .filter(function (x) { return x.party == 'Republican'; })
                        .count()
                        .subscribe(function (x) { return countToReturn = x; });
                    return countToReturn;
                };
                return StaticBill;
            })();
            exports_1("StaticBill", StaticBill);
        }
    }
});
//# sourceMappingURL=Bill.js.map