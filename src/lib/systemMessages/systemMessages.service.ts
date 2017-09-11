import{ Injectable } from '@angular/core';
import{ Subject,Observable } from 'rxjs';



@Injectable()
export class SystemMessagesService {


  private stateOfMessage:Subject<DataStateOfMessage>;
  public onChangesOfMessage:Observable<DataStateOfMessage>;



  /**
   * @constructor
   */
  constructor(){
    //creamos un observable con el flujo que va a representar
    //los cambios de estado del mensaje del sistema
    this.stateOfMessage = new Subject<any>();
    this.onChangesOfMessage = this.stateOfMessage.asObservable();
  }//constructor



  /**
   * @public
   * @method
   * @param dataStateOfMessage
   * @description 
   * Método utilizado para mostrar mensajes del sistema 
   * cada vez que en cualquier parte de nuestra aplicación queramos 
   * mostrar un mensaje del sistema debemos llamar a este método  
   */
  public showMessage(dataStateOfMessage:DataStateOfMessage) {
    dataStateOfMessage.actived = true;
    this.stateOfMessage.next( dataStateOfMessage );
  }//showMessage


}//SystemMessagesService







/**
 * @class
 * @description
 * 
 */
export class DataStateOfMessage {
  actived:boolean;
  typeOfMessage:string;
  summary:string;
  details:string;

  constructor(type:string,summary:string,details:string) {
    this.typeOfMessage = type;
    this.summary = summary;
    this.details = details;
    this.actived = false;
  }//constructor

}//DataStateOfMessage