//Created by: Pratiksha
// Date: 9 june 2020
// Assessment : Typescript function object and Module
// topic covered creating interface in typescript
module interfaceModuleDemo{
    height: number;
    width: number;
    depth? : number;
    volume: () => number;
    area: () => number;
}
var cuboid : Shape ={
     height: 23,
     width: 23,
     depth: 12,
     volume : function (): number{
         var result = this.height * this.width * this.depth;
         return result;
     },
     area: function(): number{
         var result =2 * (this.height * this.width + this.depth + this.depth * this.width);
         return result;
     }
     var cubiodVolume = cuboid.volume();
     var cuboidArea = cuboid.area ();
     console.log('valoume of coboid' + cuboidVolume + 'cm3');
     console.log('Area of coboid' + cuboidArea + 'cm2');

}