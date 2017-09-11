import{ Component,OnInit,OnDestroy } from '@angular/core';
import{ Subscription } from 'rxjs';

import{ SystemMessageComponent } from '../systemMessage/message.component';
import{ SystemMessagesService,DataStateOfMessage } from '../../systemMessages.service';



@Component({
  selector:'system-messages',
  template: require('./systemMessages.component.html'),
  styles: [require('./systemMessages.component.scss')]
})
export class SystemMessagesComponent implements OnInit,OnDestroy {


  private kindOfMessage:string;
  private summary:string;
  private details:string;

  private displayMessage:boolean; 
  private changesOfMessagesSubscription:Subscription;

  private static DEFAULT_SUMMARY_MESSAGE:string = 'No exist "summary"';
  private static DEFAULT_DETAILS_MESSAGE:string = 'No exist "details", whitout these attributes message component not work';




  constructor(private systemMessagesService:SystemMessagesService) {
    
    this.displayMessage = false;
    //Valores por defecto
    this.kindOfMessage = SystemMessageComponent.DEFAULT_WARNING_KIND;
    this.summary = SystemMessagesComponent.DEFAULT_SUMMARY_MESSAGE;
    this.details = SystemMessagesComponent.DEFAULT_DETAILS_MESSAGE;
  
}//constructor




  ngOnInit() {
    this.subscribeToChangesOfSystemMessages();
  }//ngOnInint




  ngOnDestroy() {
    this.unsubcribeToChangesOfSytemMessages();
  }//ngOnDestroy




  /**
   * @private
   * @method
   * @description
   * Método que genera una subscripción al 
   * observable que estara escuchando los cambios 
   * que se generán en los mensajes del sistema
   */
  private subscribeToChangesOfSystemMessages() {
    this.changesOfMessagesSubscription = this.systemMessagesService.onChangesOfMessage
                                             .subscribe((dataOfMessage) => this.whenChangesOfMessage( dataOfMessage ));
  }//subcribtToChangeOfSystemMessage




  /**
   * @private 
   * @method
   * @description
   * Método que anula la subcripción que tenemos 
   * abierta para detectar los cambios en los mensajes del sistema.
   */
  private unsubcribeToChangesOfSytemMessages() {
    this.changesOfMessagesSubscription.unsubscribe();
  }//unsubcribeToChangesOfSystemMessage





  /**
   * @private
   * @method
   * @param dataOfMessage 
   * @description
   * 
   */
  private whenChangesOfMessage(dataOfMessage:DataStateOfMessage) {

    //Si el existe un mensaje
    if( this.displayMessage ) {
      this.displayMessage = false;
      return setTimeout(() => {
        this.changeDataOfMessage( dataOfMessage );
      },800);
     }//if

    this.changeDataOfMessage( dataOfMessage );

  }//whenChangesOfMessage






  /**
   * @private 
   * @method
   * @param dataOfMessage 
   * @description
   * Finalmente modificamos los datos del mensaje esto 
   * desembocara en la muestra definitiva del mensaje en pantalla
   */
  private changeDataOfMessage(dataOfMessage:DataStateOfMessage) {

    let {actived,typeOfMessage,summary,details} = dataOfMessage;
    this.displayMessage = actived;
    this.kindOfMessage = typeOfMessage;
    this.summary = summary;
    this.details = details;

  }//changeDataOfMessage






}//SystemMessagesComponent