import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { bitacoraPageRoutingModule } from './bitacora-routing.module';

import { bitacoraPage } from './bitacora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    bitacoraPageRoutingModule
  ],
  declarations: [bitacoraPage]
})
export class bitacoraPageModule {}
