import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  cargando = true;
  constructor(public _usuarioService: UsuariosService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.usuarios=[];
      data.forEach((element: any) => {
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });

    })
  }
  eliminarUsuario(id: string) {
    this._usuarioService.eliminarUsuarios(id).then(() => {
      this.toastr.error('Empleado Eliminado', 'El empleado se eliminó con éxito');
    }).catch(error => {
      this.toastr.error('Error', 'No sé qué pasó xd');
    })
  }

}
