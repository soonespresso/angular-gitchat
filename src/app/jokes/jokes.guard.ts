import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JokesComponent } from './jokes.component';

@Injectable()
export class JokesGuard implements CanDeactivate<JokesComponent> {

  canDeactivate(
    component: JokesComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(component);
    if (!component.saved) {
      // window.confirm 会阻塞
      const result = window.confirm('Are you sure not to save?');
      console.log(result);
      return result;
    }
    return true;
  }
}
