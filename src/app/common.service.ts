// Created By: Pratiksha Chandel 
// Project Training : Ui TRAINING 
// Topic cover : services, writing canActivate call 


import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router"

@Injectable()
export class CommonService implements CanActivate{

    canActivate(){
        if(localStorage.email)
      return true
      else{
          return false
      }
    }
   isloggedin = localStorage.isloggedin
   totalprice
   cart = []
   user = localStorage.user &&  JSON.parse(localStorage.user)
}
