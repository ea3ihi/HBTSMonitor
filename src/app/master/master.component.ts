import { Component, OnInit, Input } from '@angular/core';
import { HbtsService } from '../hbts.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  status: string[] = ['Idle', 'Connected', 'Closed', 'Listening', 'Authenticating', 'Sending config', 'Sending options', 'Password sent'];

  // tslint:disable-next-line: no-input-rename
  @Input('master') master;

  constructor(private hbtsService: HbtsService) { }

  ngOnInit() {
  }

  getStatus(i: number) {
    if (i > 0 && i < this.status.length - 1 ) {
      return this.status[i];
    }
    return 'Unknown';
  }

  closeTg(peer: number, tg: number) {
    this.hbtsService.closeTg(peer, tg);
  }
}
