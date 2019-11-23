import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'cita', loadChildren: () => import('./cita/cita.module').then( m => m.CitaPageModule) },
  { path: 'reporte', loadChildren: () => import('./reporte/reporte.module').then( m => m.ReportePageModule) },
  { path: 'bitacora', loadChildren: () => import('./bitacora/bitacora.module').then( m => m.bitacoraPageModule) },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
