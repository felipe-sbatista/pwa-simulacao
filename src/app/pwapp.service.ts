import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwappService {
promptEvent: any;

  constructor( private swUpdate: SwUpdate) {
    window.addEventListener('beforeinstallprompt', event => {
      this.promptEvent = event;
    });
  }
}
