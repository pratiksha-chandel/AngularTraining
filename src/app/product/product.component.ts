import { Component, OnInit , Input } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  @Input() product // name is a class prop but it is getting value from the t
  
  showProduct(){
    var routeurl = "/product/" + this.product.productid
    console.log("url" , routeurl)
    this.router.navigate([routeurl]) // programatic navigation
  }
  
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
