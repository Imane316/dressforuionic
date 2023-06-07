import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatedressPageRoutingModule } from './updatedress-routing.module';

import { UpdatedressPage } from './updatedress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatedressPageRoutingModule
  ],
  declarations: [UpdatedressPage]
})
export class UpdatedressPageModule {}
