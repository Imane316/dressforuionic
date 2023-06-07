import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DressListPage } from './dress-list.page';

const routes: Routes = [
  {
    path: '',
    component: DressListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DressListPageRoutingModule {}
