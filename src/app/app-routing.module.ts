import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { CrearEmpleadosComponent } from './components/empleados/crear-empleados/crear-empleados.component';
import { ListarCitasComponent } from './components/citas/listar-citas/listar-citas.component';
import { CrearCitasComponent } from './components/citas/crear-citas/crear-citas.component';
import { ListarTipoCitasComponent } from './components/tipo-cita/listar-tipo-citas/listar-tipo-citas.component';
import { CrearTipoCitasComponent } from './components/tipo-cita/crear-tipo-citas/crear-tipo-citas.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { CrearUsuariosComponent } from './components/usuarios/crear-usuarios/crear-usuarios.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:'',redirectTo:'listarUsuarios',pathMatch:'full'},
  {path: 'listarEmpleados', component: ListarEmpleadosComponent},
  {path: 'crearEmpleados', component: CrearEmpleadosComponent},
  {path: 'editarEmpleados/:id', component: CrearEmpleadosComponent},
  {path: 'listarCitas', component: ListarCitasComponent},
  {path: 'crearCitas', component: CrearCitasComponent},
  {path: 'listarTipoCitas', component: ListarTipoCitasComponent},
  {path: 'crearTipoCitas', component: CrearTipoCitasComponent},
  {path: 'editarTipoCitas/:id', component: CrearTipoCitasComponent},
  {path: 'listarUsuarios', component: ListarUsuariosComponent},
  {path: 'crearUsuarios', component: CrearUsuariosComponent},
  {path: 'editarUsuarios/:id', component: CrearUsuariosComponent},
  {path: 'home',component: HomeComponent},
  {path:'**',redirectTo:'listarUsuarios',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
