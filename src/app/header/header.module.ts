import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NYTimesApiService } from '../nytimes-api/nytimes-api.service';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [ HeaderComponent ],
  providers: [ NYTimesApiService ],
  bootstrap: [ HeaderComponent ]
})
export class HeaderModule { }
