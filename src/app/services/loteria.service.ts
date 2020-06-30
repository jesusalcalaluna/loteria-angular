import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:class-name
export class LoteriaService {

  numerocartas:any;

  url:string = 'http://localhost:3333';

  constructor ( private http:HttpClient ) {

  }

  guardarCartas(numeros:any)
  {
    this.numerocartas = numeros;
  }
  obtenerCartas(){
    return this.numerocartas;
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

}
