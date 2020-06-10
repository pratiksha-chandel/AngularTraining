
// By : Pratiksha Chandel
// Project : 
// Credits: Using Ashu Lethi end point API for testing application. 

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import {fromModule , fromBuilder} from "@angular/forms"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  order = {
    name:null,
    area:null,
    pincode:null,
    city:null,
    phone:null,
    email:localStorage.email,
    totalprice:this.cs.totalprice,
    items:this.cs.cart
  }

  placeOrder() {
    var url = "https://apibyashu.herokuapp.com/api/addorder"
    if(this.cs.totalprice && this.cs.cart.length>0){
       this.http.post(url,this.order).subscribe((response)=>{
          console.log("response from place order api", response)
       },(error)=>{
        console.log("erroor from place order api", error)

       })
    }
    else{
      this.router.navigate(['/cart'])
    }
  }


  constructor(private http: HttpClient, private router : Router ,private cs : CommonService) { }

  ngOnInit(): void {
  }

}
