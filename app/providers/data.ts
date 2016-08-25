import { Injectable } from '@angular/core';
import {Storage, SqlStorage} from 'ionic-angular';


@Injectable()
export class DataService {

  storage: Storage;

  constructor() {
    this.storage = new Storage(SqlStorage, {name:'campermate'});
  }

  setMyDetails(data: Object): void {
    let newData = JSON.stringify(data);
    this.storage.set('mydetails', newData);
  }

  setCampDetails(data: Object): void {
    let newData = JSON.stringify(data);
    this.storage.set('campdetails', newData);
  }

  setLocation(data: Object): void {
    let newData = JSON.stringify(data);
    this.storage.set('location', newData);
  }

  getMyDetails(): Promise<any> {
    return this.storage.get('mydetails');
  }

  getCampDetails(): Promise<any> {
    return this.storage.get('campdetails');
  }

  getLocation(): Promise<any> {
    return this.storage.get('location');
  }

}

