import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { InicioLoteriaComponent } from './pages/inicio-loteria/inicio-loteria.component';
import { SalasComponent } from './pages/salas/salas.component';
import { CrearSalaComponent } from './pages/crear-sala/crear-sala.component';
import { ElegirCartaComponent } from './pages/elegir-carta/elegir-carta.component';

//modulos de drag and drop
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PartidaComponent } from './pages/partida/partida.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioLoteriaComponent,
    SalasComponent,
    CrearSalaComponent,
    ElegirCartaComponent,
    PartidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
