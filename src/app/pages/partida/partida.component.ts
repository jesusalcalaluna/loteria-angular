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
  aux="a";
  mostrarcartauno:boolean=false;
  mostrarcartados:boolean=false;
  mostrarcartatres:boolean=false;

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

  mostrarbtn:boolean = true;


  cartas:any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  numeroCartas:any;
  numeroCartas2:any;
  numeroCartas3:any;


  numerobajara:any;

  barajaspasadas:any[] = [];

  ganadores:any[] = [];
  mostrarbtnloteria:boolean = true;
  mostrarbtncentro:boolean = true;
  mostrarbtnllenota:boolean = true;
  mostrarbtnreinicar:boolean = false;

  constructor( private loteriaservices:LoteriaService,
               private socketloteria:socketLoteriaService) {
                this.aux= localStorage.getItem('numeroCarta');
                if(this.aux=="1"){
                  this.mostrarcartauno=true;}
                if(this.aux=="2"){

                  this.mostrarcartados=true;
                this.numeroCartas2 = this.loteriaservices.obtenerCartas2();}
                if(this.aux=="3"){

                  this.mostrarcartatres=true;
                  this.numeroCartas2 = this.loteriaservices.obtenerCartas2();
                  this.numeroCartas3 = this.loteriaservices.obtenerCartas3();}



  }

  ngOnInit(): void {
    this.numeroCartas = this.loteriaservices.obtenerCartas();
    this.players.push(localStorage.getItem('player'));
    if(this.aux=="2"){console.log("entro al dos");
      this.mostrarcartados=true;
                this.numeroCartas2 = this.loteriaservices.obtenerCartas2();
    }
    else{console.log("entro al 3");
    this.mostrarcartatres=true;
    this.numeroCartas2 = this.loteriaservices.obtenerCartas2();
    console.log(this.loteriaservices.obtenerCartas2(),this.loteriaservices.obtenerCartas3(),this.loteriaservices.obtenerCartas())
    this.numeroCartas3 = this.loteriaservices.obtenerCartas3();
    console.log(this.numeroCartas, this.numeroCartas2, this.numeroCartas3, this.mostrarcartatres);
    }

    if (!this.playerstotal[this.players[0]]){
      this.socketloteria.joinRoom(localStorage.getItem('sala'), this.players);

    }

    this.socketloteria.obtenerJugadores().subscribe( (resp) => {
      //console.log(resp);
      this.playerstotal = resp;
      //console.log(this.playerstotal)
      //emitir a new player arreglo players
    });

    this.socketloteria.ganadorloteria().subscribe( (resp) =>{
      this.mostrarbtnloteria = false;
      this.ganadores.push(resp + ' ganó loteria.')
    })

    this.socketloteria.ganadorcentro().subscribe( (resp) =>{
      this.mostrarbtncentro = false;
      this.ganadores.push(resp + ' ganó centro.')
    })

    this.socketloteria.ganadorllena().subscribe( (resp) =>{
      this.mostrarbtnllenota = false;
      this.ganadores.push(resp + ' ganó llena.')
    })

    this.socketloteria.obtenerbaraja(localStorage.getItem('sala')).subscribe( (resp) => {
      this.mostrarbtn = false
      if (resp.data) {
        this.numerobajara = resp.data;
        this.barajaspasadas.push(resp.data);
      } else {
        //activar boton de reinicio
        this.barajaspasadas = [];
        this.cartasSeleccionadas = [];
        this.mostrarbtnreinicar = true;
        this.mostrarbtnloteria = true;
        this.mostrarbtncentro = true;
        this.mostrarbtnllenota = true;

        console.log(this.barajaspasadas);
        console.log(this.cartasSeleccionadas);

        console.log('termino el juego');
      }

    });

  }

  ngOnDestroy() {

    this.playerstotal = [];
  }

  empezar(){
    this.mostrarbtn = false;
    this.socketloteria.empezarJuego(localStorage.getItem('sala'));
  }


  clickBoton(index:any, carta:any){
    console.log(index, carta);

    this.cartita = document.getElementById(index.toString());
    if (this.cartita.getAttribute('src')){
      this.cartita.removeAttribute('src');
      var idx = this.cartasSeleccionadas.indexOf(carta);
      this.cartasSeleccionadas.splice(idx, 1);

    } else {
      this.cartita.setAttribute('src', "./assets/img/frijol.png");
      this.cartasSeleccionadas.push(carta);
    }

    console.log(this.cartasSeleccionadas);
  }

  loteria(index:any){
    if(index == 1){
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
    }
    if(index == 2){
      this.espacio1 = document.getElementById('50');
      this.espacio2 = document.getElementById('51');
      this.espacio3 = document.getElementById('52');
      this.espacio4 = document.getElementById('53');
      this.espacio5 = document.getElementById('54');
      this.espacio6 = document.getElementById('55');
      this.espacio7 = document.getElementById('56');
      this.espacio8 = document.getElementById('57');
      this.espacio9 = document.getElementById('58');
      this.espacio10 = document.getElementById('59');
      this.espacio11 = document.getElementById('60');
      this.espacio12 = document.getElementById('61');
      this.espacio13 = document.getElementById('62');
      this.espacio14 = document.getElementById('63');
      this.espacio15 = document.getElementById('64');
      this.espacio16 = document.getElementById('65');
    }
    if(index == 3){
      this.espacio1 = document.getElementById('200');
      this.espacio2 = document.getElementById('201');
      this.espacio3 = document.getElementById('202');
      this.espacio4 = document.getElementById('203');
      this.espacio5 = document.getElementById('204');
      this.espacio6 = document.getElementById('205');
      this.espacio7 = document.getElementById('206');
      this.espacio8 = document.getElementById('207');
      this.espacio9 = document.getElementById('208');
      this.espacio10 = document.getElementById('209');
      this.espacio11 = document.getElementById('210');
      this.espacio12 = document.getElementById('211');
      this.espacio13 = document.getElementById('212');
      this.espacio14 = document.getElementById('213');
      this.espacio15 = document.getElementById('214');
      this.espacio16 = document.getElementById('215');
    }

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

      var encuentra = false;
      for (let i = 0; i < this.barajaspasadas.length; i++) {
        encuentra = false;
        const bajarapasada = this.barajaspasadas[i];
        for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
          const selecbaraja = this.cartasSeleccionadas[i];
          if (selecbaraja != bajarapasada){
            encuentra = true;
            Swal.fire({
              icon: 'error',
              title: 'mentiroso',
              showConfirmButton: false,
              timer: 1500
            });
            break;
          }
        }
        if (encuentra){
          break;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Has ganado la loteria',
        showConfirmButton: false,
        timer: 1500
      });
      this.socketloteria.ganoloteria(localStorage.getItem('sala'),localStorage.getItem('player'));
      this.mostrarbtnloteria = false;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }

  }

  centro(inde:any) {
    console.log("entraste al centro")
    if(inde==1){
      console.log(inde, "estas en el 1");
    this.espacio11 = document.getElementById('10');
    this.espacio10 = document.getElementById('9');
    this.espacio6 = document.getElementById('5');
    this.espacio7 = document.getElementById('6');

    if (this.espacio6.getAttribute('src') && this.espacio7.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio10.getAttribute('src')){
      var encuentra = false;
      for (let i = 0; i < this.barajaspasadas.length; i++) {
        encuentra = false;
        const bajarapasada = this.barajaspasadas[i];
        for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
          const selecbaraja = this.cartasSeleccionadas[i];
          if (selecbaraja != bajarapasada){
            encuentra = true;
            Swal.fire({
              icon: 'error',
              title: 'mentiroso',
              showConfirmButton: false,
              timer: 1500
            });
            break;
          }
        }
        if (encuentra){
          break;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Has ganado centro',
        showConfirmButton: false,
        timer: 1500
      });
      this.socketloteria.ganocentro(localStorage.getItem('sala'),localStorage.getItem('player'));
      this.mostrarbtncentro = false;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }
    }
    if(inde==2){
      console.log(inde,"estas en el dos");
    this.espacio11 = document.getElementById('60');
    this.espacio10 = document.getElementById('59');
    this.espacio6 = document.getElementById('55');
    this.espacio7 = document.getElementById('56');

    if (this.espacio6.getAttribute('src') && this.espacio7.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio10.getAttribute('src')){
      var encuentra = false;
      for (let i = 0; i < this.barajaspasadas.length; i++) {
        encuentra = false;
        const bajarapasada = this.barajaspasadas[i];
        for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
          const selecbaraja = this.cartasSeleccionadas[i];
          if (selecbaraja != bajarapasada){
            encuentra = true;
            Swal.fire({
              icon: 'error',
              title: 'mentiroso',
              showConfirmButton: false,
              timer: 1500
            });
            break;
          }
        }
        if (encuentra){
          break;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Has ganado centro',
        showConfirmButton: false,
        timer: 1500
      });
      this.socketloteria.ganocentro(localStorage.getItem('sala'),localStorage.getItem('player'));
      this.mostrarbtncentro = false;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }
    }
    if(inde==3){
      console.log(inde,"estas en el 3");
    this.espacio11 = document.getElementById('210');
    this.espacio10 = document.getElementById('209');
    this.espacio6 = document.getElementById('205');
    this.espacio7 = document.getElementById('206');

    if (this.espacio6.getAttribute('src') && this.espacio7.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio10.getAttribute('src')){
      var encuentra = false;
      for (let i = 0; i < this.barajaspasadas.length; i++) {
        encuentra = false;
        const bajarapasada = this.barajaspasadas[i];
        for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
          const selecbaraja = this.cartasSeleccionadas[i];
          if (selecbaraja != bajarapasada){
            encuentra = true;
            Swal.fire({
              icon: 'error',
              title: 'mentiroso',
              showConfirmButton: false,
              timer: 1500
            });
            break;
          }
        }
        if (encuentra){
          break;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Has ganado centro',
        showConfirmButton: false,
        timer: 1500
      });
      this.socketloteria.ganocentro(localStorage.getItem('sala'),localStorage.getItem('player'));
      this.mostrarbtncentro = false;
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

  llena(ind:any) {
    if(ind==1){
      
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


      var encuentra = false;
      for (let i = 0; i < this.barajaspasadas.length; i++) {
        encuentra = false;
        const bajarapasada = this.barajaspasadas[i];
        for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
          const selecbaraja = this.cartasSeleccionadas[i];
          if (selecbaraja != bajarapasada){
            encuentra = true;
            Swal.fire({
              icon: 'error',
              title: 'mentiroso',
              showConfirmButton: false,
              timer: 1500
            });
            break;
          }
        }
        if (encuentra){
          break;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Has ganado la llena',
        showConfirmButton: false,
        timer: 1500
      });
      this.socketloteria.ganollena(localStorage.getItem('sala'),localStorage.getItem('player'));
      this.mostrarbtnllenota = false;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'mentiroso',
        showConfirmButton: false,
        timer: 1500
      });
    }
    if (ind==2){
      this.espacio1 = document.getElementById('50');
      this.espacio2 = document.getElementById('51');
      this.espacio3 = document.getElementById('52');
      this.espacio4 = document.getElementById('53');
      this.espacio5 = document.getElementById('54');
      this.espacio6 = document.getElementById('55');
      this.espacio7 = document.getElementById('56');
      this.espacio8 = document.getElementById('57');
      this.espacio9 = document.getElementById('58');
      this.espacio10 = document.getElementById('59');
      this.espacio11 = document.getElementById('60');
      this.espacio12 = document.getElementById('61');
      this.espacio13 = document.getElementById('62');
      this.espacio14 = document.getElementById('63');
      this.espacio15 = document.getElementById('64');
      this.espacio16 = document.getElementById('65');
  
      if (this.espacio1.getAttribute('src') && this.espacio2.getAttribute('src') &&
          this.espacio3.getAttribute('src') && this.espacio4.getAttribute('src') &&
          this.espacio5.getAttribute('src') && this.espacio6.getAttribute('src') &&
          this.espacio7.getAttribute('src') && this.espacio8.getAttribute('src') &&
          this.espacio9.getAttribute('src') && this.espacio10.getAttribute('src') &&
          this.espacio11.getAttribute('src') && this.espacio12.getAttribute('src') &&
          this.espacio13.getAttribute('src') && this.espacio14.getAttribute('src') &&
          this.espacio15.getAttribute('src') && this.espacio16.getAttribute('src')){
  
  
        var encuentra = false;
        for (let i = 0; i < this.barajaspasadas.length; i++) {
          encuentra = false;
          const bajarapasada = this.barajaspasadas[i];
          for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
            const selecbaraja = this.cartasSeleccionadas[i];
            if (selecbaraja != bajarapasada){
              encuentra = true;
              Swal.fire({
                icon: 'error',
                title: 'mentiroso',
                showConfirmButton: false,
                timer: 1500
              });
              break;
            }
          }
          if (encuentra){
            break;
          }
        }
        Swal.fire({
          icon: 'success',
          title: 'Has ganado la llena',
          showConfirmButton: false,
          timer: 1500
        });
        this.socketloteria.ganollena(localStorage.getItem('sala'),localStorage.getItem('player'));
        this.mostrarbtnllenota = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'mentiroso',
          showConfirmButton: false,
          timer: 1500
        });
      }
  }
  if(ind==3){
    
    this.espacio1 = document.getElementById('200');
    this.espacio2 = document.getElementById('201');
    this.espacio3 = document.getElementById('202');
    this.espacio4 = document.getElementById('203');
    this.espacio5 = document.getElementById('204');
    this.espacio6 = document.getElementById('205');
    this.espacio7 = document.getElementById('206');
    this.espacio8 = document.getElementById('207');
    this.espacio9 = document.getElementById('208');
    this.espacio10 = document.getElementById('209');
    this.espacio11 = document.getElementById('210');
    this.espacio12 = document.getElementById('211');
    this.espacio13 = document.getElementById('212');
    this.espacio14 = document.getElementById('213');
    this.espacio15 = document.getElementById('214');
    this.espacio16 = document.getElementById('215');

    if (this.espacio1.getAttribute('src') && this.espacio2.getAttribute('src') &&
        this.espacio3.getAttribute('src') && this.espacio4.getAttribute('src') &&
        this.espacio5.getAttribute('src') && this.espacio6.getAttribute('src') &&
        this.espacio7.getAttribute('src') && this.espacio8.getAttribute('src') &&
        this.espacio9.getAttribute('src') && this.espacio10.getAttribute('src') &&
        this.espacio11.getAttribute('src') && this.espacio12.getAttribute('src') &&
        this.espacio13.getAttribute('src') && this.espacio14.getAttribute('src') &&
        this.espacio15.getAttribute('src') && this.espacio16.getAttribute('src')){


      var encuentra = false;
      for (let i = 0; i < this.barajaspasadas.length; i++) {
        encuentra = false;
        const bajarapasada = this.barajaspasadas[i];
        for (let j = 0; j < this.cartasSeleccionadas.length; j++) {
          const selecbaraja = this.cartasSeleccionadas[i];
          if (selecbaraja != bajarapasada){
            encuentra = true;
            Swal.fire({
              icon: 'error',
              title: 'mentiroso',
              showConfirmButton: false,
              timer: 1500
            });
            break;
          }
        }
        if (encuentra){
          break;
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Has ganado la llena',
        showConfirmButton: false,
        timer: 1500
      });
      this.socketloteria.ganollena(localStorage.getItem('sala'),localStorage.getItem('player'));
      this.mostrarbtnllenota = false;
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




  }


  stop() {
    this.socketloteria.detener(localStorage.getItem('sala'));
  }

  reiniciar(){
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
    console.log('reset')
    if (this.espacio1.getAttribute('src')){
      this.espacio1.removeAttribute('src');
    }
    if (this.espacio2.getAttribute('src')){
      this.espacio2.removeAttribute('src');
    }
    if (this.espacio3.getAttribute('src')){
      this.espacio3.removeAttribute('src');
    }
    if (this.espacio4.getAttribute('src')){
      this.espacio4.removeAttribute('src');
    }
    if (this.espacio5.getAttribute('src')){
      this.espacio5.removeAttribute('src');
    }
    if (this.espacio6.getAttribute('src')){
      this.espacio6.removeAttribute('src');
    }
    if (this.espacio7.getAttribute('src')){
      this.espacio7.removeAttribute('src');
    }
    if (this.espacio8.getAttribute('src')){
      this.espacio8.removeAttribute('src');
    }
    if (this.espacio9.getAttribute('src')){
      this.espacio9.removeAttribute('src');
    }
    if (this.espacio10.getAttribute('src')){
      this.espacio10.removeAttribute('src');
    }
    if (this.espacio11.getAttribute('src')){
      this.espacio11.removeAttribute('src');
    }
    if (this.espacio12.getAttribute('src')){
      this.espacio12.removeAttribute('src');
    }
    if (this.espacio13.getAttribute('src')){
      this.espacio13.removeAttribute('src');
    }
    if (this.espacio14.getAttribute('src')){
      this.espacio14.removeAttribute('src');
    }
    if (this.espacio15.getAttribute('src')){
      this.espacio15.removeAttribute('src');
    }
    if (this.espacio16.getAttribute('src')){
      this.espacio16.removeAttribute('src');
    }
    this.mostrarbtn = true;
    this.mostrarbtnreinicar = false;
    this.ganadores = [];
    this.cartasSeleccionadas = [];
    this.barajaspasadas = [];


  }

}
