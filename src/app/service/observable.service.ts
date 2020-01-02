import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private messageSource = new BehaviorSubject(1);
  public comeOneData = this.messageSource.asObservable();

  constructor() { }

  changeData(message: any) {
    this.messageSource.next(message);
  }
}
