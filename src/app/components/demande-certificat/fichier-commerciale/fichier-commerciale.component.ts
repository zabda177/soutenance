/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 04/10/2024 - 18:04:04
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { CdkStepperPrevious } from '@angular/cdk/stepper';
import { CdkStepperNext } from '@angular/cdk/stepper';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-fichier-commerciale',
  standalone: true,
  imports: [
    FormsModule,
    CdkStepperNext,
    CdkStepperPrevious,
    ReactiveFormsModule,
  ],
  templateUrl: './fichier-commerciale.component.html',
  styleUrl: './fichier-commerciale.component.css',
})
export class FichierCommercialeComponent {
  fichierForm!: FormGroup;
  formValide: boolean = true;
  typeFichier: string = '';

  demandeFile: File | null = null;
  cnibFile: File | null = null;
  attestationFiscaleFile: File | null = null;
  carteProfessionnelleFile: File | null = null;
  casierJudiciaireFile: File | null = null;
  certificatMedicalFile: File | null = null;
  photoFile: File | null = null;
  quitanceFile: File | null = null;
  messageService: any;

  constructor() {
    this.fichierForm = new FormGroup({
      demande: new FormControl('', Validators.required),
      cnib: new FormControl('', Validators.required),
      attestationFiscale: new FormControl('', Validators.required),
      carteProfessionnelle: new FormControl('', Validators.required),
      casierJudiciaire: new FormControl('', Validators.required),
      certificatMedical: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      quittances: new FormControl('', Validators.required),
    });
  }
  @Output() licenceCommercialleSubmitted = new EventEmitter<FormData>();

  onSubmit(): void {
    if (this.fichierForm.valid) {
      this.formValide = true; // Active le message de succès
      console.log('Formulaire validé');
    } else {
      this.formValide = false; // Désactive le message si formulaire invalide
      this.fichierForm.markAllAsTouched(); // Marque tous les champs comme "touchés"
      console.log('Le formulaire est invalide');
    }

    if (this.fichierForm.valid) {
      const formData = new FormData();
      /* formData.append('annee', this.fichierForm.get('annee')?.value); */
      if (this.demandeFile) {
        formData.append('demande', this.demandeFile);
      } else {
        alert('Veuillez charger votre demande manuscrite');
        return;
      }
      if (this.cnibFile) {
        formData.append('cnib', this.cnibFile);
      } else {
        alert('Veuillez charger votre CNIB');
        return;
      }
      if (this.attestationFiscaleFile) {
        formData.append('reconnaissance', this.attestationFiscaleFile);
      } else {
        alert('Veuillez charger votre Document de reconnassance');
        return;
      }
      if (this.casierJudiciaireFile) {
        formData.append('infrastructure', this.casierJudiciaireFile);
      } else {
        alert('Veuillez charger votre fichier descriptif');
        return;
      }
      if (this.carteProfessionnelleFile) {
        formData.append('titreTerrain', this.carteProfessionnelleFile);
      } else {
        alert('Veuillez charger la carte Professionnelle');
        return;
      }
      if (this.certificatMedicalFile) {
        formData.append('planEtablissement', this.certificatMedicalFile);
      } else {
        alert('Veuillez charger le certificat Médical');
        return;
      }
      if (this.quitanceFile) {
        formData.append('quitance', this.quitanceFile);
      } else {
        alert('Veuillez charger la quitance');
        return;
      }
      this.licenceCommercialleSubmitted.emit(formData);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez remplir tous les champs obligatoires.',
      });
    }
  }

  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeFichier = selectElement.value; // 'physique' ou 'morale'
  }

  onFileSelect(event: any, field: string) {
    const file = event.target.files[0]; // Corrigé pour éviter une erreur de sélection de fichier
    if (file) {
      switch (field) {
        case 'demande':
          this.demandeFile = file;
          break;
        case 'cnib':
          this.cnibFile = file;
          break;
        case 'attestationFiscale':
          this.attestationFiscaleFile = file;
          break;
        case 'CasierJudiciare':
          this.casierJudiciaireFile = file;
          break;
        case 'certificatMedical':
          this.certificatMedicalFile = file;
          break;
        case 'photo':
          this.photoFile = file;
          break;
        case 'quitance':
          this.quitanceFile = file;
          break;
      }
    }
  }
}
