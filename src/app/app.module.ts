import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import {ToastrModule, ToastrService} from "ngx-toastr";
import { BookComponent } from './components/book/book.component';
import { BookImageComponent } from './components/book-image/book-image.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SpinnerComponent,
    BookComponent,
    BookImageComponent,
    SideFilterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
