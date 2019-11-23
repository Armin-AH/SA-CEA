import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-bitacoras',
  templateUrl: './bitacoras.page.html',
  styleUrls: ['./bitacoras.page.scss'],
})
export class BitacorasPage implements OnInit {
  hoy; matricula;carrera;motivo;fecha;nombre;id="";
  listadoBitacora; registrar:Boolean=false
  constructor(private BD:BDService) { }

  ngOnInit() {
    console.log(this.listadoBitacora)
    this.listadoBitacoras()
  }

  guardar(){
    this.BD.registroBitacora(this.id,this.nombre,this.fecha,this.matricula,this.carrera,this.motivo)
    this.limpiar();
  }
  limpiar(){
    this.matricula="";this.carrera=""
    this.motivo="";this.fecha="";
    this.nombre="";
    this.registrar=false
    this.listadoBitacoras()
  }
  registrarBitacora(){
    this.registrar=true
  }
  listadoBitacoras(){
    this.BD.listadoBitacoras=[]
    this.hoy= new Date().getFullYear()
    this.listadoBitacora=this.BD.listadoBitacora();
    this.listadoBitacora=this.BD.listadoBitacoras
  }

}
