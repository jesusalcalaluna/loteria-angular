import { Component, OnInit } from '@angular/core';
import { LoteriaService } from 'src/app/services/loteria.service';

@Component({
  selector: 'app-inicio-loteria',
  templateUrl: './inicio-loteria.component.html',
  styleUrls: ['./inicio-loteria.component.css']
})
export class InicioLoteriaComponent implements OnInit {

  data:any;

  constructor(private servisLoteria:LoteriaService) {
    this.servisLoteria.getUsers().subscribe((resp:any)=>{
      console.log(resp);
      this.data = resp.data["users"];
    });
   }

  ngOnInit(): void {
  }

}
