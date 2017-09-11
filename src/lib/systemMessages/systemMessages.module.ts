import{ NgModule } from '@angular/core';
import{ CommonModule } from '@angular/common';

import{ SystemMessagesComponent } from './components/systemMessages/systemMessages.component';
import{ SystemMessageComponent } from './components/systemMessage/message.component';

import{ ClickOutsideDirective } from './directives/clickOutside/clickOutside.directive';

import{ SystemMessagesService } from './systemMessages.service';


@NgModule({
  imports:[
    CommonModule
  ],
  
  declarations:[
    SystemMessagesComponent,
    SystemMessageComponent,
    ClickOutsideDirective
  ],
  
  providers:[ SystemMessagesService ],
  
  exports:[ 
    SystemMessagesComponent
  ]
})//NgModule

export class SystemMessagesModule {}//SystemMessageModule