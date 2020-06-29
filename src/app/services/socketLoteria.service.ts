import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

export class socketLoteriaService {

  url:string = "http://localhost:3333/"
  socket;

  constructor () {}

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  public joinRoom(room, players){

    this.socket.emit('join_room', {room, players});
  }

  public leaveRoom(room){
    this.socket.emit('leave_room', room);
  }

  public obtenerJugadores(){
    return Observable.create((observer) => {
      this.socket.on('new-player', (players) => {
        observer.next(players);
      });
    });
  }

  public obtenerbaraja(room){


    return Observable.create((observer) => {
      this.socket.on('play', (data) => {
        observer.next(data);
      });
    });

  }

  public empezarJuego(room){
    this.socket.emit('play', room);
  }


  public detener(room){
    this.socket.emit('stop', room)
  }

  public ganoloteria(room:string, player:string){
    this.socket.emit('loteria', {room, player});

  }
  public ganocentro(room:string, player:string){
    this.socket.emit('centro', {room, player});

  }
  public ganollena(room:string, player:string){
    this.socket.emit('llena', {room, player});

  }

  public ganadorloteria(){
    return Observable.create((observer) => {
      this.socket.on('loteria', (data) => {
        observer.next(data);
      });
    });
  }

  public ganadorcentro(){
    return Observable.create((observer) => {
      this.socket.on('centro', (data) => {
        observer.next(data);
      });
    });
  }

  public ganadorllena(){
    return Observable.create((observer) => {
      this.socket.on('llena', (data) => {
        observer.next(data);
      });
    });
  }

}
