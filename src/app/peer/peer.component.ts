import { Component, OnInit, Input } from '@angular/core';
import { HbtsService, DMRUser } from '../hbts.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.css']
})
export class PeerComponent implements OnInit {

  status: string[] = ['Idle', 'Connected', 'Closed', 'Listening', 'Authenticating', 'Sending config', 'Sending options', 'Password sent'];

  // tslint:disable-next-line: no-input-rename
  @Input('peer') peer;

  constructor(private hbtsService: HbtsService) { }

  ngOnInit() {
  }

  getStatus(i: number) {
    if (i > 0 && i < this.status.length - 1 ) {
      return this.status[i];
    }
    return 'Unknown';
  }

  getDuration(start: number, end: number) {
    if (end) {
      return Math.ceil((end - start) / 1000) + 's';
    } else  {
      return ' ';
    }
  }

  getCallsign(id: number): string {
    const user: DMRUser = this.hbtsService.getDMRUser(id);

    if (user !== undefined) {
      return user.callsign;
    }
  }

  getName(id: number): string {
    const user: DMRUser = this.hbtsService.getDMRUser(id);

    if (user !== undefined) {
      return user.fname;
    }
  }

  getCountry(id: number): string {
    const user: DMRUser = this.hbtsService.getDMRUser(id);

    if (user !== undefined) {
      return user.country;
    }
  }

}
