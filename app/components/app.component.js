System.register(['angular2/core', '../services/MyIGADataService', './app.legislatureimage', './chart.directive', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MyIGADataService_1, app_legislatureimage_1, chart_directive_1;
    var AppComponent;
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
            function (chart_directive_1_1) {
                chart_directive_1 = chart_directive_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(dataService, el, renderer) {
                    this.dataService = dataService;
                    this.mylegislators = [];
                    this.mylegislators = dataService.getLegislatorsWithDetails();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        directives: [app_legislatureimage_1.LegislatureImage, chart_directive_1.ChartDirective],
                        template: "\n\n    <canvas id=\"myChart\" chart width=\"100\" height=\"100\"></canvas> <br>\n    House\n    <h1>Hello World</h1>\n\n    <style>\n    .containerdiv { float: left; position: relative; }\n    .cornerimage { position: absolute; top: 0; right: 0; }\n    </style>\n\n\n\n    <table border=0 cellspacing=5 cellspacing=5>\n\n    <tbody>\n      <tr><td>Image</td><td>First Name</td><td>Last Name</td><td>Party</td><td>chamber</td></tr>\n      <tr  *ngFor=\"#legislator of mylegislators\">\n\n      <td>\n\n\n  <legimg [link] = \"legislator.pngDownloadLink\"> </legimg>\n\n\n\n\n      </td>\n      <td>{{legislator.firstName}}  </td>\n      <td>{{legislator.lastName}}</td>\n      <td>{{legislator.party}}</td>\n      <td>{{legislator.chamber.name}}</td>\n\n      </tr>\n    </tbody>\n    </table>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [MyIGADataService_1.MyIGADataService, core_1.ElementRef, core_1.Renderer])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map