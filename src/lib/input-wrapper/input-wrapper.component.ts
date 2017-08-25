import { Component, OnInit,Input,ContentChild,AfterContentInit,HostBinding } from '@angular/core';

import{ InputRefDirective } from '../common/input-ref/input-ref.directive';


@Component({
  selector: 'raw-input-wrapper',
  templateUrl: './input-wrapper.component.html',
  styleUrls: ['./input-wrapper.component.scss']
})

export class RawInputWrapperComponent implements OnInit,AfterContentInit {


  @Input() 
  private icon:string;
  
  @ContentChild(InputRefDirective) 
  private input:InputRefDirective;


  /**
   * @method
   * @description
   */
  ngOnInit() {
  }//ngOnInit



  /**
   * @protected
   * @method
   * @description
   * 
   */
  ngAfterContentInit() {
    if(!this.input) {
      console.error('The RawInputWrapper needs an input inside its content');
    }//if
  }//ngAfterContentInit




  /**
   * @protected
   * @method
   * @description
   * Añade a las propiedades del componente la clase input-focus 
   * si es el caso de que el input interior tenga el focu activo.
   */
  @HostBinding('class.input-focus') 
  get isInputFocus(){
    return (this.input)?this.input.focus:false;
  }//isInputFocus




  /**
   * @public
   * @method
   * @description
   * 
   */
  public get classes(){
    const cssClasses = {'fa':true};
    
    if( this.icon ) {
      cssClasses['fa-'+ this.icon] = true;
    }//if
    return cssClasses;
  }//classes




}//RawInputComponent
