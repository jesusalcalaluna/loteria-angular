import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class LoteriaService {

  numerocartas:any;
  numerocartas2:any;
  numerocartas3:any;

  url:string = 'http://localhost:3333';

  constructor ( private http:HttpClient ) {

  }

  guardarCartas(numeros:any)
  {
    this.numerocartas = numeros;
  }
  guardarCartas2(numeros:any)
  {
    this.numerocartas2 = numeros;
  }
  guardarCartas3(numeros:any)
  {
    this.numerocartas3 = numeros;
  }
  obtenerCartas(){
    return this.numerocartas;
  }
  obtenerCartas2(){
    return this.numerocartas2;
  }
  obtenerCartas3(){
    return this.numerocartas3;
  }

  login(usuario:string, password:string){
    const data = {
      user:usuario,
      password: password
    }
    return this.http.post(`${this.url}/login`, data)
      .pipe(
        map( (resp:any) => {
          if (resp.status == 'error'){
            console.log(resp);
            return resp;
          }
          localStorage.setItem('player', resp.data.user);
          return resp;
        })
      );
  }


  registrar(usuario:string, password:string ) {
    const data = {
      user:usuario,
      password:password
    }
    return this.http.post(`${this.url}/signup`, data)
      .pipe( map( (resp:any) => {
        if (resp.status == 'error'){
          console.log(resp);
          return resp;
        }
        localStorage.setItem('player', resp.data.user);
        return resp;
      }));
  }

  getUsers() {
    return this.http.get(`${this.url}/getUserScore`);
  }

}
