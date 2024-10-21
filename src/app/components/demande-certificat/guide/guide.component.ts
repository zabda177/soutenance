/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 05/10/2024 - 07:52:39
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 05/10/2024
    * - Author          : ASUS
    * - Modification    :
**/
import { Component } from '@angular/core';
import { StepperComponent } from "../../ui/stepper/stepper.component";
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { DemandeurComponent } from '../demandeur/demandeur.component';
import { FichierComponent } from '../fichier/fichier.component';
import { RouterModule } from '@angular/router';
import { FichierGuideComponent } from "../fichier-guide/fichier-guide.component";

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CdkStepperModule,
    NgTemplateOutlet,
    CommonModule,
    StepperComponent,
    DemandeurComponent,
    FichierComponent,
    RouterModule, FichierGuideComponent],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {

}
