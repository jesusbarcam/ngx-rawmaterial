import{ NgModule } from '@angular/core';
import{ CommonModule } from '@angular/common';

import{ SystemDialogComponent } from './systemDialog.component';
import{ ConfirmationDialogComponent } from './components/confirmationDialog/confirmationDialog.component';
import{ SystemDialogService } from './systemDialog.service';



@NgModule({
  declarations:[
    SystemDialogComponent,
    ConfirmationDialogComponent
  ],
  exports:[
    SystemDialogComponent,
    ConfirmationDialogComponent
  ],
  imports:[
    CommonModule
  ],
  providers:[
    SystemDialogService
  ]
})// NgModule
export class SystemDialogModule {
}// SystemDialogModule
