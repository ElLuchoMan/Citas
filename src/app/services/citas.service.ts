import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private firestore: AngularFirestore) { }
  agregarCita(empleado: any): Promise<any> {
    return this.firestore.collection('citas').add(empleado);
  }
  getCitas(): Observable<any> {
    return this.firestore.collection('citas', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  eliminarCitas(id: string): Promise<any> {
    return this.firestore.collection('citas').doc(id).delete();
  }
  getCita(id: string): Observable<any> {
    return this.firestore.collection('citas').doc(id).snapshotChanges();
  }
  actualizarCita(id: string, data: any): Promise<any> {
    return this.firestore.collection('citas').doc(id).update(data);
  }
}
