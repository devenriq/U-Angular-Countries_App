import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino:string='Hola mundo'
  thereIsError:boolean = false
  paises:Country[]=[]

  constructor(private paisService: PaisService){}

  buscar(termino:string){
    this.thereIsError=false
    this.termino = termino

    this.paisService.buscarPais(termino)
      .subscribe(paises=>{
        this.paises = paises
        console.log(paises)
      },(err)=>{
        this.thereIsError=true
        this.paises =[]
      })

  }

  sugerencias(termino:string){
    this.thereIsError = false

  }

}

