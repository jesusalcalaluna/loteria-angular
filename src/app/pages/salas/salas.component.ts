import { Component, OnInit } from '@angular/core';
import {socketLoteriaService} from "../../services/socketLoteria.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  nombresala:string;
  numeroCarta:string;

  player:any[] = [];
  constructor( private serviceSocketloteria:socketLoteriaService,
               private router:Router) { }

  ngOnInit(): void {
  }

  unirsesala() {



    localStorage.setItem('sala',this.nombresala);
    localStorage.setItem('numeroCarta',this.numeroCarta);

    this.router.navigateByUrl('juego/carta');
  }

}
