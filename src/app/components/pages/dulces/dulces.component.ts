import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { DulcesInterface } from '../../../models/dulces';


@Component({
  selector: 'app-dulces',
  templateUrl: './dulces.component.html',
  styleUrls: ['./dulces.component.css']
})
export class DulcesComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  public dulces = [];
  public dulce = '';
  public dulce2: DulcesInterface = {}
  public dulces2: DulcesInterface[];
  calidad = '';
  personasMax = '';
  reservada = '';
  codigo = '';
  reservadaPor = '';
  ngOnInit() {
    this.dataApi.getAllDulces().subscribe(dulces => {
      this.dulces = dulces;
      console.log(this.dulces);
      
      if (this.dulces.length == 0) {
        window.alert("No se encuentran dulces disponibles, intentelo mas tarde")
        this.router.navigate(['']);

      }
    });

  }
  onPreUpdateDulce(dulce2: DulcesInterface) {
    console.log("Toque");
    this.dataApi.selectedDulce = Object.assign({}, dulce2);
  }


}
