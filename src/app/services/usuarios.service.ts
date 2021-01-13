
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }
  agregarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
  }
  getUsuarios(): Observable<any> {
    return this.firestore.collection('usuarios', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  eliminarUsuarios(id: string): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).delete();
  }
  getUsuario(id: string): Observable<any> {
    return this.firestore.collection('usuarios').doc(id).snapshotChanges();
  }
  actualizarUsuarios(id: string, data: any): Promise<any> {
    return this.firestore.collection('usuarios').doc(id).update(data);
  }
}