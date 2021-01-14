import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/services/citas.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { EmpleadoService } from '../../../services/empleados.service';
import { TipoCitaService } from '../../../services/tipo-cita.service';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  usuarios: any[]=[];
  empleados: any[]=[];
  tipocitas: any[]=[];
  crearCita: FormGroup;
  submit = false;
  loading = false;
  id: string;
  titulo = 'Agregar Cita';
  constructor(
    private fb: FormBuilder,
    private _citaService: CitasService,
    private _usuarioService: UsuariosService,
    private _empleadoService: EmpleadoService,
    private _tipoCitasService: TipoCitaService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.crearCita = this.fb.group({
      nombre: [_usuarioService.getUsuario('nombre'), Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      facultad: ['', Validators.required],
      tipocita: ['', Validators.required],
      especialista: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    this.editarCita();
    this.getUsuarios();
    this.getTipoCitas();
    this.getEmpleados();
  }
  private getUsuarios(){
    this.usuarios =[];
    this._usuarioService.getUsuarios().subscribe(data=>{
      data.forEach((element:any)=>{
          this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
     })
    }
    getEmpleados() {
      this.empleados=[];
      this._empleadoService.getEmpleados().subscribe(data => {
        data.forEach((element: any) => {
          this.empleados.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }
    getTipoCitas() {
      this.tipocitas=[];
      this._tipoCitasService.getTipoCitas().subscribe(data => {
        data.forEach((element: any) => {
          this.tipocitas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
      })
    }
  agregarEditarCita() {
    this.submit = true;
    if (this.crearCita.invalid) {
      return;
    } if (this.id === null) {
      this.agregarCita();
    }
    else {
      return;
    }
  }
  agregarCita() {
    const cita: any = {
      nombre: this.crearCita.value.nombre,
      fecha: this.crearCita.value.fecha,
      hora: this.crearCita.value.hora,
      facultad: this.crearCita.value.facultad,
      tipocita: this.crearCita.value.tipocita,
      especialista: this.crearCita.value.especialista,
      fechaCreacion: new Date()
    }
    this.loading = true;
    this._citaService.agregarCita(cita).then(() => {
      this.toastr.success('La cita fue creada con éxito', 'Cita creada');
      this.loading = false;
      this.router.navigate(['/listarCitas']);
    }).catch(error => {
      this.toastr.error('No sé qué pasó xd', 'Error');
      this.loading = false;
    })
  }
  editarCita() {
  }
}