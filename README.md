# ngx-rawmaterial

**IMPORTANT! Consider, that this component library is still in development fase.**

## Installation

To install this library, run:

```bash
$ npm install ngx-rawmaterial --save
```

## To consuming this library

Once you have the library installed, you can import in any Angular application.

```typescript

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Import this library
import { RawMaterialModule } from 'ngx-rawmaterial';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify this library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once this library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use ngx-rawmaterial library component for instance in app.component.html -->
<h1>
  {{title}}
</h1>
<raw-login></raw-login>
```

## License

MIT © [Jesus Barajas Camacho](mailto:jesusbarcam@gmail.com)
