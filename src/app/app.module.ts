import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

import {ToastrModule, ToastrService} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SpinnerComponent
  ],
  imports: [
    HttpClientModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
