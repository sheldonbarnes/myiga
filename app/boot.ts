import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {MyIGADataService} from './services/MyIGADataService';
import {MyLocalIGADataService} from './services/MyLocalIGADataService';
import {HTTP_BINDINGS} from 'angular2/http';
import { RouterLink,ROUTER_BINDINGS } from 'angular2/router';
import {provide} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';
/*
@HTTP_BINDINGS

Provides a basic set of injectables to use the Http service in any application
*/

bootstrap(AppComponent, [MyIGADataService, MyLocalIGADataService,HTTP_BINDINGS, ROUTER_BINDINGS, provide(APP_BASE_HREF, {useValue : '/' })]);
