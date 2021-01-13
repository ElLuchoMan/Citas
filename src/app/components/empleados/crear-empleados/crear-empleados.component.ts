import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crear-empleados',
  templateUrl: './crear-empleados.component.html',
  styleUrls: ['./crear-empleados.component.css']
})
export class CrearEmpleadosComponent implements OnInit {
  crearEmpleado: FormGroup;
  submit = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Empelado'
  constructor(private fb: FormBuilder,
    private _empleadoservice: EmpleadoService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.crearEmpleado = this.fb.group({
      identificacion: ['', Validators.required],
      nombre1: ['', Validators.required],
      nombre2: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      especialidad: ['', Validators.required],
      sede: ['', Validators.required],
      telefono: ['', Validators.required],

    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarEmpleado();
  }
  agregarEditarEmpleado() {
    this.submit = true;
    if (this.crearEmpleado.invalid) {
      return;
    }
    if (this.id === null) {
      this.agregarEmpleado();
    } else {
      this.editarEmpleados();
    }
  }
  editarEmpleados() {
    const empleado: any = {
      identificacion: this.crearEmpleado.value.identificacion,
      nombre1: this.crearEmpleado.value.nombre1,
      nombre2: this.crearEmpleado.value.nombre2,
      apellido1: this.crearEmpleado.value.apellido1,
      apellido2: this.crearEmpleado.value.apellido2,
      especialidad: this.crearEmpleado.value.especialidad,
      sede: this.crearEmpleado.value.sede,
      telefono: this.crearEmpleado.value.telefono,
      fechaActualizacion: new Date()
    }
    this._empleadoservice.actualizarEmpleado(this.id, empleado).then(() => {
      this.loading = false;

      this.loading = true;
      this.toastr.success('El empleado fue actualizado con exito', 'Empleado modificado');
      this.router.navigate(['/listarEmpleados']);
    })
  }
  agregarEmpleado() {
    const empleado: any = {
      identificacion: this.crearEmpleado.value.identificacion,
      nombre1: this.crearEmpleado.value.nombre1,
      nombre2: this.crearEmpleado.value.nombre2,
      apellido1: this.crearEmpleado.value.apellido1,
      apellido2: this.crearEmpleado.value.apellido2,
      especialidad: this.crearEmpleado.value.especialidad,
      sede: this.crearEmpleado.value.sede,
      telefono: this.crearEmpleado.value.telefono,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._empleadoservice.agregarEmpleado(empleado).then(() => {
      this.toastr.success('El empleado fue registrado con exito', 'Empleado registrado');
      this.loading = false;
      this.router.navigate(['/listarEmpledos']);
    }).catch(error => {
      this.toastr.error('No sé qué pasó xd', 'Error');
      this.loading = false;
    })
  }
  editarEmpleado() {
    if (this.id != null) {
      this.titulo = "Editar Empelado";
      this.loading = true;
      this._empleadoservice.getEmpleado(this.id).subscribe(data => {
        this.loading = false;
        this.crearEmpleado.setValue({
          identificacion: data.payload.data()['identificacion'],
          nombre1: data.payload.data()['nombre1'],
          nombre2: data.payload.data()['nombre2'],
          apellido1: data.payload.data()['apellido1'],
          apellido2: data.payload.data()['apellido2'],
          especialidad: data.payload.data()['especialidad'],
          sede: data.payload.data()['sede'],
          telefono: data.payload.data()['telefono'],

        })
      })
    }
  }
}
