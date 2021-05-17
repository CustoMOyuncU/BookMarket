import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import {ToastrModule} from "ngx-toastr";
import { BookComponent } from './components/book/book.component';
import { BookImageComponent } from './components/book-image/book-image.component';
import { SideFilterComponent } from './components/side-filter/side-filter.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BookFilterPipe } from './pipes/book-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SpinnerComponent,
    BookComponent,
    BookImageComponent,
    SideFilterComponent,
    CartSummaryComponent,
    BookFilterPipe
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
