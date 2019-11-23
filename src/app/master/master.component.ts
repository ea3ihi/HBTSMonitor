import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  status: string[] = ['Idle', 'Connected', 'Closed', 'Listening', 'Authenticating', 'Sending config', 'Sending options', 'Password sent'];

  // tslint:disable-next-line: no-input-rename
  @Input('master') master;

  constructor() { }

  ngOnInit() {
  }

  getStatus(i: number) {
    if (i > 0 && i < this.status.length - 1 ) {
      return this.status[i];
    }
    return 'Unknown';
  }

}
