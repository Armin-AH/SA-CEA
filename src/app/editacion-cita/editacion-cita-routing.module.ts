import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditacionCitaPage } from './editacion-cita.page';

const routes: Routes = [
  {
    path: '',
    component: EditacionCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditacionCitaPageRoutingModule {}
