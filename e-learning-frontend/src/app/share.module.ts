import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, DropdownModule, FormsModule, RouterModule
  ],
  exports:[
    CommonModule, DropdownModule, FormsModule, RouterModule
  ]
})
export class ShareModule { }
