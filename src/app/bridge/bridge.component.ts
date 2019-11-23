import { Component, OnInit } from '@angular/core';
import { HbtsService, DMRUser } from '../hbts.service';

@Component({
  selector: 'app-bridge',
  templateUrl: './bridge.component.html',
  styleUrls: ['./bridge.component.css']
})
export class BridgeComponent implements OnInit {

  peers: {};
  masters: {};

  constructor(private hbtsService: HbtsService) { }

  ngOnInit() {
    this.update();
    setInterval( () => {
      this.update();
    }, 3000);
  }

  update() {

    this.hbtsService.getPeers().subscribe( (data: any) => {
      this.peers = data;

      this.hbtsService.getMasters().subscribe( (dataMaster: any) => {
        this.masters = dataMaster;
      });
    });
  }
}
