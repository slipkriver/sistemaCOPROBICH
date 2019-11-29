import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProdPage } from './menu-prod.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuProdPageRoutingModule {}
