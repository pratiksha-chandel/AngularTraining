import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from "@angular/router"
import { AdminComponent } from './admin.component';
import { VegitableComponent } from './components/vegitable/vegitable.component';
import { MobileViewComponent } from './components/mobile-view/mobile-view.component';
import { PantryComponent } from './components/pantry/pantry.component';
import {MatTableModule} from '@angular/material/table';

var adminroutes : Routes = [
  {path:'',component:AdminComponent},
  {path:'pantry',component:PantryComponent},
  {path:'mobile',component:MobileViewComponent},
  {path:'vegitable',component:VegitableComponent}
]

@NgModule({
  declarations: [VegitableComponent, MobileViewComponent, PantryComponent],
  imports: [
    CommonModule,MatTableModule,
    RouterModule.forChild(adminroutes)
  ],
  exports:[RouterModule]
})
export class AdminModule { }
