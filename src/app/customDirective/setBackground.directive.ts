import { Directive,Input, ElementRef, OnInit,Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]' // meta data property
})
export class setBackground implements OnInit{
  //  private element: ElementRef; its also correct way defining a private variabale
 // private renderer: Renderer2; // it will create instance of renderer2

 // @Input() backColor: string = '#5d1d7a'; // custom property binding 
 // @Input() textColor: string = "white";

 @Input('setBackground') chnageTextAndBackgroundColor: {backColor: string, textColor: string};
  constructor(private element: ElementRef, private renderer: Renderer2){ // it will also create private property
    this.element = element;
  }

  ngOnInit(){ // it will call all the component properties initialized; nativeElement contain refrence of the current dom
    //this.element.nativeElement.style.backgroundColor = "#4287f5";
   // this.element.nativeElement.style.color = "#fff";
   // this.element.nativeElement.style.padding= "5px";
   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.chnageTextAndBackgroundColor.backColor);
   this.renderer.setStyle(this.element.nativeElement, 'color', this.chnageTextAndBackgroundColor.textColor);
   this.renderer.setStyle(this.element.nativeElement, 'padding', '5px');
  // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is sample title');
  // this.renderer.addClass(this.element.nativeElement, 'title');
  // this.renderer.removeClass(this.element.nativeElement, 'title');
  }
}