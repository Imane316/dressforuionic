import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDressPageRoutingModule } from './add-dress-routing.module';

import { AddDressPage } from './add-dress.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddDressPage]
})
export class AddDressPageModule {}
