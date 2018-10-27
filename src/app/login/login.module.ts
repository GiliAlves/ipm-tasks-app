import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { NgbCarouselModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    LoginRoutingModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent,

  ],
  providers: []
})
export class LoginModule { }
