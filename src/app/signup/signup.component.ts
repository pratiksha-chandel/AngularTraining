import { Component, Input, OnInit , EventEmitter , Output } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';

// {email:"",name:"",password:""}
// post
//apibyashu.herokuapp.com/api/register
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[]
})
export class SignupComponent implements OnInit {
  email = "test@test.com"
  @Output() signedupornot = new EventEmitter() // that event is created here
  @Input() color
  user ={
    name:null,
    email:null,
    password:null
  }
  signup(){
    console.log("REgistration started with this user data", this.user)
    var url = "https://apibyashu.herokuapp.com/api/register"
    this.http.post(url,this.user).subscribe((response)=>{
      console.log("response from signupapi", response)
    },(error)=>{
      console.log("error from signup api", error)
    })
  }
  constructor( private http : HttpClient  ) { 
    console.log("constructor of signup component" , this.color)
    
  }
  ngOnInit(){
    console.log("Signup comp created" , this.color)
  }

  ngOnDestroy(){

  }

  ngDoCheck(){

  }

  ngOnChanges(){ // it will be invokes on set/reset of input properties of a component

  }

 

}

