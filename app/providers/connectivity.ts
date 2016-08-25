import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Network } from 'ionic-native';

declare var Connection;

@Injectable()
export class ConnectivityService {

  onDevice: boolean;

  constructor(
    private _platform: Platform
  ) {
    this.onDevice = this._platform.is('cordova');
  }

  isOnline(): boolean{
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    }
    return navigator.onLine;
  }

  isOffline(): boolean{
    if(this.onDevice && Network.connection){
      return Network.connection === Connection.NONE;
    }
    return !navigator.onLine;
  }

}

