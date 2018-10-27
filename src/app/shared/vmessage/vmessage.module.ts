import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmessageComponent } from './component/vmessage.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VmessageComponent],
  exports: [VmessageComponent]
})
export class VmessageModule { }
