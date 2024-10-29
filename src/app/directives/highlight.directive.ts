import { Directive, ElementRef, HostListener, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  private element = inject(ElementRef)

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'green'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'red'
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red'
  }
}
