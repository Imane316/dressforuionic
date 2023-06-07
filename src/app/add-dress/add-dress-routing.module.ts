import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDressPage } from './add-dress.page';

const routes: Routes = [
  {
    path: '',
    component: AddDressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDressPageRoutingModule {}
