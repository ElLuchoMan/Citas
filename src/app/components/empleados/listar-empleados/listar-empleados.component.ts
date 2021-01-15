import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmpleadoService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  empleados: any[] = [];
  datasource: any[]=[];
  displayedColumns = ['identificacion', 'nombre','apellidos','especialidad','sede', 'telefono','acciones'];

  constructor(private _empleadoService: EmpleadoService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getEmpleados();
  }
  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados=[];
      this.datasource=this.empleados;
      data.forEach((element: any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }
  eliminarEmpleado(id: string) {
    this._empleadoService.eliminarEmpleados(id).then(() => {
      this.toastr.error('Empleado eliminado', 'El empleado se eliminó con éxito', { positionClass: "toast-bottom-right" });

    }).catch(error => {
      this.toastr.error('Error', 'No sé qué pasó xd', { positionClass: "toast-bottom-right" });
    })
  }

}
