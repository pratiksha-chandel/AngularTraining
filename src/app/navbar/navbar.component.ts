
// AngularProjectPoc
// Project development Created by: Pratiksha Chandel 

import {Component} from "@angular/core" // all building blocks
import { CommonService } from '../common.service';
// in angular after creation we need registration
// all propeties are available to only their html

var name = "Pratiksha Chandel "  //variable

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html'
})
export class NavbarComponent {
projectname = "Pratiksha Shopping Kart"
isloggedin  // property 
constructor(private cs : CommonService){

}
ngDoCheck(){
       if(this.cs.isloggedin){
           this.isloggedin = true
       }
}
}

