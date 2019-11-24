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
  hoy; notas;carrera;motivo;fecha;nombre;id="";
  listadoCita; registrar:Boolean=false

  constructor(private BD:BDService, private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string) { }
  //constructor(private BD:BDService) { }

//////////////////////////////////////////////CRUD CITAS////////////////////////////////////////////////
  ngOnInit() {
    console.log(this.listadoCita)
    this.listadocita()

    this.resetEvent();
  }

  guardar(){
    this.BD.registroCita(this.id,this.nombre,this.fecha,this.notas,this.carrera,this.motivo)
    this.limpiar();
  }
  limpiar(){
    this.notas="";
    this.carrera="";
    this.motivo="";
    this.fecha="";
    this.nombre="";
    this.registrar=false
    this.listadocita()
  }
  registrarCita(){
    this.registrar=true
  }
  listadocita(){
    this.BD.listadocita=[]
    this.hoy= new Date().getFullYear()
    this.listadoCita=this.BD.listadoCita();
    this.listadoCita=this.BD.listadocita
  }
  //////////////////////////////////////////////CRUD CITAS////////////////////////////////////////////////

  //////////////////////////////////////////////CALENDARIO////////////////////////////////////////////////
  event = {
    nombre: '',
    motivo: '',



    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent, {static: false}) myCal: CalendarComponent;
 
  resetEvent() {
    this.event = {
      nombre: '',
      motivo: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }
 
  // Create the right event format and reload source
  addEvent() {
    let eventCopy = {
      nombre: this.event.nombre,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      motivo: this.event.motivo
    }
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }


  next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date reange and hence title changed
onViewTitleChanged(nombre) {
  this.viewTitle = nombre;
}
 
// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.nombre,
    subHeader: event.motivo,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}
  //////////////////////////////////////////////CALENDARIO////////////////////////////////////////////////

}
