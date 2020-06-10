
//Created by: Pratiksha Chandel
// Date: 9 june 2020
// Assessment : Typescript: Advance Feature
// topic : Merge function in typescript 

function reportstate(model: string): string{
    return 'Model:' + model + '\n' + 
    'wheel: Type: ' + reportstate.type + ';' +
    'Size:' + reportstate.size + '  Inches' ;;
}

module reportstate {
    export var type = 'All-terrain';
    export var size = 20;

}

window.onload = function() {
    var result = reportstate('jeep');
    console.log(result);
}