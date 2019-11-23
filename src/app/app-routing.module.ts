import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bitacoras', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'menuprincipal', loadChildren: () => import('./menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule) },
  { path: 'bitacoras', loadChildren: () => import('./bitacora/bitacoras.module').then( m => m.BitacorasPageModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule) },
  { path: 'cita', loadChildren: () => import('./cita/cita.module').then( m => m.CitaPageModule) },
  { path: 'reporte', loadChildren: () => import('./reporte/reporte.module').then( m => m.ReportePageModule) },
  { path: 'editacion-cita', loadChildren: () => import('./editacion-cita/editacion-cita.module').then( m => m.EditacionCitaPageModule) },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
