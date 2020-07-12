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
import {FormsModule} from "@angular/forms";
import {socketLoteriaService} from "./services/socketLoteria.service";
import { LoginComponent } from './pages/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { NavbarComponent } from './navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    InicioLoteriaComponent,
    SalasComponent,
    CrearSalaComponent,
    ElegirCartaComponent,
    PartidaComponent,
    LoginComponent,
    RegistrarComponent,
    NavbarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [
    socketLoteriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
