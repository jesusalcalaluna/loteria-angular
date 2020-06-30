import { Component, OnInit } from '@angular/core';
import {LoteriaService} from "../../services/loteria.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  usuario:string;
  password:string;

  constructor( private loteria:LoteriaService,
               private router:Router) { }

  ngOnInit(): void {
  }

  registrar() {
    this.loteria.registrar(this.usuario, this.password).subscribe( (resp:any) => {

      if (resp.message == 'ok'){
        Swal.fire({

          icon: 'success',
          title: 'Registrado',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl('/inicio')
      } else {
        Swal.fire({

          icon: 'error',
          title: 'Error al registrarte,' + `${resp.message}`,
          showConfirmButton: false,
          timer: 1500
        })

      }
    }, (error) => {
      console.log(error);
    });
  }

}
