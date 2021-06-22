import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { DulcesInterface } from '../../models/dulces';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-list-dulces',
  templateUrl: './list-dulces.component.html',
  styleUrls: ['./list-dulces.component.css'],
  providers: [AuthService]
})
export class ListDulcesComponent implements OnInit {
  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  filterPost = '';

  public userCorreo: string = null;
  public dulce: DulcesInterface = {}
  public dulces: DulcesInterface[];
  ngOnInit(): void {
    this.getListDulces();
    this.getCurrentUser();

  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;
      }
    })
  }
  getListDulces() {
    this.dataApi.getAllDulces().subscribe(dulces => {
      this.dulces = dulces;
    });
  }
  onDeleteDulce(idDulce: string) {
    const confirmacion = confirm("¿Estas seguro de eliminar el producto?");
    if (confirmacion) {
      this.dataApi.deleteDulce(idDulce);
    }
  }
  onPreUpdateDulce(dulce: DulcesInterface) {
    this.dataApi.selectedDulce = Object.assign({}, dulce);
  }
}
