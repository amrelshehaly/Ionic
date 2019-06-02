import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubvegetablePage } from './subvegetable';

@NgModule({
  declarations: [
    SubvegetablePage,
  ],
  imports: [
    IonicPageModule.forChild(SubvegetablePage),
  ],
})
export class SubvegetablePageModule {}
