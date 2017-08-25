import { Component,Input } from '@angular/core';

@Component({
  selector: 'raw-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss']
})

export class RawWallpaperComponent {


  @Input('url')
  url: string;

  constructor() {
  }// Constructor

}// rawWallpaperComponent
