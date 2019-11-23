import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface DMRUserResult  {
  count: number;
  results: object[];
}

export interface DMRUser  {
  callsign: string;
  fname: string;
  country: string;
}


@Injectable({
  providedIn: 'root'
})
export class HbtsService {

  DMRUsers: Map<number, DMRUser> = new Map<number, DMRUser>();

  constructor(private http: HttpClient) {
  }

  public getPeers() {
    return this.http.get('/peers');
  }

  public getMasters() {
    return this.http.get('/masters');
  }

  public getDMRUser(id: number): DMRUser | undefined {

    if (this.DMRUsers.has(id)) {
      return this.DMRUsers.get(id);
    }

    this.http.get('/dmrid/' + id).subscribe( (data: DMRUserResult) => {
      console.log(data);
      this.DMRUsers.set(id, data.results[0] as DMRUser);
    });

    return undefined;
  }



}
