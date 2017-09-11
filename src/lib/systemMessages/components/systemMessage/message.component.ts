import{ Component,Input } from '@angular/core';


@Component({
  selector:'system-message',
  template:require('./message.component.html'),
  styles:[
    require('./message.component.scss')
  ]//styles
})//Component


export class SystemMessageComponent {

  @Input('kind')
  private kind:string;

  @Input('summary')
  private summary:string;

  @Input('details')
  private details:string;

  private destroyMessage:boolean;
  private fadeOut:boolean;


  public static DEFAULT_INFO_KIND:string = 'info';
  public static DEFAULT_WARNING_KIND:string = 'warning';
  public static DEFAULT_ERROR_KIND:string = 'error';
  public static DEFAULT_SUCCESS_KIND:string = 'success';


  constructor(){
    this.destroyMessage = false;
    this.fadeOut = false;
  }//constructor



  /**
   * @public
   * @method
   * @description
   * Elimina el mensaje cuando pulsamos fuera del mismo
   */
  public deleteMessage() {
    this.fadeOut = true;
    setTimeout(()=>{
      this.destroyMessage = true;
    },500);
  }//close




  public get DEFAULT_INFO_KIND(){
    return SystemMessageComponent.DEFAULT_INFO_KIND;
  }//DEFAULT_INFO_KIND

  public get DEFAULT_WARNING_KIND() {
    return SystemMessageComponent.DEFAULT_WARNING_KIND;
  }//DEFAULT_WARNING_KIND

  public get DEFAULT_ERROR_KIND() {
    return SystemMessageComponent.DEFAULT_ERROR_KIND;
  }//DEFAULT_ERROR_KIND

  public get DEFAULT_SUCCESS_KIND() {
    return SystemMessageComponent.DEFAULT_SUCCESS_KIND;
  }//DEFAULT_SUCCESS_KIND


}//SystemMessageComponent