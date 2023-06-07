import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DressdetailPage } from './dressdetail.page';

const routes: Routes = [
  {
    path: '',
    component: DressdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DressdetailPageRoutingModule {}
