/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 04/10/2024 - 18:16:31
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { CdkStepperNext, CdkStepperPrevious } from '@angular/cdk/stepper';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-fichier-guide',
  standalone: true,
  imports: [
    FormsModule,
    CdkStepperNext,
    CdkStepperPrevious,
    ReactiveFormsModule,
  ],
  templateUrl: './fichier-guide.component.html',
  styleUrl: './fichier-guide.component.css',
})
export class FichierGuideComponent {
  fichierForm!: FormGroup;
  formValide: boolean = true;
  typeFichier: string = '';

  demandeFile: File | null = null;
  cnibFile: File | null = null;
  reconnaissanceFile: File | null = null;
  certificatNationaliteFile: File | null = null;
  listeEquipementFile: File | null = null;
  photoFile: File | null = null;
  quittanceFile: File | null = null;

  @Output() LicenceGuideSubmitted = new EventEmitter<FormData>();
  constructor() {}

  onFileSave() {
    //ajout de conditions
    if (this.demandeFile == null) {
      alert('Veuillez renseigné la demande');
      return;
    } else if (this.cnibFile == null) {
      alert('Veuillez charger la CNIB');
      return;
    } else if (this.certificatNationaliteFile == null) {
      alert('Veuillez chargée le certificat de Nationalité');
      return;
    } else if (this.reconnaissanceFile == null) {
      alert('charger le document de reconnaissance');
      return;
    } else if (this.listeEquipementFile == null) {
      alert('Charger laa liste des equipements');
      return;
    } else if (this.photoFile == null) {
      alert('Veuillez charger la photo');
      return;
    } else if (this.quittanceFile == null) {
      alert('Veuillez charger la quitance');
      return;
    }

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
    if (this.reconnaissanceFile) {
      formData.append('reconnaissance', this.reconnaissanceFile);
    } else {
      alert('Veuillez charger votre document de reconnaisssance');
      return;
    }
    if (this.certificatNationaliteFile) {
      formData.append('certificatNationalite', this.certificatNationaliteFile);
    } else {
      alert('Veuillez charger votre certificat Nationnalité');
      return;
    }
    if (this.listeEquipementFile) {
      formData.append('listeEquipement', this.listeEquipementFile);
    } else {
      alert('Veuillez charger la liste des equipents ');
      return;
    }
    if (this.photoFile) {
      formData.append('photo', this.photoFile);
    } else {
      alert('Veuillez charger le fichier de photo');
      return;
    }
    if (this.quittanceFile) {
      formData.append('quitance', this.quittanceFile);
    } else {
      alert('Veuillez charger la quittance');
      return;
    }
    this.LicenceGuideSubmitted.emit(formData);
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
        case 'reconnaissance':
          this.reconnaissanceFile = file;
          break;
        case 'certificatNationalite':
          this.certificatNationaliteFile = file;
          break;
        case 'listeEquipement':
          this.listeEquipementFile = file;
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
