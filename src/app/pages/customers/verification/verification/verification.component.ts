/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 01/12/2024 - 03:57:51
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/12/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { DemandeServiceService } from './../../../../components/demande-certificat/service/demande-service.service';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandeAgrementCustomerComponent } from '../../demande-agrement-customer/demande-agrement-customer.component';
import { DemandeurComponent } from '../../../../components/demande-certificat/demandeur/demandeur.component';
import { FichierComponent } from '../../../../components/demande-certificat/fichier/fichier.component';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
    DemandeAgrementCustomerComponent,
    DemandeurComponent,
    FichierComponent,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css',
  providers: [HttpClientModule, DemandeServiceService],
})
export class VerificationComponent {
  demandeSoumise: any;
  piece: any;
  currentStep: number = 0;

  demandeServiceService: DemandeServiceService = inject(DemandeServiceService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const numeroDemande =
      +this.route.snapshot.queryParamMap.get('numeroDemande')!;
    const codeDemande = this.route.snapshot.queryParamMap.get('codeDemande');

    if (numeroDemande !== null && codeDemande) {
      this.demandeServiceService
        .getDemandeDetailsVerification(numeroDemande, codeDemande)
        .subscribe(
          (response) => {
            this.demandeSoumise = response;
            console.log('Données récupérées:', this.demandeSoumise);

            // Assigner les magasins et pièces une fois les données récupérées
            if (this.demandeSoumise) {
              this.piece = this.demandeSoumise.piece || [];
            }
          },
          (error) => {
            console.error(
              'Erreur lors de la récupération des détails de la demande',
              error
            );
          }
        );
    }
  }

  nextStep(): void {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
