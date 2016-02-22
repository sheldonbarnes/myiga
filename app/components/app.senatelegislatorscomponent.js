System.register(['angular2/core', '../services/MyIGADataService', './app.legislatureimage', 'rxjs/add/operator/map'], function(exports_1) {
    "use strict";
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
    var core_1, MyIGADataService_1, app_legislatureimage_1;
    var SenateLegislatorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyIGADataService_1_1) {
                MyIGADataService_1 = MyIGADataService_1_1;
            },
            function (app_legislatureimage_1_1) {
                app_legislatureimage_1 = app_legislatureimage_1_1;
            },
            function (_1) {}],
        execute: function() {
            SenateLegislatorsComponent = (function () {
                function SenateLegislatorsComponent(dataService) {
                    this.dataService = dataService;
                    this.senateLegislators = [];
                    this.chambername = "";
                    this.senateLegislators1 = [];
                    console.log('This is the beginning of the constructor for SenateLegislatorsComponent ');
                    dataService.legislators
                        .subscribe(function (x) { return console.log('Cool' + JSON.stringify(x)); });
                }
                SenateLegislatorsComponent.prototype.ngOnInit = function () {
                    console.log(this.chambername);
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
                        directives: [app_legislatureimage_1.LegislatureImage],
                        template: "\n    <h1>{{chamber}} Legislators</h1>\n\n\n{{senateLegislators.length}} Legislators\n\n\n    <table border=0 cellspacing=5 cellspacing=5>\n\n    <tbody>\n      <tr><td>Image</td><td>First Name</td><td>Last Name</td><td>Party</td><td>chamber</td></tr>\n      <tr  *ngFor=\"#legislator of senateLegislators\">\n\n      <td>\n\n      <legimg [link] = \"legislator.pngDownloadLink\"> </legimg>\n\n      </td>\n      <td>{{legislator.firstName}}  </td>\n      <td>{{legislator.lastName}}</td>\n      <td>{{legislator.party}}</td>\n      <td>{{legislator.chamber.name}}</td>\n      <td><button>follow</button></td>\n\n      </tr>\n    </tbody>\n    </table>\n\n    "
                    }),
                    __param(0, core_1.Inject(MyIGADataService_1.MyIGADataService)), 
                    __metadata('design:paramtypes', [MyIGADataService_1.MyIGADataService])
                ], SenateLegislatorsComponent);
                return SenateLegislatorsComponent;
            }());
            exports_1("SenateLegislatorsComponent", SenateLegislatorsComponent);
        }
    }
});
//# sourceMappingURL=app.senatelegislatorscomponent.js.map