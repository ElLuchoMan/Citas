import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InfoService } from '../../../services/info.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  crearUsuario: FormGroup;
  submit = false;
  loading = false;
  facultades: any[] = [];
  carreras: any[] = [];

  id: string | null;
  titulo = 'Agregar Usuario';
  constructor(private fb: FormBuilder,
    private _usuarioService: UsuariosService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute,
    private _infoServices: InfoService,) {
    this.crearUsuario = this.fb.group({
      identificacion: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: [''],
      apellido1: ['', Validators.required],
      apellido2: [''],
      telefono: ['', Validators.required],
      facultad: ['', Validators.required],
      proyectocurricular: ['', Validators.required],
      sede: ['', Validators.required],
      // historiaclinica: [''],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarUsuario();
    this.getFacultades();
    // this.getSedes();
  }
  getFacultades() {
    this._infoServices.getFacultad().subscribe(data => {
      this.facultades = [];
      data.forEach((element: any) => {
        this.facultades.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });
    })
  }
  getSedes(){
    if (this.facultades != null){
      this._infoServices.getSede(this.id).subscribe(data => {
         this.crearUsuario.setValue({
          sede: data.payload.data()['carrera'],
        })
      })
    }
      }

  agregarEditarUsuario() {
    console.log(this.crearUsuario);
    this.submit = true;
    if (this.crearUsuario.invalid) {
      return;
    }
    if (this.id === null) {
      this.agregarUsuario();
    }
    else {
      this.editarUsuarios();
    }
  }
  editarUsuarios() {
    const usuario: any = {
      identificacion: this.crearUsuario.value.identificacion,
      nombre1: this.crearUsuario.value.nombre1,
      nombre2: this.crearUsuario.value.nombre2,
      apellido1: this.crearUsuario.value.apellido1,
      apellido2: this.crearUsuario.value.apellido2,
      telefono: this.crearUsuario.value.telefono,
      facultad: this.crearUsuario.value.facultad,
      proyectocurricular: this.crearUsuario.value.proyectocurricular,
      sede: this.crearUsuario.value.sede,
      // historiaclinica: this.crearUsuario.value.historiaclinica,
      fechaActualizacion: new Date()
    }
    this._usuarioService.actualizarUsuarios(this.id, usuario).then(() => {
      this.loading = false;
      this.toastr.success('El usuario fue actualizado con éxito', 'Usuario actualizado');
      this.router.navigate(['/listarUsuarios']);
    })
  }
  agregarUsuario() {
    const usuario: any = {
      identificacion: this.crearUsuario.value.identificacion,
      nombre1: this.crearUsuario.value.nombre1,
      nombre2: this.crearUsuario.value.nombre2,
      apellido1: this.crearUsuario.value.apellido1,
      apellido2: this.crearUsuario.value.apellido2,
      telefono: this.crearUsuario.value.telefono,
      facultad: this.crearUsuario.value.facultad,
      proyectocurricular: this.crearUsuario.value.proyectocurricular,
      sede: this.crearUsuario.value.sede,
      // historiaclinica: this.crearUsuario.value.historiaclinica,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._usuarioService.agregarUsuario(usuario).then(() => {
      this.toastr.success('El Usuario fue registrado con éxito', 'Usuario registrado')
      this.loading = false;
      this.router.navigate(['/listarUsuarios']);
    }).catch(error => {
      this.toastr.error('No sé qué pasó xd', 'Error');
      this.loading = false;
    })
  }
  editarUsuario() {
    if (this.id != null) {
      this.titulo = "Editar Usuario";
      this.loading = true;
      this._usuarioService.getUsuario(this.id).subscribe(data => {
        this.loading = false;
        this.crearUsuario.setValue({
          identificacion: data.payload.data()['identificacion'],
          nombre1: data.payload.data()['nombre1'],
          nombre2: data.payload.data()['nombre2'],
          apellido1: data.payload.data()['apellido1'],
          apellido2: data.payload.data()['apellido2'],
          telefono: data.payload.data()['telefono'],
          facultad: data.payload.data()['facultad'],
          proyectocurricular: data.payload.data()['proyectocurricular'],
          sede: data.payload.data()['sede'],
          //historiaclinica: data.payload.data()['historiaclinica']
        })
      })
    }
  }


}
