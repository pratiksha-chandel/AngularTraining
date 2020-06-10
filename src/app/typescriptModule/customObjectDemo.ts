//Created by: Pratiksha
// Date: 9 june 2020
// Assessment : Typescript function object and Module
// Topic covered : defining custome object in typescript 

module customObjectDemo {
    var car1  ={
        id: 1,
        make : 'Mazda',
        engin: 'v6',
        bhp: 354,
        reportStatus : function () {
            return 'make: '+ this.make + ' , '+
              'engin' + this.engin + ' , ' + 
              'HorsePower: ' + this.bhp + 'bhp'
                    }
    }
}
console.log('vehical make: '+ car1.make);
console.log(car1.reportStatus());
