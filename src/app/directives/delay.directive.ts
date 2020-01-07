import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) {
    console.log(this.templateRef);
    console.log(this.viewContainerRef);
  }


  @Input() set appDelay(time: number) {
    setTimeout(() => {
      // 创建内嵌视图
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, time);
  }
}
