import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myNgIf]'
})
export class MyNgIfDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set myNgIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
