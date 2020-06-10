
//Created by: Pratiksha
// Date: 9 june 2020
// Assessment : Typescript function object and Module
// topic covered : Defining function with optional parameter

module optionalParam{
    var calcalateMetric = function (height : number, width : number, depth? : number ): string {
        if(depth!== undefined){
            var result = height * width* depth;
            var  resultString = 'this is a cuboid . Volume: ' +result = 'cm3';
        }
      
    else{
        var result = height * Width;
        var resultString = 'this is a rectangle .Area: '+ result + 'cm2';
    
    }
    return resultString;
}
var myRectangle = calculateMetric(45, 12);
var myCuboid = calculateMetric(45, 12, 15);

console.log('result from Myrectangle' + myRectangle);
console.log('result from myCuboid' + myCuboid);

}