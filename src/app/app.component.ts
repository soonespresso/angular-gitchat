import { Component } from '@angular/core';
import { ObservableService } from './service/observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index = 1;

  constructor(public service: ObservableService) {
    setInterval(() => {
      this.service.changeData(this.index++);
    }, 2000);
  }
}
