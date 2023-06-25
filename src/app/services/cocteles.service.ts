import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CoctelesService {

  constructor(private http: HttpClient) { }

  getCocteles():Observable<any>{
    const URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
    return this.http.get(URL);
  }

  getCoctel(id:string):Observable<any>{
    const URL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
    return this.http.get(URL2)
  }
}
