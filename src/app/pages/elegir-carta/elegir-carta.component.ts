import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Router} from "@angular/router";
import {LoteriaService} from "../../services/loteria.service";

@Component({
  selector: 'app-elegir-carta',
  templateUrl: './elegir-carta.component.html',
  styleUrls: ['./elegir-carta.component.css']
})
export class ElegirCartaComponent implements OnInit {

  cartasnum:any[] = [];

  cartaCompleta:any[] = [];

  constructor( private router:Router,
               private loteriaservice:LoteriaService) {

    for (let i = 1; i < 55; i++) {
      this.cartasnum.push(i)
    }

    console.log(this.cartasnum);

  }

  ngOnInit(): void {
  }


  espaciouno = [];
  espaciodos = [];
  espaciotres = [];
  espaciocuatro= [];
  espaciocinco = [];
  espacioseis = [];
  espaciosiete = [];
  espacioocho= [];
  espacionueve = [];
  espaciodiez = [];
  espacioonce = [];
  espaciodoce = [];
  espaciotrece = [];
  espaciocartoce = [];
  espacioquince = [];
  espaciodieziseis = [];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }

  resetarTablero() {
    if (this.espaciouno[0]) {
      this.cartasnum.push(this.espaciouno[0])
    }
    if (this.espaciodos[0]) {
      this.cartasnum.push(this.espaciodos[0])
    }
    if (this.espaciotres[0]) {
      this.cartasnum.push(this.espaciotres[0])
    }
    if (this.espaciocuatro[0]) {
      this.cartasnum.push(this.espaciocuatro[0])
    }
    if (this.espaciocinco[0]) {
      this.cartasnum.push(this.espaciocinco[0])
    }
    if (this.espacioseis[0]) {
      this.cartasnum.push(this.espacioseis[0])
    }
    if (this.espaciosiete[0]) {
      this.cartasnum.push(this.espaciosiete[0])
    }
    if (this.espacioocho[0]) {
      this.cartasnum.push(this.espacioocho[0])
    }
    if (this.espacionueve[0]) {
      this.cartasnum.push(this.espacionueve[0])
    }
    if (this.espaciodiez[0]) {
      this.cartasnum.push(this.espaciodiez[0])
    }
    if (this.espacioonce[0]) {
      this.cartasnum.push(this.espacioonce[0])
    }
    if (this.espaciodoce[0]) {
      this.cartasnum.push(this.espaciodoce[0])
    }
    if (this.espaciotrece[0]) {
      this.cartasnum.push(this.espaciotrece[0])
    }
    if (this.espaciocartoce[0]) {
      this.cartasnum.push(this.espaciocartoce[0])
    }
    if (this.espacioquince[0]) {
      this.cartasnum.push(this.espacioquince[0])
    }
    if (this.espaciodieziseis[0]) {
      this.cartasnum.push(this.espaciodieziseis[0])
    }
    this.espaciouno = [];
    this.espaciodos = [];
    this.espaciotres = [];
    this.espaciocuatro = [];
    this.espaciocinco = [];
    this.espacioseis = [];
    this.espaciosiete = [];
    this.espacioocho = [];
    this.espacionueve = [];
    this.espaciodiez = [];
    this.espacioonce = [];
    this.espaciotrece = [];
    this.espaciocartoce = [];
    this.espacioquince = [];
    this.espaciodieziseis = [];
  }

  entrarJuego(){

    if (this.espaciouno.length > 1 || this.espaciodos.length > 1 || this.espaciotres.length > 1
    || this.espaciocuatro.length > 1 || this.espaciocinco.length > 1 || this.espacioseis.length > 1
    || this.espaciosiete.length > 1 || this.espacioocho.length > 1 || this.espacionueve.length > 1
    || this.espaciodiez.length > 1 || this.espacioonce.length > 1 || this.espaciodoce.length > 1
    || this.espaciotrece.length > 1 || this.espaciocartoce.length > 1 || this.espacioquince.length > 1
    || this.espaciodieziseis.length > 1){
      console.log('hay dos cartas en un espacio')
    } else {
      this.cartaCompleta.push(this.espaciouno[0]);
      this.cartaCompleta.push(this.espaciodos[0]);
      this.cartaCompleta.push(this.espaciotres[0]);
      this.cartaCompleta.push(this.espaciocuatro[0]);
      this.cartaCompleta.push(this.espaciocinco[0]);
      this.cartaCompleta.push(this.espacioseis[0]);
      this.cartaCompleta.push(this.espaciosiete[0]);
      this.cartaCompleta.push(this.espacioocho[0]);
      this.cartaCompleta.push(this.espacionueve[0]);
      this.cartaCompleta.push(this.espaciodiez[0]);
      this.cartaCompleta.push(this.espacioonce[0]);
      this.cartaCompleta.push(this.espaciodoce[0]);
      this.cartaCompleta.push(this.espaciotrece[0]);
      this.cartaCompleta.push(this.espaciocartoce[0]);
      this.cartaCompleta.push(this.espacioquince[0]);
      this.cartaCompleta.push(this.espaciodieziseis[0]);

      this.loteriaservice.guardarCartas(this.cartaCompleta);

      this.router.navigateByUrl('juego/partida')
    }


  }

}
