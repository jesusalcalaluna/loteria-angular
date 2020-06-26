import { Component, OnInit } from '@angular/core';
import {socketLoteriaService} from "../../services/socketLoteria.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent implements OnInit {

  nombresala:string;
  nombreplayer:string;
  player:any [] = [];

  constructor( private serviceSocketloteria:socketLoteriaService,
               private router:Router) { }

  ngOnInit(): void {
  }


  Crearsala() {


    localStorage.setItem('sala',this.nombresala);
    localStorage.setItem('player', this.nombreplayer);
    this.router.navigateByUrl('juego/carta');
  }

}
