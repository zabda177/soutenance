/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 04/10/2024 - 16:30:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepperComponent } from '../../ui/stepper/stepper.component';
import { DemandeurComponent } from '../demandeur/demandeur.component';
import { MagasinComponent } from '../magasin/magasin.component';
import { PersonneQualifierComponent } from '../personne-qualifier/personne-qualifier.component';
import { FichierComponent } from '../fichier/fichier.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-demande-licence',
  standalone: true,
  imports: [
    CdkStepperModule,
    CommonModule,
    StepperComponent,
    DemandeurComponent,
    MagasinComponent,
    PersonneQualifierComponent,
    FichierComponent,
    RouterModule,
  ],
  templateUrl: './demande-licence.component.html',
  styleUrl: './demande-licence.component.css',
})
export class DemandeLicenceComponent {}
