import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BridgeComponent } from './bridge/bridge.component';
import { HttpClientModule } from '@angular/common/http';
import { PeerComponent } from './peer/peer.component';

@NgModule({
  declarations: [
    AppComponent,
    BridgeComponent,
    PeerComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
