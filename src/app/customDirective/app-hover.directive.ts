import { Directive, Renderer2 ,ElementRef,HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 

  }

  @HostBinding('style.backgroundColor') backgroundColor: string = "red";
  @HostBinding('style.border') border: string = 'none'; 
  @HostBinding('style.borderRadius') borderRadius = "5px";
  @HostBinding('style.cursor') cursor: string = 'pointer';

  @HostListener('mouseenter') OnmouseEnter(){
    this.backgroundColor = 'red';
    this.border = "#282828 3px solid";
  }

  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor = "#282828";
    this.border = 'none';
  }

}
