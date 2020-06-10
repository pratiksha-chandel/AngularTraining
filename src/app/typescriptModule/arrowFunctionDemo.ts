//Created by: Pratiksha
// Date: 9 june 2020
// Assessment : Typescript function object and Module
// topic : Use of Arrow Function 
module arrowFunctionDemo {
    class shape {
        height : number;
        width : number;
        depth : number;

    }
    constructor (height: number,width: number,depth: number ){
        this.height = height;
        this.width - innerWidth;
        this.depth = depth;
    }
   
   // volume = function (){
  // return  this.height * this.width * this.depth;
   // }
 
   volume = function ()=> this.height * this.width * this.depth;
    
    var cuboid = new Shape (23 ,14, 12);
    console.log('cuboid valume' + cuboid.volume()+ 'cm3');


}