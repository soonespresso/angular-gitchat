import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[range]'
})
export class RangeDirective {

  // tslint:disable-next-line:variable-name
  _range: number[];

  @Input() set range(value: number[]) {
    this.vcr.clear();
    this._range = this.generateRange(value[0], value[1]);
    this._range.forEach(num => {
      this.vcr.createEmbeddedView(this.tpl, { $implicit: num });
    });
  }

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>
  ) { }

  private generateRange(from: number, to: number) {
    const numbers: number[] = [];
    for (let i = from; i <= to; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
