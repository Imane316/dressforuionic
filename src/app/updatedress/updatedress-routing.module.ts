import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatedressPage } from './updatedress.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatedressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatedressPageRoutingModule {}
