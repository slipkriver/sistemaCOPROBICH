import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule', canActivate: [AuthGuard] },
  { path: 'menu-prod', loadChildren: './pages/menu-prod/menu-prod.module#MenuProdPageModule', canActivate: [AuthGuard] },
  { path: 'ingreso-prod', loadChildren: './pages/ingreso-prod/ingreso-prod.module#IngresoProdPageModule', canActivate: [AuthGuard]},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule'},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
