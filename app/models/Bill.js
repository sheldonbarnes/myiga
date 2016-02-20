System.register([], function(exports_1) {
    var IBill, Bill;
    return {
        setters:[],
        execute: function() {
            IBill = (function () {
                function IBill() {
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