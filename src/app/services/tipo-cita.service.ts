import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoCitaService {

  constructor(private firestore: AngularFirestore,) { }
  agregarTipoCita(tipoCita: any): Promise<any> {
    return this.firestore.collection('tipoCita').add(tipoCita);
  }
  getTipoCitas(): Observable<any> {
    return this.firestore.collection('tipoCita', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  elimnarTipoCita(id: string) {
    return this.firestore.collection('tipoCita').doc(id).delete();
  }
}
