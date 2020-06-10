
// Created By: Pratiksha Chandel 
// Project Training :  Ui TRAINING 
// Topic cover : Pipes 

import {Pipe , PipeTransform} from "@angular/core"

@Pipe({
    name:'discount'
})
export class DiscountPipe implements PipeTransform{
transform(data , percentage){
 console.log("you got the data", data)
 //modify the data and return what ever you want

 return data - data*(percentage/100)

}
}