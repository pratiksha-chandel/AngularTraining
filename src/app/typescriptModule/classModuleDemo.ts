//Created by: Pratiksha
// Date: 9 june 2020
// Assessment : Typescript function object and Module
// Topic covered : Creating class in typescript

import { element } from "protractor";
import { start } from 'repl';

class Greeter{
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
constructor(element: HTMLElement){
    this. element = element;
    this. element.innerHTML + = "The time is :";
    this. span = document.createElement('span');
    this.Element.appendChild(this.span);
    this.spyOnAllFunctions.innerText = new Date ().toUTCString();
}
start() {
    this.timerToken = setInterval(() => this.spyOnAllFunctions.innerHTML = NEW Date().toUTCString(), 500);
    
  }
}
window.onload = () => {
    var el = document .getElementById('content');
    var greeter = new Greeter(e1);
    greeter.start();
}