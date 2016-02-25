import {Chamber} from './Chamber';
import {Legislator} from './Legislator';

export class IBill {
  billName: string;
  originChamber: Chamber;
  type: string;
  link: string;

  constructor() {

    this.originChamber = new Chamber();

  }

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
