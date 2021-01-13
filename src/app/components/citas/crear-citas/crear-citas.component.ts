import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
  })
export class CrearCitasComponent implements OnInit {
  crearCita: FormGroup;
  submit = false;
  loading = false;
  id: string;
  titulo = 'Agregar Cita';
  constructor(
    private fb: FormBuilder,
    private _citaService: CitasService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
    this.crearCita = this.fb.group({
      nombre: ['', Validators.required],
      facultad: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editarCita();
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
      facultad: this.crearCita.value.facultad,
      descripcion: this.crearCita.value.descripcion,
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