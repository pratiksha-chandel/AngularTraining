import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user = {
    email:''
  }
  totalprice = 1000
  constructor(private http : HttpClient ,private router : Router, private cs : CommonService) { 
    if(!localStorage.isloggedin){
        this.router.navigate(['/login'])
    }
    else{
      this.user = {
        email:JSON.parse(localStorage.user).email
      }
    }
   }
  cart = []
  ngOnInit(): void {
    var url = "https://apibyashu.herokuapp.com/api/cart"
    this.http.post(url,this.user).subscribe((response)=>{
      console.log("Here is your shopping list", response)
      this.cart = response["data"]
    },(error)=>{

    })
  }

  checkout(){
    this.cs.totalprice  =  this.totalprice
    this.cs.cart = this.cart
    this.router.navigate(['/checkout'])
  }

}
