import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantListComponent } from './merchant-list/merchant-list.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MerchantListComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MerchantListComponent]
})
export class MerchantListModule { }
