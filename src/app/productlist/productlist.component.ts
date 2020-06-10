import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  products = []
  ngOnInit(): void {
    var url = "https://apibyashu.herokuapp.com/api/allproducts"
    this.http.get(url).subscribe((response:any)=>{
      console.log("response from get products api", response)
      this.products = response.data
    },(error)=>{
      console.log("error from get products api", error) 
    })
  }
 // here we are using  httpClient instead http  to read data 
}
