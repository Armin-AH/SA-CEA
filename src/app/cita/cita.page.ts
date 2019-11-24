//import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';

import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
})
export class CitaPage implements OnInit {
  fechaselec;
  hoy: number;
  notas: string;
  carrera: string;
  motivo: string;
  fecha: string;
  nombre: string;
  id = '';
  listadoCita: JSON[];
  listadoActual: JSON[];
  registrar = false; 
  i: number = 0;
  a;

  constructor(private BD:BDService, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }
  //constructor(private BD:BDService) { }

//////////////////////////////////////////////CRUD CITAS////////////////////////////////////////////////
  ngOnInit() {
    console.log(this.listadoCita)
    this.listadocita()

    
  }

  guardar() {
    this.BD.registroCita(this.id, this.nombre, this.fecha, this.notas, this.carrera, this.motivo);
    this.limpiar();
  }

  limpiar() {
    this.notas = '';
    this.carrera= '';
    this.motivo = '';
    this.fecha = '';
    this.nombre = '';
    this.registrar = false;
    this.listadocita();
  }

  registrarCita() {
    this.registrar = true;
  }

  listadocita() {
    this.BD.listadocita = [];
    this.hoy = new Date().getFullYear();
    this.BD.listadoCita();
    this.listadoCita = this.BD.listadocita;
    console.log(this.listadoCita);

    

    this.a = this.listadoCita[1]
    console.log(this.listadoCita[1]);

    /*for(this.i = this.listadoCita.length; this.i++; ){
      if(this.listadoCita[1].fecha > "2019-11-29T16:00:25.232-07:00" && this.listadoCita.[this.i].fecha <= "2019-11-30T16:00:25.232-07:00")
    }*/
  }
  //////////////////////////////////////////////CRUD CITAS////////////////////////////////////////////////

  //////////////////////////////////////////////CALENDARIO////////////////////////////////////////////////
  
  event = {
    fecha: '',
  }
  
  eventSource = [];

  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  onEventSelected() {
    
  }

  onViewTitleChanged(nombre) {
      this.viewTitle = nombre;
  }

  onTimeSelected() {

  }

  onCurrentDateChanged = (ev: Date) => {
    //console.log(ev);
    //console.log(typeof ev)
    this.fechaselec = ev
    //console.log(this.fechaselec);

  };

  //////////////////////////////////////////////CALENDARIO////////////////////////////////////////////////

}
