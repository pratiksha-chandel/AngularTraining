import { Injectable} from '@angular/core';
import {Router , CanActivate} from '@angular/router'


@Injectable()

export class MydemoActivationGuards implements CanActivate{
    constructor (private router: Router){}

    canActivate(){
        console.log("in execution of can activation guard");
        return true;
    }
}