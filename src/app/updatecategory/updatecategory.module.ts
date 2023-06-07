import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatecategoryPageRoutingModule } from './updatecategory-routing.module';

import { UpdatecategoryPage } from './updatecategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecategoryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatecategoryPage]
})
export class UpdatecategoryPageModule {}
