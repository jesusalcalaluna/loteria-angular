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
 // console.log(localStorage.getItem('numeroCarta'));
  cartasnum:any[] = [];
  numeroCarta:string[] = [];
  cartaCompleta:any[] = [];
  cartaCompleta2:any[] = [];
  cartaCompleta3:any[] = [];
  aux="a";
  ass =0;
  asss =1;
  mostrarbtn:boolean = true;
  mostrarbtnentrar:boolean=false;
  mostrarcartauno:boolean=true;
  mostrarcartados:boolean=false;
  mostrarcartatres:boolean=false;

  

  constructor( private router:Router,
               private loteriaservice:LoteriaService) {

    for (let i = 1; i < 55; i++) {
      this.cartasnum.push(i)
    }

    this.numeroCarta.push(localStorage.getItem('numeroCarta'));
    console.log(this.numeroCarta);
     this.aux= localStorage.getItem('numeroCarta');
     if(this.aux=="1"){
      this.ass=1;}
    if(this.aux=="2"){
      this.ass=2;}
    if(this.aux=="3"){
      this.ass=3;}

     console.log(this.ass);
     if(this.ass==1)
     {
     this.mostrarbtn= false;
      this.mostrarbtnentrar=true;
     }
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

  espaciouno2 = [];
  espaciodos2 = [];
  espaciotres2 = [];
  espaciocuatro2= [];
  espaciocinco2 = [];
  espacioseis2 = [];
  espaciosiete2 = [];
  espacioocho2= [];
  espacionueve2 = [];
  espaciodiez2 = [];
  espacioonce2 = [];
  espaciodoce2 = [];
  espaciotrece2 = [];
  espaciocartoce2 = [];
  espacioquince2 = [];
  espaciodieziseis2 = [];

  espaciouno3 = [];
  espaciodos3 = [];
  espaciotres3 = [];
  espaciocuatro3= [];
  espaciocinco3 = [];
  espacioseis3 = [];
  espaciosiete3 = [];
  espacioocho3= [];
  espacionueve3 = [];
  espaciodiez3 = [];
  espacioonce3 = [];
  espaciodoce3 = [];
  espaciotrece3 = [];
  espaciocartoce3 = [];
  espacioquince3 = [];
  espaciodieziseis3 = [];

  


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
    this.espaciodoce = [];
    this.espaciotrece = [];
    this.espaciocartoce = [];
    this.espacioquince = [];
    this.espaciodieziseis = [];
  }
  siguiente(){

    
    this.asss=this.asss+1;
    console.log(this.asss);
    if (this.asss<this.ass){
      this.mostrarcartauno=false;
        this.mostrarcartados=true;
    }
    else
    {
      if(this.asss==this.ass && this.ass==2){
        this.mostrarcartauno=false;
        this.mostrarcartados=true;
        this.mostrarbtn= false;
      this.mostrarbtnentrar=true;
      }
      else 
        {
          
              console.log("entraste aqui");
              if(this.asss==this.ass && this.ass==3){
                console.log("entrste aqui tambien");
                this.mostrarcartados=false;
                this.mostrarcartatres=true;
                this.mostrarbtn= false;
            this.mostrarbtnentrar=true;
              }
          
          

        

      }
    }
  
  
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
      console.log("checar", this.espaciouno,this.espaciouno2,this.espaciouno3);
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

      if(this.ass==2){
      this.cartaCompleta2.push(this.espaciouno2[0]);
      this.cartaCompleta2.push(this.espaciodos2[0]);
      this.cartaCompleta2.push(this.espaciotres2[0]);
      this.cartaCompleta2.push(this.espaciocuatro2[0]);
      this.cartaCompleta2.push(this.espaciocinco2[0]);
      this.cartaCompleta2.push(this.espacioseis2[0]);
      this.cartaCompleta2.push(this.espaciosiete2[0]);
      this.cartaCompleta2.push(this.espacioocho2[0]);
      this.cartaCompleta2.push(this.espacionueve2[0]);
      this.cartaCompleta2.push(this.espaciodiez2[0]);
      this.cartaCompleta2.push(this.espacioonce2[0]);
      this.cartaCompleta2.push(this.espaciodoce2[0]);
      this.cartaCompleta2.push(this.espaciotrece2[0]);
      this.cartaCompleta2.push(this.espaciocartoce2[0]);
      this.cartaCompleta2.push(this.espacioquince2[0]);
      this.cartaCompleta2.push(this.espaciodieziseis2[0]);

      this.loteriaservice.guardarCartas2(this.cartaCompleta2);
      }
      if(this.ass==3){
        this.cartaCompleta2.push(this.espaciouno2[0]);
        this.cartaCompleta2.push(this.espaciodos2[0]);
        this.cartaCompleta2.push(this.espaciotres2[0]);
        this.cartaCompleta2.push(this.espaciocuatro2[0]);
        this.cartaCompleta2.push(this.espaciocinco2[0]);
        this.cartaCompleta2.push(this.espacioseis2[0]);
        this.cartaCompleta2.push(this.espaciosiete2[0]);
        this.cartaCompleta2.push(this.espacioocho2[0]);
        this.cartaCompleta2.push(this.espacionueve2[0]);
        this.cartaCompleta2.push(this.espaciodiez2[0]);
        this.cartaCompleta2.push(this.espacioonce2[0]);
        this.cartaCompleta2.push(this.espaciodoce2[0]);
        this.cartaCompleta2.push(this.espaciotrece2[0]);
        this.cartaCompleta2.push(this.espaciocartoce2[0]);
        this.cartaCompleta2.push(this.espacioquince2[0]);
        this.cartaCompleta2.push(this.espaciodieziseis2[0]);
  
        this.loteriaservice.guardarCartas2(this.cartaCompleta2);

      this.cartaCompleta3.push(this.espaciouno3[0]);
      this.cartaCompleta3.push(this.espaciodos3[0]);
      this.cartaCompleta3.push(this.espaciotres3[0]);
      this.cartaCompleta3.push(this.espaciocuatro3[0]);
      this.cartaCompleta3.push(this.espaciocinco3[0]);
      this.cartaCompleta3.push(this.espacioseis3[0]);
      this.cartaCompleta3.push(this.espaciosiete3[0]);
      this.cartaCompleta3.push(this.espacioocho3[0]);
      this.cartaCompleta3.push(this.espacionueve3[0]);
      this.cartaCompleta3.push(this.espaciodiez3[0]);
      this.cartaCompleta3.push(this.espacioonce3[0]);
      this.cartaCompleta3.push(this.espaciodoce3[0]);
      this.cartaCompleta3.push(this.espaciotrece3[0]);
      this.cartaCompleta3.push(this.espaciocartoce3[0]);
      this.cartaCompleta3.push(this.espacioquince3[0]);
      this.cartaCompleta3.push(this.espaciodieziseis3[0]);

      this.loteriaservice.guardarCartas3(this.cartaCompleta3);
      }
      console.log("asdasd",this.cartaCompleta2, this.cartaCompleta3);
      this.router.navigateByUrl('juego/partida')
    }


  }

  cartaaleatoria(){ 

    

   

    

    var cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54];

    
    if(this.asss==1){
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
    this.espaciodoce = [];
    this.espaciotrece = [];
    this.espaciocartoce = [];
    this.espacioquince = [];
    this.espaciodieziseis = [];

    var ran = Math.floor(Math.random() * cartas.length);
    this.espaciouno.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log("uno",ran, this.espaciouno, this.asss);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodos.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciotres.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciocuatro.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciocinco.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioseis.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciosiete.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioocho.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacionueve.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodiez.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioonce.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodoce.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciotrece.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length) ;
    this.espaciocartoce.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioquince.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodieziseis.push(cartas[ran]);
    cartas.splice(ran, 1);
    }
///////////////////////////////////////////////////77
    if(this.asss==2){
      this.espaciouno2 = [];
      this.espaciodos2 = [];
      this.espaciotres2 = [];
      this.espaciocuatro2 = [];
      this.espaciocinco2 = [];
      this.espacioseis2 = [];
      this.espaciosiete2 = [];
      this.espacioocho2 = [];
      this.espacionueve2 = [];
      this.espaciodiez2 = [];
      this.espacioonce2 = [];
      this.espaciodoce2 = [];
      this.espaciotrece2 = [];
      this.espaciocartoce2 = [];
      this.espacioquince2 = [];
      this.espaciodieziseis2 = [];
      var cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54];

      var ran = Math.floor(Math.random() * cartas.length);
    this.espaciouno2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log("dos",ran, this.espaciouno2, this.asss);


    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodos2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciotres2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciocuatro2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciocinco2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioseis2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciosiete2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioocho2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacionueve2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodiez2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioonce2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodoce2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciotrece2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length) ;
    this.espaciocartoce2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioquince2.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodieziseis2.push(cartas[ran]);
    cartas.splice(ran, 1);
    }
//////////////////////////////////////////////////////////
    if(this.asss==3){
      this.espaciouno3 = [];
    this.espaciodos3 = [];
    this.espaciotres3 = [];
    this.espaciocuatro3 = [];
    this.espaciocinco3 = [];
    this.espacioseis3 = [];
    this.espaciosiete3 = [];
    this.espacioocho3 = [];
    this.espacionueve3 = [];
    this.espaciodiez3 = [];
    this.espacioonce3 = [];
    this.espaciodoce3 = [];
    this.espaciotrece3 = [];
    this.espaciocartoce3 = [];
    this.espacioquince3 = [];
    this.espaciodieziseis3 = [];
      var cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54];

      var ran = Math.floor(Math.random() * cartas.length);
    this.espaciouno3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodos3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciotres3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciocuatro3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciocinco3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioseis3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciosiete3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioocho3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacionueve3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodiez3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioonce3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodoce3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciotrece3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length) ;
    this.espaciocartoce3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espacioquince3.push(cartas[ran]);
    cartas.splice(ran, 1);
    console.log(ran);

    ran = Math.floor(Math.random() * cartas.length);
    this.espaciodieziseis3.push(cartas[ran]);
    cartas.splice(ran, 1);

    
    }


    }




}
