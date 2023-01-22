import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { Regions } from '../interfaces/region.interface';


@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrlRegion: string='https://restcountries.com/v3.1/'
  constructor(private http: HttpClient) { }

  buscarRegion(termino:string):Observable<Country[]>{
    //TODO buscar el enlace en postman

    const url = `${this.apiUrlRegion}/region/${termino}`

    return this.http.get<Country[]>(url)
  }

}
