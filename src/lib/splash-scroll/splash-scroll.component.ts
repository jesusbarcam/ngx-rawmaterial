import { Component, OnInit, Input, HostListener } from '@angular/core';

//FIXME: DEBEMOS DE INTRODUCIR EL SERVICIO DE EXCEPCIONES COMO UNA LIBRERIA EXTERNA
// CREADA POR JESUSBARCAM Y UTILIZARLA PARA MOSTRAR LOS ERRORES O EXCEPCIONES DE TODAS 
// LAS LIBRERIAS QUE CREEMOS EN UN FUTURO.

//import { ExceptionsService } from '../../services/exceptions/exceptions.service';



@Component({
  selector: 'splash-scroll',
  templateUrl: './splash-scroll.component.html',
  styleUrls: ['./splash-scroll.component.scss']
})


export class RawSplashScrollComponent implements OnInit {
  
  private static readonly DEFAULT_PERCENT_LOGO_POSITION:number = 15;
  private static readonly DEFAULT_WIDTH_LOGO:number = 476;
  private static readonly DEFAULT_MAX_WIDTH_LOGO:number = 500;
  private static readonly DEFAULT_BREAK_POINT_PARALAX_FX:number = 65;

  private currentScrollLocation:number;
  private maskOpacityValue:number;
  private logoWidth:string;
  private blurFXClass:string;
  private logotypePosition:string;
  private currentLogotypeWidth:number;
  private currentLogotypeLocation:number;
  private completed:boolean;


  @Input()
  private imageUrl:string;


  constructor(/*private exceptionService:ExceptionsService*/) {
    this.currentLogotypeLocation = RawSplashScrollComponent.DEFAULT_PERCENT_LOGO_POSITION;
    this.currentLogotypeWidth = RawSplashScrollComponent.DEFAULT_WIDTH_LOGO;
  }// constructor
  



  /**
   * @implements
   * @method
   */
  ngOnInit() {
    this.inicialize();
    this.checkResourcesRequired();
  }// ngOnInit




  /**
   * @private
   * @method
   * @description
   */
  private inicialize() {
    this.completed = false;
  }// inicialize






  /**
   * @private 
   * @method
   * @description
   */
  private getPercentOfScrollPosition() {
    const windowHeight:number = window.innerHeight;
    const scrollPosition:number = document.body.scrollTop;
    return ( scrollPosition * 100 ) / windowHeight;
  }// getPointScrollPercent






  /**
   * @private
   * @method
   * @description
   * Method that check all resources that this 
   * component need for work.
   */
  private checkResourcesRequired() {
    //if ( !this.imageUrl ) { this.exceptionService.generateException('notResources') }// if
  }// checkResourcesRequired





  /**
   * @implements
   * @method
   * @param event
   * @description
   *  
   */
  @HostListener('window:scroll', ['$event'])
  scrollListener(event:any) {
    
    this.completed = false;
    
    const percentHeight:number = this.getPercentOfScrollPosition();

    if ( (percentHeight > this.DEFAULT_BREAK_POINT_PARALAX_FX) ) {
      // Calculate state values of splash depend of scroll values 
      this.calculateStateOfSplash( percentHeight );
    
    } else {
      this.logotypePosition = this.DEFAULT_PERCENT_LOGO_POSITION + '%';
    }// if

    // Update state of splash with news values like opacity of mask,
    // blurFX, logo position etc...
    this.updateStateOfSplash();  
    
  }// scrollListener





  /**
   * @private
   * @method
   * @description
   * 
   */
  private calculateStateOfSplash(percentHeight:number) {
    
    const distance:number = ( percentHeight - this.DEFAULT_BREAK_POINT_PARALAX_FX );  
    let headerPosition:number = (this.currentLogotypeLocation - (distance * 0.9));
    let logoWidth:number = (this.currentLogotypeWidth - ( distance * 10));

    if ( headerPosition < 0.5 ) {
      this.completed = true;
      headerPosition = 0;
      logoWidth = this.updateWidthOfLogotype( logoWidth );
    }// if
    
    this.toAssignLogoPosition( headerPosition );
    this.toAssignLogoWidth( logoWidth );
  
  }// calculateStateOfSplash





  /**
   * @private
   * @method
   * @description
   *  
   */
  private updateStateOfSplash() {

    const scrollPosition:number = document.body.scrollTop;
    // Save location in currentLocation of scroll
    this.currentScrollLocation = scrollPosition;
    // increments mask opacity depend of scroll location
    this.maskOpacityValue = this.calculateOpacity( scrollPosition );
    // Add class of blurFX depend of scroll location
    this.blurFXClass = this.calculateBlurEffect( scrollPosition );
  
  }// updateStateOfSplash





  /**
   * @private
   * @method
   * @description
   */
  private updateWidthOfLogotype(logoWidth:number) {
    return ( logoWidth > this.DEFAULT_MAX_WIDTH_LOGO ) ? this.DEFAULT_MAX_WIDTH_LOGO : logoWidth;
  }// updateWidthOfLogotype




  /**
   * @private
   * @method
   * @param headerPosition 
   * @description
   * 
   */
  private toAssignLogoPosition(headerPosition:number) {
    this.logotypePosition = ''.concat( headerPosition + '' ).concat('%');
  }// toAssignLogoPosition




  /**
   * @private
   * @method
   * @param width
   * @description
   *  
   */
  private toAssignLogoWidth(width:number) {
    this.logoWidth = `${ width }px`;
  }// toAssignLogoWidth




  /**
   * @private
   * @method
   * @param scrollPosition 
   * @description
   * 
   */
  private calculateOpacity(scrollPosition:number) {
    return (scrollPosition / 650);
  }// calculateOpacity





  /**
   * @private
   * @method
   * @description
   */
  private calculateBlurEffect(scrollPosition:number) {
    return 'blur-'.concat( '' + Math.round(scrollPosition / 100) ).concat('-fx');
  }// CalculateBlurEffect





  public get DEFAULT_MAX_WIDTH_LOGO() {
    return RawSplashScrollComponent.DEFAULT_MAX_WIDTH_LOGO;
  }// DEFAULT_MAX_WIDTH_LOGO


  public get DEFAULT_PERCENT_LOGO_POSITION() {
    return RawSplashScrollComponent.DEFAULT_PERCENT_LOGO_POSITION;
  }// DEFAULT_PERCENT_LOGO_POSITION


  public get DEFAULT_BREAK_POINT_PARALAX_FX() {
    return RawSplashScrollComponent.DEFAULT_BREAK_POINT_PARALAX_FX;
  }// DEFAULT_BREAK_POINT_PARALAX_FX

}// RAWSplashScrollComponent
