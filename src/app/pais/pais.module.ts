import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PorCapitalComponent,
    PorPaisComponent,
    VerPaisComponent,
    PorRegionComponent
  ]
})
export class PaisModule { }
