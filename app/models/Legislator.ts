import {Chamber} from './Chamber';


export class ILegislator {
  position_title: string;
  firstName: string;
  lastName: string;
  party: string;
  link: string;
  fullname: string;  
}

export class Legislator {
  position_title: string;
  firstName: string;
  lastName: string;
  party: string;
  link: string;
  fullname: string;
  chamber: Chamber;
  pngDownloadLink: string;
}
