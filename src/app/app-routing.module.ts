import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule'},
  { path: 'menu-prod', loadChildren: './pages/menu-prod/menu-prod.module#MenuProdPageModule'},
  { path: 'ingreso-prod', loadChildren: './pages/ingreso-prod/ingreso-prod.module#IngresoProdPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
];
// canActivate: [AuthGuard]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
