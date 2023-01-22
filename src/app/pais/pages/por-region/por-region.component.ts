import { Component } from '@angular/core';
import { Country} from '../../interfaces/pais.interface';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {

  thereIsError:boolean=false
  termino:string = 'hola'
  regiones:Country[]=[]

  constructor(private regionService: RegionService){}

  buscar(termino:string){
    this.thereIsError=false
    this.termino = termino

    this.regionService.buscarRegion(termino)
      .subscribe(regiones=>{
        this.regiones= regiones
        console.log(regiones)
      },(err)=>{
        this.thereIsError=true
        this.regiones=[]
      })
  }


  sugerencias(termino:string){}
}
