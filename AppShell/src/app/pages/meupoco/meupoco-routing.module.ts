import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeupocoPage } from './meupoco.page';

const routes: Routes = [
  {
    path: '',
    component: MeupocoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeupocoPageRoutingModule {}
