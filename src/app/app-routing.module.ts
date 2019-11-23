import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bitacoras', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
<<<<<<< HEAD
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bitacoras',
    loadChildren: () => import('./bitacoras/bitacoras.module').then( m => m.BitacorasPageModule)
  },
=======
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule) },
  { path: 'bitacoras', loadChildren: () => import('./bitacora/bitacoras.module').then( m => m.BitacorasPageModule) },
  { path: 'cita', loadChildren: () => import('./cita/cita.module').then( m => m.CitaPageModule) },
  { path: 'reporte', loadChildren: () => import('./reporte/reporte.module').then( m => m.ReportePageModule) },
>>>>>>> 5be3995f92c89a794c53a65c28bf6b47f7c37d71

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
