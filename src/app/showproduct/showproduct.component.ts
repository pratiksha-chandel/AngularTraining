import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';

// /addtocart
// post
//{productid,email,name,price,image}

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})

export class ShowproductComponent implements OnInit {
  productid = null
  product : any = null 
  price:0
  addtocart(){
    if(localStorage.isloggedin){
      var url = "https://apibyashu.herokuapp.com/api/addtocart"
      //post api
      var requestObj = {
       email:localStorage.email,
       productid:this.product["productid"],
       name:this.product["name"],
       image:this.product["image"],
       price:this.product["price"],
      }
      this.http.post(url,requestObj).subscribe((response)=>{
        console.log("response from add item in cart api ", response)
      }, (error)=>{
        console.log("error from add item in cart api ", error)
        
      })
    }
    else{
      alert("Please login first ")

    }
  }
  constructor(private cs : CommonService, private http :HttpClient, private route : ActivatedRoute , private router :Router){
    console.log("details of current route", this.route.snapshot)
    this.productid  = this.route.snapshot.params.id
  }
  ngOnInit(): void {
    var url = "https://apibyashu.herokuapp.com/api/product/"+this.productid
    this.http.get(url).subscribe((response)=>{
      console.log("response from  product details api" , response)
      this.product = response["data"]
    },(error)=>{
      console.log("resperroronse from  product details api" , error) 
    })
  }

}
