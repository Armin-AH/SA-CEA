import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
  styleUrls: ['./bitacora.page.scss'],
})
export class bitacoraPage implements OnInit {
  hoy: number;
  matricula: string;
  carrera: string;
  motivo: string;
  fecha: string;
  nombre: string;
  id = '';
  listadoBitacora: JSON[];
  registrar: boolean = false;
  Editar: boolean = false;
  selectedItem;
  validation_form: FormGroup;
  validation_messages = {
    'Nombre' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese un nombre valido'}
    ],
    'Matricula' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese una matricula valida'}
    ],
    'Carrera' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese una carrera valida'}
    ],
    'Motivo' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese un motivo valido'}
    ],

  }

  constructor(private BD: BDService) { }

  ngOnInit() {
    console.log(this.listadoBitacora);
    this.listadobitacora();
  }

  guardar() {
    this.BD.registroBitacora(this.id, this.nombre, this.fecha, this.matricula, this.carrera, this.motivo);
    this.limpiar();
  }

  limpiar() {
    this.matricula = '';
    this.carrera = '';
    this.motivo = '';
    this.fecha = '';
    this.nombre = '';
    this.registrar = false;
    this.listadobitacora();
  }

  registrarBitacora() {
    this.registrar = true;
  }

  listadobitacora() {
    this.BD.listadobitacora = [];
    this.hoy = new Date().getFullYear();
    this.BD.listadoBitacora();
    this.listadoBitacora = this.BD.listadobitacora;
  }

  borrar(ID: string) {
    this.BD.deleteBitacora(ID);
    console.log(this.listadoBitacora);
    this.listadobitacora();

    this.nombre = ''
    this.fecha = ''
    this.matricula = ''
    this.carrera = ''
    this.motivo = ''

  }

  editar(ID: string) {
    this.BD.updateBitacora(ID, this.nombre, this.fecha, this.matricula, this.carrera, this.motivo);
    this.Editar = false;
    console.log(this.listadoBitacora);
    this.listadobitacora();
    this.nombre = '';
    this.fecha = '';
    this.matricula = '';
    this.carrera = '';
    this.motivo = '';
  }

  editobitacora(item) {
    this.selectedItem = item;
    this.Editar = true;
  }

}
