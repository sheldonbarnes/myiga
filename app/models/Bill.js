System.register(['./Chamber'], function(exports_1) {
    var Chamber_1;
    var IBill, Bill;
    return {
        setters:[
            function (Chamber_1_1) {
                Chamber_1 = Chamber_1_1;
            }],
        execute: function() {
            IBill = (function () {
                function IBill() {
                    this.originChamber = new Chamber_1.Chamber();
                }
                return IBill;
            })();
            exports_1("IBill", IBill);
            Bill = (function () {
                function Bill() {
                    this.authors = [];
                    this.coauthors = [];
                    this.sponsors = [];
                    this.cosponsors = [];
                    this.advisors = [];
                }
                return Bill;
            })();
            exports_1("Bill", Bill);
        }
    }
});
//# sourceMappingURL=Bill.js.map