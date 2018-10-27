import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanticosRoutingModule } from './canticos-routing.module';
import { CanticosComponent } from './component/canticos/canticos.component';
import { CanticosListComponent } from './component/canticos-list/canticos-list.component';
import { CanticosItemComponent } from './component/canticos-item/canticos-item.component';


@NgModule({
  imports: [
    CommonModule,
    CanticosRoutingModule
  ],
  declarations: [
    CanticosListComponent,
    CanticosItemComponent,
    CanticosComponent
  ]
})
export class CanticosModule { }
