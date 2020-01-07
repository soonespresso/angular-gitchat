import { Component, ViewChild, TemplateRef, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  name = 'Darwin';

  @ViewChild('tpl', { static: false })
  tpl: TemplateRef<any>;

  ngAfterViewInit(): void {
    console.dir(this.tpl);
    const embeddedView = this.tpl.createEmbeddedView(null);
    console.dir(embeddedView);
  }
}
