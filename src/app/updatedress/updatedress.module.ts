import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatedressPageRoutingModule } from './updatedress-routing.module';

import { UpdatedressPage } from './updatedress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UpdatedressPage]
})
export class UpdatedressPageModule {}
