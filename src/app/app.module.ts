import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule, 
    BodyModule, 
    FooterModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
