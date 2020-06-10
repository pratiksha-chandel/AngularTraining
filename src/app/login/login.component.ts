// AIGProjectPoc
// Project development Created by: Pratiksha Chandel 

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  email = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  user ={
    email:'',
    password:''
  }
  constructor(private cs :CommonService,  private http : HttpClient ,
              private router : Router,
              fb: FormBuilder) { this.form = fb.group({
                "email": this.email,
                "password": ["", Validators.required]
              }); }

  ngOnInit(): void {

  }

  login(){
    console.log("login started with", this.user)
    var url = "https://apibyashu.herokuapp.com/api/login"
    this.http.post(url,this.user).subscribe((response)=>{
      console.log("response from login api", response)
      if(response["token"]){
        this.cs.isloggedin = true
        localStorage.isloggedin=true
        localStorage.email=response["email"]
        localStorage.user = JSON.stringify(response)
        this.cs.user = response
        this.router.navigate(['/'])
      }
    },(error)=>{
      console.log("error from login api", error)
    })
  }


}
