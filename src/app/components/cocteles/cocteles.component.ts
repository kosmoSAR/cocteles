import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';

@Component({
  selector: 'app-cocteles',
  templateUrl: './cocteles.component.html',
  styleUrls: ['./cocteles.component.css']
})
export class CoctelesComponent implements OnInit {

  listadoCocteles:any[] = [];
  @Output() id = new EventEmitter<any>()

  constructor(private _cocteles:CoctelesService){}

  ngOnInit():void {
    this.obtenerCocteles()
  }

  obtenerCocteles(){
    this._cocteles.getCocteles().subscribe(
      respuesta => {
        this.listadoCocteles = respuesta.drinks.slice(1,10);         
      }      
    )
  }

  mandarId(idCoctel:string){ 
    this.id.emit(idCoctel);
  }

}
