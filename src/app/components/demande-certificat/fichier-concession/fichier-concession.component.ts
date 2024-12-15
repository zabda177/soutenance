/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 05/10/2024 - 04:56:33
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/10/2024
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
  selector: 'app-fichier-concession',
  standalone: true,
  imports: [
    CdkStepperNext,
    CdkStepperPrevious,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './fichier-concession.component.html',
  styleUrl: './fichier-concession.component.css',
})
export class FichierConcessionComponent {
  fichierForm!: FormGroup;
  formValide: boolean = true;
  typeFichier: string = '';

  demandeFile: File | null = null;
  cnibFile: File | null = null;
  reconnaissanceFile: File | null = null;
  listeMembreFile: File | null = null;
  engagementFile: File | null = null;
  photoFile: File | null = null;
  quittanceFile: File | null = null;

  @Output() permisConcessionSubmitted = new EventEmitter<FormData>();

  constructor() {}
  onFileSave() {
    if (this.demandeFile == null) {
      alert('Veuillez renseigné la demande');
      return;
    } else if (this.cnibFile == null) {
      alert('Veuillez charger la CNIB');
      return;
    } else if (this.reconnaissanceFile == null) {
      alert('Veuillez chargée le document de reconnaisance');
      return;
    } else if (this.listeMembreFile == null) {
      alert('Veuillez chargée la liste des membres');
      return;
    } else if (this.engagementFile == null) {
      alert('Veuillez chargée lengagement');
      return;
    } else if (this.photoFile == null) {
      alert('Veuillez charger la photo');
      return;
    } else if (this.quittanceFile == null) {
      alert('Veuillez charger la quittance___');
      return;
    }

    //ajout de conditions
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
      alert("Veuillez charger votre note de service d'affectation");
      return;
    }
    if (this.reconnaissanceFile) {
      formData.append('reconnaissance', this.reconnaissanceFile);
    } else {
      alert("Veuillez charger votre note de service d'affectation");
      return;
    }
    if (this.listeMembreFile) {
      formData.append('listeMembre', this.listeMembreFile);
    } else {
      alert('Veuillez charger votre fichier descriptif');
      return;
    }
    if (this.engagementFile) {
      formData.append('titreTerrain', this.engagementFile);
    } else {
      alert('Veuillez charger le titre du Terrain');
      return;
    }
    if (this.photoFile) {
      formData.append('photo', this.photoFile);
    } else {
      alert('Veuillez charger la photo');
      return;
    }
    if (this.quittanceFile) {
      formData.append('quittance', this.quittanceFile);
    } else {
      alert('Veuillez charger la quitance');
      return;
    }
    this.permisConcessionSubmitted.emit(formData);
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
        case 'listeMembre':
          this.listeMembreFile = file;
          break;
        case 'engagement':
          this.engagementFile = file;
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
