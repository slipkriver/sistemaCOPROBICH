import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoProdPageRoutingModule } from './ingreso-prod-routing.module';

import { IngresoProdPage } from './ingreso-prod.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoProdPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IngresoProdPage]
})
export class IngresoProdPageModule {}
