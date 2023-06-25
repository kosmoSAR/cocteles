import { Component, Input, OnInit } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  coctel:any;

  constructor(private _cocteles:CoctelesService){
  }

  ngOnInit():void {
    this.obtenerCoctel();
  }

  obtenerCoctel(){
    this._cocteles.getCoctel("14598").subscribe(
      respuesta => { 
        this.coctel = respuesta.drinks[0];               
      }      
    )
  }

}
