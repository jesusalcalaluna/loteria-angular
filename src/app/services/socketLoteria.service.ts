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

    this.socket.emit('play', room);
    return Observable.create((observer) => {
      this.socket.on('play', (data) => {
        observer.next(data);
      });
    });

  }


  public detener(){
    this.socket.emit('pausa', 'pausa');
  }

  public resumen(){
    this.socket.emit('resume', 'seguir');
  }

}
