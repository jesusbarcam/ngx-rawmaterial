import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'raw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})// component


export class RawLoginComponent implements OnInit {

  @Input('horizontal')
  private horizontal:boolean;


  constructor() {
    this.horizontal = false;
  }// constructor



  /**
   * @implements
   * @method
   * @public
   */
  ngOnInit() {
  }// ngOnInit

  
}// RawLoginComponent
