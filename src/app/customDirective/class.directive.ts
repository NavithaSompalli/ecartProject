import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
// creating a custome class directive
  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @Input() display

}
