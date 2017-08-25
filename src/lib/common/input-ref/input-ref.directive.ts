import { Directive,HostListener} from '@angular/core';


@Directive({
  selector: 'raw-input-wrapper input'
})

export class InputRefDirective {

  focus = false;

  
  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }//onFocus


  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }//onBlur

}//InputRefDirective
