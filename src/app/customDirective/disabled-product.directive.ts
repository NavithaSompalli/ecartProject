import { Directive,Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disabledProduct]'
})
export class DisabledProductDirective {
// conditional Attribute Directive
  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }
// when we use set keyword property. we can use that property as a method
  @Input() set disabledProduct(disabled: Boolean){
    if(disabled){
      this.renderer.addClass(this.element.nativeElement, 'disabled-out-of-product')
    }
  }

}
