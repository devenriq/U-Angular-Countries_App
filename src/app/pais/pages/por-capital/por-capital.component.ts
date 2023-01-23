import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string='hola capitales'
  thereIsError = false
  capitales:Country[]=[]

  constructor(private capitalService: CapitalService){}

  buscar(termino:string){
    this.thereIsError=false
    this.termino = termino

    this.capitalService.buscarCapital(termino)
      .subscribe(capitales=>{
        this.capitales = capitales
        console.log(capitales)
      },(err)=>{
        this.thereIsError=true
        this.capitales=[]
      })
  }

  sugerencias(termino:string){
    this.thereIsError = false
  }
}
