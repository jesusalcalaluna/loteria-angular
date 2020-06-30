import { Component, OnInit } from '@angular/core';
import {LoteriaService} from "../../services/loteria.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string;
  password:string;

  constructor( private loteria:LoteriaService,
               private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.loteria.login(this.usuario, this.password).subscribe( (resp:any) => {
      if (resp.message == 'ok'){
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/inicio');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error usuario / contraseña',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }, (error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error usuario / contraseña ' + `${error.error.message}`,
        showConfirmButton: false,
        timer: 1500
      })
    });
  }
}
