import { Component, OnInit } from '@angular/core';
import { TipoCitaService } from '../../../services/tipo-cita.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-tipo-citas',
  templateUrl: './listar-tipo-citas.component.html',
  styleUrls: ['./listar-tipo-citas.component.css']
})
export class ListarTipoCitasComponent implements OnInit {
  tipocitas: any[] = [];
  constructor(private _tipoCitasService: TipoCitaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getTipoCitas();
  }
  getTipoCitas() {
    this._tipoCitasService.getTipoCitas().subscribe(data => {
      data.forEach((element: any) => {
        this.tipocitas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  eliminarTipoCita(id: string) {
    this._tipoCitasService.elimnarTipoCita(id).then(() => {
      this.toastr.error('Tipo Cita eliminado con éxito', 'Tipo cita eliminado');
    })
  }

}
