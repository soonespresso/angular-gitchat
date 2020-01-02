import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  object = {
    index: 1
  };

  constructor() {
    setInterval(() => {
      this.object = {
        index: this.object.index++
      };
    }, 2000);
  }
}
