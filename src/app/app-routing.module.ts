import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { PaymentComponent } from './components/payment/payment.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:BookComponent},
  {path:"books/filter/writer/:writerId/publisher/:publisherId/category/:categoryId",component:BookComponent},
  {path:"pay",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
