import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {LoteriaService} from "../../services/loteria.service";
import {socketLoteriaService} from "../../services/socketLoteria.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit, OnDestroy {



  players:string[] = [];
  playerstotal:string[] = [];
  cartita: HTMLElement;
  cartasSeleccionadas:any[]=[];
  barajas:any[] = [];

  espacio1: HTMLElement;
  espacio2: HTMLElement;
  espacio3: HTMLElement;
  espacio4: HTMLElement;
  espacio5: HTMLElement;
  espacio6: HTMLElement;
  espacio7: HTMLElement;
  espacio8: HTMLElement;
  espacio9: HTMLElement;
  espacio10: HTMLElement;
  espacio11: HTMLElement;
  espacio12: HTMLElement;
  espacio13: HTMLElement;
  espacio14: HTMLElement;
  espacio15: HTMLElement;
  espacio16: HTMLElement;
  resetBtn: HTMLElement;

  cartas:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  numeroCartas:any;

  numerobajara:any;

  constructor( private loteriaservices:LoteriaService,
               private socketloteria:socketLoteriaService) {




  }

  ngOnInit(): void {
    this.numeroCartas = this.loteriaservices.obtenerCartas();
    this.players.push(localStorage.getItem('player'));

    if (!this.playerstotal[this.players[0]]){
      this.socketloteria.joinRoom(localStorage.getItem('sala'), this.players);

    }

    this.socketloteria.obtenerJugadores().subscribe( (resp) => {
      //console.log(resp);
      this.playerstotal = resp;
      //console.log(this.playerstotal)
      //emitir a new player arreglo players
    });


  }

  ngOnDestroy() {

    this.playerstotal = [];
  }

  empezar(){
    this.socketloteria.obtenerbaraja(localStorage.getItem('sala')).subscribe( (resp) => {
      if (resp.data) {
        this.numerobajara = resp.data;
      } else {
        //activar boton de reinicio
        this.resetBtn = document.getElementById('reset');
        this.resetBtn.classList.remove('disabled');
        console.log('termino el juego');
      }

    });
    this.resetBtn = document.getElementById('reset');
    this.resetBtn.setAttribute('class', 'disabled');
    console.log('reset');

  }


  clickBoton(index:any, carta:any){
    console.log(index);

    this.cartita = document.getElementById(index.toString());
    if (this.cartita.getAttribute('src')){
      this.cartita.removeAttribute('src');
      var idx = this.cartasSeleccionadas.indexOf(carta);
      this.cartasSeleccionadas.splice(idx, 1);

    } else {
      this.cartita.setAttribute('src', "./assets/img/frijol.png");
      this.cartasSeleccionadas.push(carta);

    }


  }

  loteria(){

    this.espacio1 = document.getElementById('0');
    this.espacio2 = document.getElementById('1');
    this.espacio3 = document.getElementById('2');
    this.espacio4 = document.getElementById('3');
    this.espacio5 = document.getElementById('4');
    this.espacio6 = document.getElementById('5');
    this.espacio7 = document.getElementById('6');
    this.espacio8 = document.getElementById('7');
    this.espacio9 = document.getElementById('8');
    this.espacio10 = document.getElementById('9');
    this.espacio11 = document.getElementById('10');
    this.espacio12 = document.getElementById('11');
    this.espacio13 = document.getElementById('12');
    this.espacio14 = document.getElementById('13');
    this.espacio15 = document.getElementById('14');
    this.espacio16 = document.getElementById('15');
    if (this.espacio1.getAttribute('src') && this.espacio2.getAttribute('src') &&
        this.espacio3.getAttribute('src') && this.espacio4.getAttribute('src') ||
        this.espacio5.getAttribute('src') && this.espacio6.getAttribute('src') &&
        this.espacio7.getAttribute('src') && this.espacio8.getAttribute('src') ||
        this.espacio9.getAttribute('src') && this.espacio10.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio12.getAttribute('src') ||
        this.espacio13.getAttribute('src') && this.espacio14.getAttribute('src') &&
        this.espacio15.getAttribute('src') && this.espacio16.getAttribute('src') ||
        this.espacio1.getAttribute('src') && this.espacio5.getAttribute('src') &&
        this.espacio9.getAttribute('src') && this.espacio13.getAttribute('src') ||
        this.espacio2.getAttribute('src') && this.espacio6.getAttribute('src') &&
        this.espacio10.getAttribute('src') && this.espacio14.getAttribute('src') ||
        this.espacio3.getAttribute('src') && this.espacio7.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio15.getAttribute('src') ||
        this.espacio4.getAttribute('src') && this.espacio8.getAttribute('src') &&
        this.espacio12.getAttribute('src') && this.espacio16.getAttribute('src') ||
        this.espacio1.getAttribute('src') && this.espacio6.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio16.getAttribute('src') ||
        this.espacio4.getAttribute('src') && this.espacio7.getAttribute('src') &&
        this.espacio10.getAttribute('src') && this.espacio13.getAttribute('src')){


       Swal.fire({
         icon: 'success',
          title: 'Has ganado la llena',
          showConfirmButton: false,
          timer: 1500
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

  centro() {
    this.espacio11 = document.getElementById('10');
    this.espacio10 = document.getElementById('9');
    this.espacio6 = document.getElementById('5');
    this.espacio7 = document.getElementById('6');

    if (this.espacio6.getAttribute('src') && this.espacio7.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio10.getAttribute('src')){
      Swal.fire({
        icon: 'success',
        title: 'Has ganado la llena',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }


  }

  llena() {
    this.espacio1 = document.getElementById('0');
    this.espacio2 = document.getElementById('1');
    this.espacio3 = document.getElementById('2');
    this.espacio4 = document.getElementById('3');
    this.espacio5 = document.getElementById('4');
    this.espacio6 = document.getElementById('5');
    this.espacio7 = document.getElementById('6');
    this.espacio8 = document.getElementById('7');
    this.espacio9 = document.getElementById('8');
    this.espacio10 = document.getElementById('9');
    this.espacio11 = document.getElementById('10');
    this.espacio12 = document.getElementById('11');
    this.espacio13 = document.getElementById('12');
    this.espacio14 = document.getElementById('13');
    this.espacio15 = document.getElementById('14');
    this.espacio16 = document.getElementById('15');

    if (this.espacio1.getAttribute('src') && this.espacio2.getAttribute('src') &&
        this.espacio3.getAttribute('src') && this.espacio4.getAttribute('src') &&
        this.espacio5.getAttribute('src') && this.espacio6.getAttribute('src') &&
        this.espacio7.getAttribute('src') && this.espacio8.getAttribute('src') &&
        this.espacio9.getAttribute('src') && this.espacio10.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio12.getAttribute('src') &&
        this.espacio13.getAttribute('src') && this.espacio14.getAttribute('src') &&
        this.espacio15.getAttribute('src') && this.espacio16.getAttribute('src')){


      Swal.fire({
        icon: 'success',
        title: 'Has ganado la llena',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }





  }





}
