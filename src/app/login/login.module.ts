import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../core/meterial.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    CustomMaterialModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
