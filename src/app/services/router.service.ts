import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  homeRouter: Router;
  pictureRouter: Router;

  constructor() {
    console.log('[RouterService]');
  }

  equal() {
    if (this.homeRouter && this.pictureRouter) {
      console.log(this.homeRouter === this.pictureRouter);
    }
  }
}
