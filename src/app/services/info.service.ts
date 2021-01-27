import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private firestore : AngularFirestore ) {}
getFacultad():Observable<any>{
  return this.firestore.collection('facultades').snapshotChanges();
}
getSede(id:string):Observable<any>{
  return this.firestore.collection('facultades').doc(id).snapshotChanges();
}

}
