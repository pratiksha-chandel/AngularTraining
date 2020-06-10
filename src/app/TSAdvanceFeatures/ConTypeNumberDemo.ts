//Created by: Pratiksha Chandel
// Date: 9 june 2020
// Assessment : Typescript: Advance Feature
// topic : Contextually typed Expressions and the Number Primitive 

var Ceiling : (n : number) => number ;
//Ceiling = function (p) {
//   return Math.ceil (p);
// }
ceiling = (p => Math.ceil(p));
window.onload=function(){
    var T = 7.833454355;
    console.log(ceiling(T));
}
