import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletimRoutingModule } from './boletim-routing.module';
import { BoletimComponent } from './component/boletim/boletim.component';

@NgModule({
  imports: [
    CommonModule,
    BoletimRoutingModule
  ],
  declarations: [BoletimComponent]
})
export class BoletimModule { }
