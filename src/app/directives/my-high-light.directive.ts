import { Directive, Input, HostBinding, ElementRef, HostListener } from '@angular/core';


const COLOR = 'whitesmoke';
const BACKGROUND_COLOR = 'lightseagreen';

@Directive({
  selector: '[appMyHighLight]'
})
export class MyHighLightDirective {

  @Input() highLightColor: string;

  @HostBinding('class') myClass = '';
  // @HostBinding('style.border') border = '3px solid sienna';

  constructor(private element: ElementRef<HTMLElement>) {
    console.log(element);
    element.nativeElement.style.color = COLOR;
    element.nativeElement.style.backgroundColor = BACKGROUND_COLOR;
  }

  @HostListener('click') onClick() {
    console.log(arguments);
    if (this.myClass) {
      this.myClass = '';
    } else {
      this.myClass = 'my-border';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.highLightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight(BACKGROUND_COLOR);
  }

  private highLight(color: string) {
    // DOM 操作
    // 可使用 jQuery
    this.element.nativeElement.style.backgroundColor = color;
  }
}
