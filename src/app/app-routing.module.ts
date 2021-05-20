import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/book-add/book-add.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';



const routes: Routes = [
  {path:"",pathMatch:"full",component:BookComponent},
  {path:"home",component:BookComponent},
  {path:"books/filter/writer/:writerId/publisher/:publisherId/category/:categoryId",component:BookComponent},
  {path:"pay",component:PaymentComponent,canActivate:[LoginGuard]},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"book/add",component:BookAddComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
