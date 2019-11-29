import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuProdPageRoutingModule } from './menu-prod-routing.module';

import { MenuProdPage } from './menu-prod.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuProdPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuProdPage]
})
export class MenuProdPageModule {}
