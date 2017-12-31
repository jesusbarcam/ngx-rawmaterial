import{ Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import{ Observable, BehaviorSubject } from 'rxjs';




@Injectable()
export class SystemModalService {



  private visible: BehaviorSubject<boolean>;
  public visible$: Observable<boolean>;

  private rootViewContainer: ViewContainerRef;



  

  constructor( private factoryResolver: ComponentFactoryResolver) {
  
    this.visible = new BehaviorSubject<boolean>(false);
    this.visible$ = this.visible.asObservable();
  
  }// Constructor





  public addDynamicComponent(viewContainerRef: ViewContainerRef) {
    this.rootViewContainer = viewContainerRef;
    const factory = this.factoryResolver.resolveComponentFactory(DynamicComponent)
    const component = factory.create(this.rootViewContainer.parentInjector)
    this.rootViewContainer.insert(component.hostView)
  
  }// AddDynamicComponent



  /**
   * @method
   * @public
   * @description
   */
  public open() {
    if( !this.visible.getValue() ) {
      this.visible.next( true );
    }// If
  }// Open


  


  /**
   * @method
   * @public
   * @description
   */
  public close() {
    if( this.visible.getValue() ) {
      this.visible.next( false );
    }// If
  }// Close



}// SystemModalService