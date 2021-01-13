import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoCitaService } from '../../../services/tipo-cita.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crear-tipo-citas',
  templateUrl: './crear-tipo-citas.component.html',
  styleUrls: ['./crear-tipo-citas.component.css']
})
export class CrearTipoCitasComponent implements OnInit {
crearTipoCita: FormGroup;
submit=false;
loading=false;
id: string;
titulo='Agregar Tipo Cita';
  constructor(
    private fb: FormBuilder,
    private _tipoCitaService: TipoCitaService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {
      this.crearTipoCita=this.fb.group({
      nombre: ['',Validators.required],
      facultad:['',Validators.required],
      descripcion:['',Validators.required]
      })
      this.id = this.aRoute.snapshot.paramMap.get('id');
     }

  ngOnInit():void {
    this.editarTipoCita();
  }
  agregarEditarTipoCita(){
    this.submit=true;
    if(this.crearTipoCita.invalid){
      return;
    }if(this.id===null){
      this.agregarTipoCita();
    }
    else{
     return;
    }
  }
   agregarTipoCita(){
    const tipoCita: any={
      nombre: this.crearTipoCita.value.nombre,
      facultad: this.crearTipoCita.value.facultad,
      descripcion: this.crearTipoCita.value.descripcion,
      fechaCreacion: new Date()
    }
    this.loading=true;
    this._tipoCitaService.agregarTipoCita(tipoCita).then(()=>{
      this.toastr.success('El tipo de cita fue creado con éxito','Tipo Cita creado');
    this.loading=false;
    this.router.navigate(['/listarTipoCitas']);
    }).catch(error=>{
      this.toastr.error('No sé qué pasó xd','Error');
    this.loading=false;
    })
  }
editarTipoCita(){

}
}
