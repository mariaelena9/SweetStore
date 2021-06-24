import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { DulcesInterface } from '../models/dulces';
import { map } from 'rxjs/operators';
import { firestore } from 'firebase/app';'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  private dulces: Observable<DulcesInterface[]>;
  private dulcesCollection: AngularFirestoreCollection<DulcesInterface>;
  private dulce: Observable<DulcesInterface>;
  private dulceDoc: AngularFirestoreDocument<DulcesInterface>;
  public selectedDulce: DulcesInterface = { Id: null };


  constructor(private afs: AngularFirestore) {

    this.dulcesCollection = afs.collection<DulcesInterface>('dulces')
    this.dulces = this.dulcesCollection.valueChanges();

    this.ngOnInit();
  }

  ngOnInit() {
  }
  //Dulces*************************************************
  addDulces(dulce: DulcesInterface): void {   
    // dulce.Id=null; 
    this.dulcesCollection.add(dulce);    
  }
  getAllDulces() {
    return this.dulces = this.dulcesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DulcesInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getDulce(idDulce: string) {
    this.dulceDoc = this.afs.doc<DulcesInterface>(`dulces/${idDulce}`);
    return this.dulce = this.dulceDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists == false) {
        return null;
      } else {
        const data = action.payload.data() as DulcesInterface;
        data.Id = action.payload.id;
        return data;
      }
    }));
  }
  getDulces() {
    return this.dulces = this.dulcesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as DulcesInterface;
          data.Id = action.payload.doc.id;
          return data;
        });
      }));
  }
  updateDulces(dulce: DulcesInterface): void {
    let idDulce = dulce.Id;
    this.dulceDoc = this.afs.doc<DulcesInterface>(`dulces/${idDulce}`);
    this.dulceDoc.update(dulce);
  }
  deleteDulce(idDulce: string): void {
    this.dulceDoc = this.afs.doc<DulcesInterface>(`dulces/${idDulce}`);
    this.dulceDoc.delete();
  }
}
