import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioLoteriaComponent} from "./pages/inicio-loteria/inicio-loteria.component";
import {SalasComponent} from "./pages/salas/salas.component";
import {CrearSalaComponent} from "./pages/crear-sala/crear-sala.component";
import {ElegirCartaComponent} from "./pages/elegir-carta/elegir-carta.component";
import {PartidaComponent} from "./pages/partida/partida.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistrarComponent} from "./pages/registrar/registrar.component";

const routes: Routes = [ 
  { path:'', component:LoginComponent },
  { path:'inicio', component:InicioLoteriaComponent},
  { path:'registrar', component:RegistrarComponent},
  { path:'salas', component:SalasComponent },
  { path:'salas/crear', component:CrearSalaComponent },
  { path:'juego/carta', component:ElegirCartaComponent },
  { path:'juego/partida', component:PartidaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
