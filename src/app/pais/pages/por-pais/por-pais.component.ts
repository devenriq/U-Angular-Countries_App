import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  termino:string='Hola mundo'
  thereIsError:boolean = false

  constructor(private paisService: PaisService){}

  buscar(){
    this.thereIsError=false
    this.termino
    this.paisService.buscarPais(this.termino)
      .subscribe(resp=>{
        console.log(resp)
      },(err)=>{
        this.thereIsError=true
      })

  }
}

