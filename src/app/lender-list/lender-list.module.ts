import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenderListComponent } from './lender-list/lender-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../core/meterial.module';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  { path: '', component: LenderListComponent },
];


@NgModule({
  imports: [
    CustomMaterialModule,
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  declarations: [LenderListComponent]
})
export class LenderListModule { }
