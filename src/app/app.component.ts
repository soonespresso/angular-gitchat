import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  index = 0;

  constructor() {
    setInterval(() => {
      this.index++;
    }, 2000);
  }
}
