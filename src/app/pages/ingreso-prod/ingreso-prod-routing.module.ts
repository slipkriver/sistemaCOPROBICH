import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoProdPage } from './ingreso-prod.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoProdPageRoutingModule {}
