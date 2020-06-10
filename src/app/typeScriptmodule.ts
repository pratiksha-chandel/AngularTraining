import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { $ } from 'protractor';

module nullVsUndef{
    var varA: string;
   var  varB: number;
    var varC;
    var myTest: boolean;

    varA = null;  // exclipt set value to null with null key word
    varB =  null;
    varC = null;
    myTest = null;
    var car : {} = null;
   // undefined 
   var varD: string;
   var varE: number = undefined;
   var truck: {};
   truck = undefined; //


}
// STRING ARRAY WITH TYPESCRIPT

module stringDemo {
    var cars: string[];
    cars= ['volvo', 'bMW','Toyoto','Mazda','Honda'];
    var index : number = 2;
    var value: string = cars[index];   // good practice to assign variable right type
    console.log('value from array : '+value);

    var getLenght =function (b: string[]){
        return b.length;
    }
    var count = getLenght(cars);
    console.log('number ofof iteam in array',+count )
}

// TYPESCRIPT DEFINATION FILE
module Tdef{
    var car ={
        id: 1,
        make: 'Mazda',
        engin: 'v6',
        bhp: 324,
        reportState: function(){
            return 'Make: ' + this.make+ ','+
            'Engin: ' + this.engin +','+
            'HorsePower: ' +this.bhp + 'bhp';


        }
    }
    $(document).ready(function(){
        var makeString: string = 'Vehicle make :' + car.make;
        var statsString: string = car.reportStats();
        $('#car-make')[0].innerHTML = makeString;
        $(#car-stats)[0].innerHTML = statsString;

    });
}
