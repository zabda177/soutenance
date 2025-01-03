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
import { HttpErrorResponse } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { StepperComponent } from '../../../components/ui/stepper/stepper.component';
import { DemandeurComponent } from '../../../components/demande-certificat/demandeur/demandeur.component';
import { PersonneMoraleComponent } from '../../../components/demande-certificat/personne-morale/personne-morale.component';
import { FichierComponent } from '../../../components/demande-certificat/fichier/fichier.component';
import { FichierPermisComponent } from '../../../components/demande-certificat/fichier-permis/fichier-permis.component';
import { FichierGuideComponent } from '../../../components/demande-certificat/fichier-guide/fichier-guide.component';
import { FichierCommercialeComponent } from '../../../components/demande-certificat/fichier-commerciale/fichier-commerciale.component';
import { FichierConcessionComponent } from '../../../components/demande-certificat/fichier-concession/fichier-concession.component';
import { DemandeServiceService } from '../../../components/demande-certificat/service/demande-service.service';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { response } from 'express';
import { PieceJointeService } from '../../../components/demande-certificat/service/piece-jointe.service';
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
    FichierPermisComponent,
    FichierGuideComponent,
    FichierCommercialeComponent,
    FichierConcessionComponent, HttpClientModule
  ],
  providers: [
    DemandeServiceService]

  // Ajout des imports nécessaires
})
export class DemandeAgrementCustomerComponent {
  demandeurForm: FormGroup | undefined;
  personneMoraleForm: FormGroup | undefined;
  typeDemandeur: string = ''; // Variable pour suivre le type sélectionné
  typeDemande: string = '';
  fichierData: any[] = [];
  demandeurData: any;
  demandesData: any;
  personneMoraleData: any;
  selectedFiles: File[] = [];

  constructor(private demandeServiceService: DemandeServiceService,
    private pieceJointeService: PieceJointeService
  ) { }






  // Méthode pour changer dynamiquement le formulaire en fonction du type de demandeur sélectionné
  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeDemandeur = selectElement.value; // 'physique' ou 'morale'
    console.log('Type de demandeur sélectionné :', this.typeDemandeur);

  }

  ontypeDemandeChange(typeDemande: string) {
    this.typeDemande = typeDemande; // Met à jour automatiquement le composant à afficher
    this.demandesData = event;
    console.log('Données typeDemande :', this.typeDemande);
  }

  etablissementPersonneMoraleEvent(event: any) {
    this.personneMoraleData = event;
    //console.log('Donnée personne morale ', event);
  }
  etablissementDemandeurEvent(event: any) {
    this.demandeurData = event;
    //console.log('Donnée Demandeur', event);
  }
  permisPecheSubmitted(event: any) {
    this.fichierData = event;
    //console.log('permisPecheSubmitted donnée fichier envoyée => ', event);
  }
  guideSubmitted(event: any) {
    this.fichierData = event;
    //console.log('Donnée guide envoyer', event);
  }

  licenceCommercialleeSubmitted(event: any) {
    this.fichierData = event;
    //console.log('Donnée fichier commerciale envoyer', event);
  }
  permisConcessionSubmitted(event: any) {
    this.fichierData = event;
    //console.log('Donnée guide envoyer', event);
  }
  fichierSubmitted(event: any) {
    this.fichierData = event;
    // console.log('fichiers etablissement envoyé');
  }

  etablissementfichierSubmitted(event: any) {
    this.fichierData = event;
  }
  demandesDataEvent(event: any) {
    this.demandesData = event;
    console.log('Données de la demande :', event);
  }


  /**
 * Génère un code composé de lettres majuscules et de chiffres.
 */

  onSubmit() {

    const formData = new FormData();




    if (this.demandesData) {

      formData.append('typeDemandeur', this.typeDemandeur || '');
      formData.append('typeDemande', this.typeDemande || '');
      formData.append('prix', this.demandesData.prix ? this.demandesData.prix.toString() : '0');
      formData.append('numeroDemande', this.demandesData.numeroDemande ? this.demandesData.numeroDemande.toString() : '');
      formData.append('codeDemande', this.demandesData.codeDemande || '');
      formData.append('dateDepot', this.demandesData.dateDepot || new Date().toISOString().split('T')[0]);
      formData.append('dateValidation', this.demandesData.dateValidation || '');
    }

    // Ajouter les pièces jointes
    this.fichierData.forEach((file: any, index: number) => {
      if (file.fichier) {
        formData.append(`piecesJointes[${index}].label`, file.label || '');
        formData.append(`piecesJointes[${index}].fichier`, file.fichier);
      }
    });


    // Ajouter les données du demandeur
    if (this.typeDemandeur === 'morale' && this.personneMoraleData) {
      formData.append('ifu', this.personneMoraleData.ifu || '');
      formData.append('nomResponsable', this.personneMoraleData.nomResponsable || '');
      formData.append('denomination', this.personneMoraleData.denomination || '');
      formData.append('siege', this.personneMoraleData.siege || '');
      formData.append('telephone1', this.personneMoraleData.telephone1 || '');
      formData.append('telephone2', this.personneMoraleData.telephone2 || '');
      formData.append('mail', this.personneMoraleData.mail || '');

    } else if (this.typeDemandeur === 'physique' && this.demandeurData) {
      formData.append('nom', this.demandeurData.nom || '');
      formData.append('prenom', this.demandeurData.prenom || '');
      formData.append('genre', this.demandeurData.genre || '');
      formData.append('dateNaisse', this.demandeurData.dateNaisse || '');
      formData.append('lieuResidence', this.demandeurData.lieuResidence || '');
      formData.append('telephone1', this.demandeurData.telephone1 || '');
      formData.append('telephone2', this.demandeurData.telephone2 || '');
      formData.append('mail', this.demandeurData.mail || '');
      formData.append('typePiece', this.demandeurData.typePiece || '');
      formData.append('numPiece', this.demandeurData.numPiece || '');

    }

    console.log('Envoi du formulaire:', formData.get("piecesJointes"));

    this.demandeServiceService
      .envoyerDemande(formData)
      .subscribe({
        next: (response) => {
          //console.log('Formulaire envoyé avec succès :', response);
          const demandeId = response.id; // ou response.demandeId selon votre structure

          // Si vous avez des fichiers à uploader
          if (this.selectedFiles && this.selectedFiles.length > 0) {
            this.pieceJointeService.uploadFiles(this.selectedFiles, demandeId)
              .subscribe({
                next: (uploadResponse) => {
                  console.log('Fichiers uploadés avec succès');
                },
                error: (uploadError) => {
                  console.error('Erreur lors de l\'upload des fichiers:', uploadError);
                }
              });
          }

          error: (error: HttpErrorResponse) => {
            console.error('Erreur lors de l\'envoi du formulaire:', error);
          }
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi du formulaire:', error);
        }
      });


    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });

    //console.table(this.demandesData)
    //console.table(this.demandeurData)
    //console.table(this.personneMoraleData)
    //console.table(this.fichierData)
    //console.log('Soumission des données :', {
    //  typeDemandeur: this.typeDemandeur,
    //  typeDemande: this.typeDemande,
    //});
  }



  onUpload(files: File[]) {
    const demandeId = 1; // Remplacez par l'ID réel de votre demande

    this.pieceJointeService.uploadFiles(files, demandeId).subscribe({
      next: (response) => {
        console.log('Upload réussi:', response);
        // Gérer le succès (ex: afficher un message, rafraîchir la liste, etc.)
      },
      error: (error) => {
        console.error('Erreur lors de l\'upload:', error);
        // Gérer l'erreur (ex: afficher un message d'erreur)
      }
    });
  }
}





