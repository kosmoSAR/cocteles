import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoctelesService } from 'src/app/services/cocteles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})

export class DetallesComponent implements OnInit {
  coctel:any;
  idCoctel:any;

  constructor(private _cocteles:CoctelesService, private ruta:ActivatedRoute){
    this.ruta.params.subscribe(params => {    
      this.idCoctel = params['id']; 
    })
  }

  ngOnInit():void {
    this.obtenerCoctel(this.idCoctel);
  }

  obtenerCoctel(id:any){
    this._cocteles.getCoctel(id).subscribe(
      respuesta => { 
        this.coctel = respuesta.drinks[0];               
      }      
    )
  }

}
