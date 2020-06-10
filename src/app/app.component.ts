// Created By: Pratiksha Chandel 
// Project Training : AIG Ui TRAINING 
// Topic cover : parent child calling ,routing,Attaching Animtion state,transitions,keyframe

import { Component , Output} from '@angular/core';
import data from './products'
import { EventEmitter } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes} from '@angular/animations';

//import { GuardsCheckEnd} from '@angular/router/src/events';
//import { GuardsCheckStart} from '@angular/router/src/events';
//import { ActivationStart} from '@angular/router/src/events';
//import { ActivationEnd } from '@angular/router/src/events';
//import { ChildActivationStart} from '@angular/router/src/events';
//import { ChildActivationEnd} from '@angular/router/src/events';
//import { ResolveStart} from '@angular/router/src/events';
//import { ResolveEnd} from '@angular/router/src/events';

import { Router} from '@angular/router';

import { from } from 'rxjs';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwosomeAnimation',[
      state('small', style({
        transform : 'scale(1)',
      })),
      state('large', style({
        transform : 'scale(3)',
      })),
      transition('small => large',animate('3000ms ease-in'),),
      transition('large => small',animate('3000ms ease-in'),)
    ]),
  ]
})
export class AppComponent {
  heading = 'Animation example';
  state: string = 'smallguy';
  animateMe(){
    this.state = (this.state ==='small' ? 'large': 'small');
  }
  numStudent = 0;
  myNumber = 12345.67
  constructor( private router: Router){
    console.log("construction of app component begins")
  }

  ngOnInit(){
     this.router.events.subscribe(event => {
       console.log(event);
     })
    console.log("Component is successfuly created")
  }

  demo(){
    alert("I am in Parent")
  }
  title = 'angularmayvirtual';
  products = data
 



}
