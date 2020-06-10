
//Created by: Pratiksha Chandel
// Date: 9 june 2020
// Assessment : Typescript: Advance Feature
// topic : creating inner class in typescript and using 'this' keyword

class Truck {
    model: string;
    wheels: Truck.Wheels;
    constructor(model:string){
        this.model = model;
        this.wheels={
            type: 'x-thread',
            size: 24
        }
    }
    report = function (): string {
        return 'model' = this.model + '\n' +
        'Wheel: ' + this.wheels.type + ';'+
        this.wheels.size + 'Inches';
    }
        
}
module Truck{
    export class Wheel{
        tupe: string;
        size: number;
        constructor(){
            this.type = '';
            this.size = null;
        }
    
    }// end class Wheels
}// End module Truck

window.onload = function(){
    var lorry = new Truck('light duty');
    console.log(lorry.report());

}
