import{ Component,OnInit,Input,Output,EventEmitter,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';


@Component({
  selector:'raw-progressbar',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl:'./progressbar.component.html',
  styleUrls:['./progressbar.component.scss']//styles
})//component


export class RawProgressbarComponent implements OnInit{


  @Output('onFinishProgress')
  private onFinishProgress:EventEmitter<void>;

  @Output('onStartProgress')
  private onStartProgress:EventEmitter<void>;


  private percent:number;
  private percentFormat:number;
  private delay:number;
  private delayProgressPercent:number;
  private finalProgress:boolean;
  private progress:any;



  constructor(private changeDetectionRef: ChangeDetectorRef) {
    this.onFinishProgress = new EventEmitter<void>();
    this.onStartProgress = new EventEmitter<void>();
    this.delay = 2;
    this.delayProgressPercent=80;
    this.finalProgress = false;
  }//constructor


  ngOnInit() {
    this.percent = 0;
    this.percentFormat = 0;
  }//ngOnInit



  /**
   * @public
   * @method
   * @description 
   * 
   */
  public startProgress() {
    //reset values
    this.percent = 0;
    this.percentFormat = 0;
    this.finalProgress = false;
    //delete progress if exist
    this.deleteProgress();
    this.createProgress();
    this.onStartProgress.emit();

  }//startProgress




  /**
   * @public 
   * @method
   * @description
   */
  public finishProgress() {
    this.finalProgress = true;
  }//finishProgress



  /**
   * @public
   * @method
   * @description
   */
  public cancelProgress() {
    this.deleteProgress();
  }//cancelProgress




  /**
   * @private
   * @method
   * @description
   */
  private deleteProgress(){
    if( this.progress ) {
      clearInterval( this.progress );
    }//If
  }//deleteProgress



  /**
   * @private
   * @method
   * @description
   */
  private createProgress() {
    let retardation:number = this.delay;
    this.progress = setInterval(()=>{

      if(this.finalProgress) {
        retardation = this.delay;
      }//if

      if(this.percent <= 95 || this.finalProgress ) {
        if( this.percent < 100 ) {
          this.percent = this.percent + retardation;
          this.percentFormat = Math.floor( this.percent );
          retardation *= 0.98; 
        }//If
      }//if

      if( this.percent >= 100 ) {
        this.percentFormat = 100;
        this.onFinishProgress.emit();
        this.deleteProgress();
      }//if

      //Indicamos a angular que repinte la vista 
      this.changeDetectionRef.markForCheck();
 
    },this.delayProgressPercent );
  }//createProgress


}//IFCProgressBar