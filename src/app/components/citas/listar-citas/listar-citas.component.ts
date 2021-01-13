import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

  citas: any[]=[];
  constructor(private _CitasService: CitasService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getTipoCitas();
  }
  getTipoCitas(){
    this._CitasService.getCitas().subscribe(data=>{
      data.forEach((element:any)=>{
        this.citas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  eliminarTipoCita(id: string){
    this._CitasService.eliminarCitas(id).then(()=>{
      this.toastr.error('Tipo Cita eliminado con éxito','Tipo cita eliminado');
    })
  }

}
