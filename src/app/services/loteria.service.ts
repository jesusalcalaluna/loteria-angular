import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class LoteriaService {

  numerocartas:any;

  constructor ( ) {

  }

  guardarCartas(numeros:any)
  {
    this.numerocartas = numeros;
  }
  obtenerCartas(){
    return this.numerocartas;
  }

}
