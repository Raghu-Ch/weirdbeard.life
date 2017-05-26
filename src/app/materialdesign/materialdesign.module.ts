import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class MaterialdesignModule { }
