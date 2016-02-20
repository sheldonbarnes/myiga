import {Chamber} from './Chamber';
import {Legislator} from './Legislator';

export class IBill {
  billName: string;
  originalChamber: Chamber;
  type: string;
  link: string;
}


export class Bill {

  title: string;
  billName: string;
  number: number;
  description: string;
  status: string;
  stage: string;
  year: string;
  originalChamber: string;
  currentChamber: string;
  type: string;
  authors: Legislator[] = [];
  coauthors: Legislator[] = [];
  sponsors: Legislator[] = [];
  cosponsors: Legislator[] = [];
  advisors: Legislator[] = [];

  link: string;
  committeeStatus: string;

}
