import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  homeRouter: Router;
  jokesRouter: Router;

  constructor() {
    console.log('[RouterService]');
  }

  equal() {
    if (this.homeRouter && this.jokesRouter) {
      console.log(this.homeRouter === this.jokesRouter);
    }
  }
}
