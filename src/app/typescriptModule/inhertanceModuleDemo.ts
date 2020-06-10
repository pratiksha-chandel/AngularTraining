//Created by: Pratiksha
// Date: 9 june 2020
// Assessment : Typescript function object and Module
// topic covered : Extending An internal Module in Typescript


module testModule {
    interface Shape{

        height: number;
        width: number;
        depth?:number;
        baseRadius?: number;
        volume: ()=> number;
        area: () => number;
    }

    class Cuboid implements Shape{
        height: number;
        constructor( height: number, width: number,depth:number){
           this. height = height;
            this.width = width;
            this.depth = depth;
        }
        volume = function (): number{
           return this.height * this.width * this.depth;
        }  
         area =function(): number{
           return 2 *(this.height * this.width + this.height *this.depth +this.depth*this.width);
        }  
    }

    class Cylinder implements Shape { 
        height: number;
        baseRadius: number;

        constructor(height: number,baseRadius: number) {
            this.height = height;
            this.baseRadius = baseRadius;
        }

        volume = function (): number {
            var result = Math.PI * this.baseRadius * this. baseRadius * this.height;
            return result;
        }
        area = function(): number {
            var result = 2 *  Math.PI * this.baseRadius * this. baseRadius + 2 *Math.PI*this.baseRadius * this.height; 
        }  
    }

    window.onload = function() {
        var myCube = new Cuboid(12,12,12);
        var myTube = new Cylinder(12,6);
        var cubeVolume = myCube.volume();
        var cubeArea = myCube.area();
        var tubeVolume = myTube.volume();
        var tubeArea = myTube.area();
        
        console.log('valume of cuboid: ' + cubeVolume + 'cm3') ;
        console.log('Arae of cuboid: ' cubeArea + 'cm3') ;
        console.log('valume of tube: ' + tubeVolume + 'cm3') ;
        console.log('Arae of Tube: ' + tubeArea + 'cm3') ;

    }

}