import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

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
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';


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
    NavbarComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
