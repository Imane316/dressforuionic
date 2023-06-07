import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DressListPageRoutingModule } from './dress-list-routing.module';

import { DressListPage } from './dress-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DressListPageRoutingModule
  ],
  declarations: [DressListPage]
})
export class DressListPageModule {}
