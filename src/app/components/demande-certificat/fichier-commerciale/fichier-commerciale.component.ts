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
  quittanceFile: File | null = null;

  @Output() licenceCommercialleSubmitted = new EventEmitter<FormData>();
  constructor() {}

  onFileSave() {
    if (this.demandeFile == null) {
      alert('Veuillez renseigné la demande');
      return;
    } else if (this.cnibFile == null) {
      alert('Veuillez charger la CNIB');
      return;
    } else if (this.attestationFiscaleFile == null) {
      alert('Veuillez chargée l attestation fiscale');
      return;
    } else if (this.carteProfessionnelleFile == null) {
      alert('Veuillez chargée la carte professionnelle');
      return;
    } else if (this.casierJudiciaireFile == null) {
      alert('Veuillez charger le casier judiciaire');
      return;
    } else if (this.certificatMedicalFile == null) {
      alert('Veuillez charger le certificat Medical');
      return;
    } else if (this.photoFile == null) {
      alert('Veuillez charger la photo');
      return;
    } else if (this.quittanceFile == null) {
      alert('Veuillez charger la quitance');
      return;
    }

    const formData = new FormData();

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
      formData.append('casierJudiciaire', this.casierJudiciaireFile);
    } else {
      alert('Veuillez charger votre casir Judiciaire');
      return;
    }
    if (this.carteProfessionnelleFile) {
      formData.append('carteProfessionnelle', this.carteProfessionnelleFile);
    } else {
      alert('Veuillez charger la carte Professionnelle');
      return;
    }
    if (this.certificatMedicalFile) {
      formData.append('certificatMedicale', this.certificatMedicalFile);
    } else {
      alert('Veuillez charger le certificat Médical');
      return;
    }
    if (this.quittanceFile) {
      formData.append('quittance', this.quittanceFile);
    } else {
      alert('Veuillez charger la quitance');
      return;
    }
    this.licenceCommercialleSubmitted.emit(formData);
  }

  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeFichier = selectElement.value; // 'physique' ou 'morale'
  }

  onFileSelect(event: any, field: string) {
    const file = event.target.files[0];
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
        case 'casierJudiciaire':
          this.casierJudiciaireFile = file;
          break;
        case 'certificatMedical':
          this.certificatMedicalFile = file;
          break;
        case 'carteProfessionnelle':
          this.carteProfessionnelleFile = file;
          break;
        case 'photo':
          this.photoFile = file;
          break;
        case 'quittance':
          this.quittanceFile = file;
          break;
      }
    }
  }
}
