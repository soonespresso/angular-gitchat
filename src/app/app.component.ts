import { Component, ViewChild, TemplateRef, AfterViewInit, ElementRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  name = 'Darwin';

  @ViewChild('tpl', { static: false })
  tpl: TemplateRef<any>;

  @ViewChild('tpl', { read: ViewContainerRef, static: false })
  tplVcRef: ViewContainerRef;

  ngAfterViewInit(): void {
    console.dir(this.tplVcRef);
    // 创建内嵌视图
    // const embeddedView = this.tplVcRef.createEmbeddedView(this.tpl);
    // console.log(embeddedView);
  }

  _ngAfterViewInit(): void {
    console.dir(this.tpl);
    // 页面中的 commnet <!---->
    const commnetElement: HTMLElement = this.tpl.elementRef.nativeElement;
    // 内嵌视图
    const embeddedView = this.tpl.createEmbeddedView(null);
    embeddedView.rootNodes.forEach((node) => {
      // commnetElement.nextSibling：commnetElement 的 下一个元素
      commnetElement.parentNode.insertBefore(node, commnetElement.nextSibling);
    });
    console.dir(embeddedView);
  }
}
