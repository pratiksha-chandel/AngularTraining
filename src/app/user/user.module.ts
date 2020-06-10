import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';


import {RouterModule, Routes, Router} from "@angular/router"

var userroutes : Routes = [
  {path:'',component:UserComponent}
]



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userroutes)
  ]
})
export class UserModule { }
