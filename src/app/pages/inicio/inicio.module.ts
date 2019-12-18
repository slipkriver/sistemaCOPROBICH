import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { ComponentsModule } from '../../components/components.module';

import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../app-material.module';

const routes: Routes= [
  {
    path: '',
    component: InicioPage
}
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AppMaterialModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
