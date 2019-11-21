import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditacionCitaPageRoutingModule } from './editacion-cita-routing.module';

import { EditacionCitaPage } from './editacion-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditacionCitaPageRoutingModule
  ],
  declarations: [EditacionCitaPage]
})
export class EditacionCitaPageModule {}
