import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[nz-card-grid]',
  exportAs: 'nzCardGrid'
})
export class NzCardGridDirective {
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    renderer.addClass(elementRef.nativeElement, 'ant-card-grid');
  }
}
