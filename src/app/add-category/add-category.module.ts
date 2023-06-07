import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddCategoryPageRoutingModule } from './add-category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AddCategoryPage } from './add-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCategoryPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AddCategoryPage]
})
export class AddCategoryPageModule {}
