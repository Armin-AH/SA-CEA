import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
  styleUrls: ['./bitacora.page.scss'],
})
export class bitacoraPage implements OnInit {
  hoy; matricula;carrera;motivo;fecha;nombre;id="";
  listadoBitacora; registrar:Boolean=false;Editar:Boolean=false;
  constructor(private BD:BDService) { }

  ngOnInit() {
    console.log(this.listadoBitacora)
    this.listadobitacora()
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
    this.listadobitacora()
  }
  registrarBitacora(){
    this.registrar=true
  }
  listadobitacora(){
    this.BD.listadobitacora=[]
    this.hoy= new Date().getFullYear()
    this.listadoBitacora=this.BD.listadoBitacora();
    this.listadoBitacora=this.BD.listadobitacora
  }
  borrar(ID){
    this.BD.deleteBitacora(ID);
    console.log(this.listadoBitacora)
    this.listadobitacora()
  }

  editar(ID,Nombre,Fecha,Matricula,Carrera,Motivo){
  this.BD.updateBitacora(ID,Nombre,Fecha,Matricula,Carrera,Motivo)
  this.Editar=false
  console.log(this.listadoBitacora)
  this.listadobitacora()
  }

  editobitacora(){
    this.Editar=true
  }

}
