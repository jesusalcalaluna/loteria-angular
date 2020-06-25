import { Component, OnInit, Input } from '@angular/core';
import {LoteriaService} from "../../services/loteria.service";

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {


  espacio1:boolean;

  cartas:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  numeroCartas:any;

  constructor( private loteriaservices:LoteriaService) {
    this.numeroCartas = this.loteriaservices.obtenerCartas()

    console.log(this.numeroCartas);
  }

  ngOnInit(): void {
  }

  clickBoton(index:any){
    console.log(index)
    if (index == 1 ){
      console.log(index)
      if (this.espacio1){
        this.espacio1 = false
      } else {
        this.espacio1 = true
      }
    }
  }

}
