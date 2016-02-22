import {Chamber} from './Chamber';
import {Legislator} from './Legislator';
import {IBill} from './Bill';
import {Bill} from './Bill';
import {Observable} from 'rxjs/Observable';
import {Response} from 'angular2/src/http/static_response';

export interface IMyIGADataService {
  getSessions();
  getConstitution();
  getChambers() : Observable<Response>;
  getCalendars();
  getJournals();
  getLegislators() : Observable<Response>;
  //getLegislatorsWithDetails() : Legislator[];
  getBills() : Observable<Response>;
}
