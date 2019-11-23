import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class BDService {
  listadobitacora=[];
  constructor() { }

  loginUser(value){
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
        })
    })
    
   }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }

   registroBitacora(id,nombre,fecha,matricula,carrera,motivo){
    if(id==null || id=="" || id==undefined){
      id= Math.floor(Math.random()*99999)+1
    }
    firebase.database().ref().child('Bitacora').child(id).update({ID:id,Nombre:nombre,Fecha:fecha,
    Matricula:matricula,Carrera:carrera,Motivo:motivo})
   }
   listadoBitacora(){
     firebase.database().ref().child('Bitacora').orderByChild('Fecha').once('value',ss=>{
       ss.forEach(aa=>{
         this.listadobitacora.push(aa.val()) 
       })
     })
   }
}
