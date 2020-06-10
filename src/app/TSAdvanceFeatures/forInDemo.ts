
// using For -in Statements in TypeScript

var myBouquet ={
    1: 'rose',
    2: 'violet',
    3: 'lily',
    4: 'orchit',
    5: 'carnation'
}
function  listItems(){
 for (var k in myBouquet )    {
     console.log(k + ':' + myBouquet[k]);
 }
}
window.onload =() => {
    listItems();
}