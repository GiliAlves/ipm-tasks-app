import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HinarioRoutingModule } from './hinario-routing.module';
import { HinarioComponent } from './component/hinario/hinario.component';
import { HinarioItemComponent } from './component/hinario-item/hinario-item.component';
import { HinarioListComponent } from './component/hinario-list/hinario-list.component';

@NgModule({
  imports: [
    CommonModule,
    HinarioRoutingModule
  ],
  declarations: [
    HinarioListComponent,
    HinarioItemComponent,
    HinarioComponent
  ]
})
export class HinarioModule { }
