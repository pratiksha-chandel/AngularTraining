// Created By: Pratiksha Chandel 
// Project Training : AIG Ui TRAINING 
// Topic cover : Angular configuration set up for component imports ,providers ,and modules .

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component'
import { CommonService } from './common.service';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HighlightDirective } from './highlight.directive';
import { DiscountPipe } from './discount.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 
import {MatTableModule} from '@angular/material/table';
import { BootstrapComponentsComponent } from './bootstrap-components/bootstrap-components.component';


//import {LOCALE_ID} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent, DiscountPipe,ShowproductComponent ,CarouselComponent, ProductComponent, SignupComponent, LoginComponent, NewComponent, ProductlistComponent, ForgotComponent, CartComponent, NotfoundComponent, CheckoutComponent, HighlightDirective, BootstrapComponentsComponent  // Directives, components ,pipes
  ],
  imports: [
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule, 
    BrowserAnimationsModule,  // modules
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  // providers: [
  // {provide : LOCALE_ID, useValue: 'fr'}  // just in time locale
  // ],
  providers: [CommonService],  // Injectables
  bootstrap: [NewComponent]// root component // array is for confusion it will contain only one
})
export class AppModule { }
