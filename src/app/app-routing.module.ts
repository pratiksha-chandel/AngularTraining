
// Created By: Pratiksha Chandel 
// Topic cover : Routing and  Route Protection ,canActivate 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonService } from './common.service';
// import {AdminModule} from "./admin/admin1.module"


const routes: Routes = [
  
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'cart', canActivate:[CommonService], component:CartComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'product/:id', component:ShowproductComponent},
  {path:'checkout', component:CheckoutComponent},
  {path : 'admin', loadChildren: () => import('./admin/admin1.module').then(m => m.AdminModule)},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
