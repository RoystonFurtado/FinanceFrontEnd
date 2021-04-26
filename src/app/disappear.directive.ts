import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector:'[disappear]'
  })
  export class DisappearDirective {
    @Output() disappear = new EventEmitter<MouseEvent>();
    constructor(private elementRef:ElementRef) {}
    @HostListener('document:click',['$event']) onClickOutside(event:MouseEvent) {
      const targetElement=event.target as HTMLElement;
      const installmentDiv=document.getElementsByClassName('orders-container')[0];
      const closebtn=document.getElementsByClassName('close-btn')[0];
      //const paybtn=document.getElementsByClassName('confirm-pay-btn')[0];
  
      //When clicked anywhere outside add contact box, addcontactbutton and edit contact button(to avoid first click), emit disappear event
      if(installmentDiv!==undefined) {
        if( (!(this.elementRef.nativeElement.contains(targetElement))) && !(installmentDiv.contains(targetElement)) || closebtn.contains(targetElement))
          this.disappear.emit(event);
      }
      else {
        if( (!(this.elementRef.nativeElement.contains(targetElement))) || closebtn.contains(targetElement))
          this.disappear.emit(event);
      }
    }
  }