import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DressdetailPageRoutingModule } from './dressdetail-routing.module';

import { DressdetailPage } from './dressdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DressdetailPageRoutingModule
  ],
  declarations: [DressdetailPage]
})
export class DressdetailPageModule {}
