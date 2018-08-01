import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailPipe } from './pipes/';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmailPipe],
  exports: [EmailPipe]
})
export class AppPipesModule { }
