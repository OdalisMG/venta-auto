import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen = true;
  filtro:string = "";

  @Input() valor:string = '';
  
  constructor() { }

  ngOnInit() {
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  public listavehiculos: Array<any> = [
    {"codigo": "A001","marca": "FORD", "modelo":"RANGER-6","color":"negro","kilometraje": "45000","precio":"12000" ,"foto": null,"anio":2022,"calificacion":5},
    {"codigo": "A001","marca": "FORD", "modelo":"RANGER-2","color":"negro","kilometraje": "45000","precio":"12000" ,"foto": null,"anio":2022,"calificacion":5},
    {"codigo": "A001","marca": "FORD", "modelo":"RANGER-5","color":"negro","kilometraje": "45000","precio":"12000" ,"foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_11eb957fb39b4b45be7558197979a0e9.jpg","anio":2022,"calificacion":5},
    {"codigo": "A001","marca": "FORD", "modelo":"RANGER","color":"negro","kilometraje": "45000","precio":"12000" ,"foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_11eb957fb39b4b45be7558197979a0e9.jpg","anio":2022,"calificacion":5},
    {"codigo": "A001","marca": "FORD", "modelo":"RANGER","color":"negro","kilometraje": "45000","precio":"12000" ,"foto":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_11eb957fb39b4b45be7558197979a0e9.jpg","anio":2022,"calificacion":5}
  
  ]

}
