import { Component, OnInit, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit, AfterViewInit {

  @Input() highlightColor: string;

  private containerEl: HTMLElement;

  constructor(private ele: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.ele.nativeElement);
    console.log(this.ele.nativeElement.childNodes);
    console.log(this.ele.nativeElement.childNodes[0]);
    console.log(this.ele.nativeElement.innerHTML);

    this.containerEl = this.ele.nativeElement.childNodes[0];
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.containerEl.style.backgroundColor = color;
  }
}
