import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpocoPage } from './addpoco.page';

const routes: Routes = [
  {
    path: '',
    component: AddpocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpocoPageRoutingModule {}
