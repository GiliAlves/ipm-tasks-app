import { CoreModule } from './core/core.module';
import { ErrosModule } from './erros/erros.module';
import { CanticosModule } from './canticos/canticos.module';
import { HinarioModule } from './hinario/hinario.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HinarioModule,
    CanticosModule,
    ErrosModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
