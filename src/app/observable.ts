// Created By: Pratiksha Chandel 
// Topic cover : Services, Promises, & Route Protection

// a state with two values either resolve or reject
import {Observable} from "rxjs"

let setPromiseCall  =  function(tech){
    return new Promise(function(resolve,reject){

        setTimeout(()=>{
            // thinking wether he wants to take project or not
            if(tech=='angular'){
                resolve('yes i will take') // it will invoke first function inside then
            }
            else{
                reject(' get lost')
            }
        },5000)

    })
}  // setPromiseCall is promisiing to us that he will definitelt get back
setPromiseCall('angular').then((response)=>{
},(error)=>{
})


let setObservableCall  = function(tech){
    return new Observable(function(observer){
        setTimeout(()=>{
            // thinking wether he wants to take project or not
            if(tech=='Java'){
                observer.next('yes i will take') // it will invoke first function inside then
            }
            else{
                observer.error(' get lost')
            }
        },5000)

        setTimeout(()=>{
            // his girlfriend called
            observer.next("No i will not take the [prject")
        },10000)
    })
}

setObservableCall("Java").subscribe((rsponse)=>{},(error)=>{
  
})


var data =  readFile()

