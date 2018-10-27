import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';



const routes: Routes = [{

  path: '',
  component: LoginComponent,
  children: [
    {
      path: '',
      component: SigninComponent,
      data: {
        title: 'Sign in'
      }
    },
    {
      path: 'signup',
      component: SignupComponent,
      data: {
        title: 'Sign up'
      }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
