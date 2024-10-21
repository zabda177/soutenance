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
import { StepperComponent } from '../../ui/stepper/stepper.component';
import { FichierPermisComponent } from '../fichier-permis/fichier-permis.component'; // Ajout de CommonModule pour les directives comme *ngIf
import { CdkStepperModule } from '@angular/cdk/stepper';
import { DemandeurComponent } from '../demandeur/demandeur.component';
import { FichierComponent } from '../fichier/fichier.component';
import { RouterModule } from '@angular/router';
import { PersonneMoraleComponent } from '../personne-morale/personne-morale.component';
import { DemandeComponent } from '../../../pages/admin/demande/demande.component';

@Component({
  selector: 'app-peche',
  templateUrl: './peche.component.html',
  standalone: true, // Mode standalone
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StepperComponent,
    FichierPermisComponent,
    CdkStepperModule,
    NgTemplateOutlet,
    DemandeurComponent,
    FichierComponent,
    RouterModule,
    PersonneMoraleComponent,
    DemandeComponent,
  ],
  // Ajout des imports nécessaires
})
export class PecheComponent {
  demandeurForm: FormGroup | undefined;
  personneMoraleForm: FormGroup | undefined;
  typeDemandeur: string = ''; // Variable pour suivre le type sélectionné

  // Méthode pour changer dynamiquement le formulaire en fonction du type de demandeur sélectionné
  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeDemandeur = selectElement.value; // 'physique' ou 'morale'
  }

  permisPecheSubmitted(event: any) {
    console.log(event);
  }
}
