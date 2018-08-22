import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeadsService} from './leads.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[LeadsService]
})
export class LeadsModule { }
