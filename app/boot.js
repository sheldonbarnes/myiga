System.register(['angular2/platform/browser', './components/app.component', './services/MyIGADataService', './services/MyLocalIGADataService', 'angular2/http', 'angular2/router', 'angular2/core'], function(exports_1) {
    var browser_1, app_component_1, MyIGADataService_1, MyLocalIGADataService_1, http_1, router_1, core_1, router_2;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (MyIGADataService_1_1) {
                MyIGADataService_1 = MyIGADataService_1_1;
            },
            function (MyLocalIGADataService_1_1) {
                MyLocalIGADataService_1 = MyLocalIGADataService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [MyIGADataService_1.MyIGADataService, MyLocalIGADataService_1.MyLocalIGADataService, http_1.HTTP_BINDINGS, router_1.ROUTER_BINDINGS, core_1.provide(router_2.APP_BASE_HREF, { useValue: '/' })]);
        }
    }
});
//# sourceMappingURL=boot.js.map