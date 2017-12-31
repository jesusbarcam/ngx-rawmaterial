import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { SystemModalModule } from './lib/ngx-systemodal/system-modal.module';

// Components
import { RawInputWrapperComponent } from './lib/input-wrapper/input-wrapper.component';
import { RawLoginComponent } from './lib/login/login.component';
import { RawProgressbarComponent } from './lib/progressbar/progressbar.component';
import { RawSplashScrollComponent } from './lib/splash-scroll/splash-scroll.component';
import { RawWallpaperComponent } from './lib/wallpaper/wallpaper.component';

// Common libraries
import { InputRefDirective } from './lib/common/input-ref/input-ref.directive';


// Export library components and modules
export * from './lib/ngx-systemodal/system-modal.module';
export * from './lib/input-wrapper/input-wrapper.component';
export * from './lib/login/login.component';
export * from './lib/progressbar/progressbar.component';
export * from './lib/common/input-ref/input-ref.directive';


@NgModule({
  imports: [
    CommonModule,
    SystemModalModule
  ],
  declarations: [
    RawInputWrapperComponent,
    RawLoginComponent,
    RawProgressbarComponent,
    RawSplashScrollComponent,
    RawWallpaperComponent,
    InputRefDirective
  ],
  exports: [
    RawInputWrapperComponent,
    RawLoginComponent,
    RawProgressbarComponent,
    RawSplashScrollComponent,
    RawWallpaperComponent,
  ]
})

export class RawMaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RawMaterialModule,
      providers: [] // Aquí añadimos los servicios del modulo!
    }; // Return
  } // ForRoot
}// RawMaterialModule
