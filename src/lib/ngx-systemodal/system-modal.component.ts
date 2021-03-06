import { Component, OnInit, Input, Output, OnDestroy, ViewContainerRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { SystemModalService } from './system-modal.service';


type StatesOfDialog =  'startShow' | 'startHide' | 'wait'  ;


@Component({
  selector: 'system-modal',
  templateUrl: './system-modal.component.html',
  styleUrls: [ './system-modal.component.scss' ]
})// Component




export class SystemModalComponent implements OnInit, OnDestroy {


  private visible: boolean;
  private backmaskState: StatesOfDialog;
  private dialogState: StatesOfDialog;
  private subscription: Subscription



  @ViewChild('dynamicContent', {read: ViewContainerRef })
  private viewContainerRef: ViewContainerRef;



  /**
   * @method
   * @constructor
   */
  constructor(private modalService: SystemModalService) {
    this.visible = false;
    this.backmaskState = 'wait';
    this.dialogState = 'wait';
  }// Constructor





  /**
   * @method
   * @public
   * @lifecycle
   */
  ngOnInit() {
    this.inicializeSubscriptions();
  }// NgOnInit



  /**
   * @method
   * @public
   * @lifecycle
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }// OnDestroy




  /**
   * @method
   * @private
   * @description
   */
  private inicializeSubscriptions() {
    this.subscription = this.modalService.visible$
    .subscribe((newDialogState: boolean) => {
      
      // Manejamos la visibilidad según el 
      // nuevo estado que se solicite que adopte
      // el componente.
      this.handlerForVisibility( newDialogState );
    
    });// Observable
  }// InicializeSubscription






  /**
   * @method
   * @private
   * @param newState
   * @description
   *  
   */
  private handlerForVisibility( newState: boolean ) {
    if ( newState ) {
      return this.initProgressOfShowComponent();
    }// If
    this.initProgressOfHideComponent();
  }// HandlerFOrVisibility





  /**
   * @method
   * @private
   * @description
   * Método que inicia el proceso para ocultar
   * el componente 
   */
  private initProgressOfHideComponent() {
    if ( this.visible ) {
      
      this.dialogState = 'startHide';
      
      setTimeout(() => {
        this.backmaskState = 'startHide';
      }, 200);


      setTimeout(() => {
        this.visible = false;
        this.dialogState = 'wait';
        this.backmaskState = 'wait';
      }, 1000);

      
    }// If
  }// InitProgressOfHideComponent




  /**
   * @method
   * @private
   * @description
   * Método que inicia el proceso para mostrar el 
   * componente en la vista donde este insertado.
   */
  private initProgressOfShowComponent() {
    if ( !this.visible ) {

      this.visible = true;
      this.backmaskState = 'startShow';

      setTimeout(() => {
        this.dialogState = 'startShow';
      }, 200);
      
    }// If
  }// InitProgressOfShowComponent





  /**
   * @method
   * @private
   * @description
   * 
   */
  private initShowDialogComponent() {

  }// InitShowDialogComponent






  /**
   * @method
   * @private
   * @description
   * 
   */
  private initShowBackmaskComponent() {

  }// InitShowBackmaskComponent





  /**
   * @method
   * @private
   * @description
   * Método que cierra el dialogo mediante
   * la llamada al servicio para que sea el 
   * servicio el que reactive el estado de todos 
   * los componentes que se relacionan con este componente.
   */
  private closeDialog() {
    this.modalService.close();
  }// CloseDialog



}// SystemDialgoComponent