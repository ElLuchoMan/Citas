import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearEmpleadosComponent } from './components/empleados/crear-empleados/crear-empleados.component';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { CrearCitasComponent } from './components/citas/crear-citas/crear-citas.component';
import { ListarCitasComponent } from './components/citas/listar-citas/listar-citas.component';
import { CrearTipoCitasComponent } from './components/tipo-cita/crear-tipo-citas/crear-tipo-citas.component';
import { ListarTipoCitasComponent } from './components/tipo-cita/listar-tipo-citas/listar-tipo-citas.component';
import { CrearUsuariosComponent } from './components/usuarios/crear-usuarios/crear-usuarios.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearEmpleadosComponent,
    ListarEmpleadosComponent,
    CrearCitasComponent,
    ListarCitasComponent,
    CrearTipoCitasComponent,
    ListarTipoCitasComponent,
    CrearUsuariosComponent,
    ListarUsuariosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
