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
  hoy: number;
  notas: string;
  carrera: string;
  motivo: string;
  fecha: string;
  nombre: string;
  id = '';
  registrar = false;
  Editar: boolean = false;
  selectedItem;

  listadoCita: any[];
  listadoCitaStr;
  listadoCitaObj: [];

  listadoActual: any[];
  listadoActuaObj: [];

  selectedDate: Date = new Date();

  constructor(
    private BD: BDService,
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,
  ) { }
  //constructor(private BD:BDService) { }

//////////////////////////////////////////////CRUD CITAS////////////////////////////////////////////////
  ngOnInit() {
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
    console.log('listado cita()')
    this.BD.listadoCita().then(() => {
      this.listadoCita = this.BD.listadocita;

      this.listadoCita = this.listadoCita.filter((cita) => {
        const citaFecha = new Date(cita.Fecha);
        const citaFechaAnio = citaFecha.getFullYear();
        const citaFechaMes = citaFecha.getMonth() + 1;
        const citaFechaDia = citaFecha.getDate();

        if (this.selectedDate) {
          const selectedDateYear = this.selectedDate.getFullYear();
          const selectedDateMonth = this.selectedDate.getMonth() + 1;
          const selectedDateDay = this.selectedDate.getDate();

          return citaFechaAnio === selectedDateYear &&
            citaFechaMes === selectedDateMonth &&
            citaFechaDia === selectedDateDay;
        } else {
          return true;
        }
      });

      console.log(this.listadoCita);
      console.log(this.listadoCita[1]);

      this.listadoCitaStr = JSON.stringify(this.listadoCita);
      this.listadoCitaObj = JSON.parse(this.listadoCitaStr);
    });
    //console.log(this.listadoCitaStr)
  }

  borrar(ID: string) {
    this.BD.deleteCita(ID);
    //console.log(this.listadocita);
    this.listadocita();

    this.nombre = ''
    this.fecha = ''
    this.carrera = ''
    this.motivo = ''
    this.notas = ''

  }

  editar(ID: string) {
    this.BD.updateCita(ID, this.nombre, this.fecha, this.carrera, this.motivo, this.notas);
    this.Editar = false;
    //console.log(this.listadoCita);
    this.listadocita();
    this.nombre = '';
    this.fecha = '';
    this.carrera = '';
    this.motivo = '';
    this.notas = '';
  }

  editocita(item) {
    this.selectedItem = item;
    this.Editar = true;
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
    console.log(ev);
    this.selectedDate = ev;
    this.listadocita();
    //console.log(ev);
    //console.log(typeof ev)
  };

  //////////////////////////////////////////////CALENDARIO////////////////////////////////////////////////

}
