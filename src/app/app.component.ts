import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index = 1;
  observer: Subscriber<number>;
  service = Observable.create((observer: Subscriber<number>) => {
    this.observer = observer;
  });

  constructor() {
    setInterval(() => {
      this.observer.next(this.index++);
    }, 2000);
  }
}
