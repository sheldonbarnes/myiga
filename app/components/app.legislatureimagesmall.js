System.register(['angular2/core', '../services/MyIGADataService', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MyIGADataService_1;
    var LegislatureImageSmall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyIGADataService_1_1) {
                MyIGADataService_1 = MyIGADataService_1_1;
            },
            function (_1) {}],
        execute: function() {
            LegislatureImageSmall = (function () {
                function LegislatureImageSmall(dataService) {
                    this.dataService = dataService;
                }
                LegislatureImageSmall.prototype.ngOnInit = function () {
                    console.log('I am in the leg image 1' + JSON.stringify(this.legislator));
                    this.link = this.link.replace("/2016/legislators/", "legislator_");
                    this.link = this.link.replace("?format=png", "");
                    if (this.legislator.party == 'Republican') {
                        this.borderColor = "Red";
                    }
                    else {
                        this.borderColor = "Blue";
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LegislatureImageSmall.prototype, "link", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LegislatureImageSmall.prototype, "legislator", void 0);
                LegislatureImageSmall = __decorate([
                    core_1.Component({
                        selector: 'legimg1'
                    }),
                    core_1.View({
                        template: "\n    <img src=\"http://iga.in.gov/legislative/2016/portraits/{{ link }}\" width=40 height=30 alt=\"Cool Guy\" style=\"border-radius:55%;border:2px solid {{borderColor}};\">\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [MyIGADataService_1.MyIGADataService])
                ], LegislatureImageSmall);
                return LegislatureImageSmall;
            })();
            exports_1("LegislatureImageSmall", LegislatureImageSmall);
        }
    }
});
//# sourceMappingURL=app.legislatureimagesmall.js.map