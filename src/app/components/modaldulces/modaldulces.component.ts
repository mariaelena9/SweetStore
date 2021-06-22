import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import {  DulcesInterface } from '../../models/dulces';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ListDulcesComponent } from '../list-dulces/list-dulces.component';
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-modaldulces',
  templateUrl: './modaldulces.component.html',
  styleUrls: ['./modaldulces.component.css'],
  providers: [AuthService]
})
export class ModaldulcesComponent implements OnInit {
  public hijo: ListDulcesComponent;
  constructor(public dataApi: DataApiService, public authService: AuthService) { }
  public userCorreo: string = null;
  @ViewChild('btnClose') btnClose: ElementRef;
  @Input() userUid: string;
  @Input() correo_registro: string;
  ngOnInit(): void {
    this.getCurrentUser();
  }
  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        this.userCorreo = auth.email;

      }
    })
  }
  onSaveDulce(dulceForm: NgForm): void {
    if (dulceForm.value.Id == null) {
      // New 
      console.log("prueba 1");
      
      dulceForm.value.correo_registro = this.userCorreo;
      console.log("prueba 2");
      this.dataApi.addDulces(dulceForm.value);
      console.log("prueba 3");
    } else {
      // Update
      this.dataApi.updateDulces(dulceForm.value);
    }
    dulceForm.resetForm();
    this.btnClose.nativeElement.click();
  }
  onPreUpdateDulce(dulce: DulcesInterface) {
    this.dataApi.selectedDulce = Object.assign({}, dulce);
  }
}
