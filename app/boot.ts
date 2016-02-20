import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {MyIGADataService} from './services/MyIGADataService';
import {HTTP_BINDINGS} from 'angular2/http';


/*
@HTTP_BINDINGS

Provides a basic set of injectables to use the Http service in any application
*/

bootstrap(AppComponent, [MyIGADataService, HTTP_BINDINGS]);
