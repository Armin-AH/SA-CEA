import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
})
export class CitaPage implements OnInit {
  hoy; notas;carrera;motivo;fecha;nombre;id="";
  listadoCita; registrar:Boolean=false
  constructor(private BD:BDService) { }

  ngOnInit() {
    console.log(this.listadoCita)
    this.listadocita()
  }

  guardar(){
    this.BD.registroCita(this.id,this.nombre,this.fecha,this.notas,this.carrera,this.motivo)
    this.limpiar();
  }
  limpiar(){
    this.notas="";this.carrera=""
    this.motivo="";this.fecha="";
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

}
