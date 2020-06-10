import { Component } from '@angular/core';

@Component({
    selector:'app-admin',
    templateUrl:'./admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent{
    ngOnInit(){
    window.onload =function(){
        document.getElementById("color").addEventListener('click' , displayColor , false);
      }
      function displayColor(){
        //document.getElementById('colorOut').innerHTML = document.getElementById('color').value;
      }
    }
}