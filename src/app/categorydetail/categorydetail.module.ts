import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorydetailPageRoutingModule } from './categorydetail-routing.module';

import { CategorydetailPage } from './categorydetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorydetailPageRoutingModule
  ],
  declarations: [CategorydetailPage]
})
export class CategorydetailPageModule {}
