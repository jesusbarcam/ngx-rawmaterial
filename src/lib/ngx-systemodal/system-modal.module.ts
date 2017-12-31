import{ NgModule } from '@angular/core';
import{ CommonModule } from '@angular/common';

import{ SystemModalComponent } from './system-modal.component';
import{ SystemModalService } from './system-modal.service';



@NgModule({
  declarations: [
    SystemModalComponent
  ],
  exports: [
    SystemModalComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SystemModalService
  ]
})// NgModule
export class SystemModalModule {
}// SystemModalModule
