/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 10/10/2024 - 04:23:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'; // Ajout de ReactiveFormsModule
import { CommonModule, NgTemplateOutlet } from '@angular/common';

// Ajout de CommonModule pour les directives comme *ngIf
import { CdkStepperModule } from '@angular/cdk/stepper';

import { RouterModule } from '@angular/router';
import { StepperComponent } from '../../../components/ui/stepper/stepper.component';
import { DemandeurComponent } from '../../../components/demande-certificat/demandeur/demandeur.component';
import { PersonneMoraleComponent } from '../../../components/demande-certificat/personne-morale/personne-morale.component';
import { FichierComponent } from '../../../components/demande-certificat/fichier/fichier.component';

@Component({
  selector: 'app-demande-agrement-custumer',
  templateUrl: './demande-agrement-customer.component.html',
  standalone: true, // Mode standalone
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StepperComponent,
    CdkStepperModule,
    NgTemplateOutlet,
    DemandeurComponent,
    RouterModule,
    PersonneMoraleComponent,
    FichierComponent,
  ],
  // Ajout des imports nécessaires
})
export class DemandeAgrementCustomerComponent {
  demandeurForm: FormGroup | undefined;
  personneMoraleForm: FormGroup | undefined;
  typeDemandeur: string = ''; // Variable pour suivre le type sélectionné

  // Méthode pour changer dynamiquement le formulaire en fonction du type de demandeur sélectionné
  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeDemandeur = selectElement.value; // 'physique' ou 'morale'
  }
}
