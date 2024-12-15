/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 05/10/2024 - 06:10:23
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
  selector: 'app-fichier-permis',
  standalone: true,
  imports: [
    CdkStepperNext,
    CdkStepperPrevious,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './fichier-permis.component.html',
  styleUrl: './fichier-permis.component.css',
})
export class FichierPermisComponent {
  fichierForm!: FormGroup;
  formValide: boolean = true;
  typeFichier: string = '';

  demandeFile: File | null = null;
  cnibFile: File | null = null;
  certificatNationaliteFile: File | null = null;
  listeMembreFile: File | null = null;
  photoFile: File | null = null;
  quittanceFile: File | null = null;

  @Output() permisPecheSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onFileSave() {
    if (this.demandeFile == null) {
      alert('Veuillez renseigné la demande');
      return;
    } else if (this.cnibFile == null) {
      alert('Veuillez charger la CNIB');
      return;
    } else if (this.certificatNationaliteFile == null) {
      alert('Veuillez chargée le certificat de Nationalité');
      return;
    } else if (this.photoFile == null) {
      alert('Veuillez charger la photo');
      return;
    } else if (this.quittanceFile == null) {
      alert('Veuillez charger la quitance');
      return;
    }

    /* formData.append('annee', this.fichierForm.get('annee')?.value); */
    if (this.demandeFile) {
    } else {
      alert('Veuillez charger votre demande manuscrite');
      return;
    }
    if (this.cnibFile) {
    } else {
      alert('Veuillez charger CNIB');
      return;
    }
    if (this.certificatNationaliteFile) {
    } else {
      alert('Veuillez charger ');
      return;
    }

    if (this.photoFile) {
    } else {
      alert('Veuillez charger le fichier du plan');
      return;
    }
    if (this.quittanceFile) {
    } else {
      alert('Veuillez charger la quitance');
      return;
    }
    let listeFichier: any[] = [
      { label: 'demande', fichier: this.demandeFile },
      { label: 'cnib', fichier: this.cnibFile },
      {
        label: 'certificatNationalite',
        fichier: this.certificatNationaliteFile,
      },
      { label: 'photo', fichier: this.photoFile },
      { label: 'quittance', fichier: this.quittanceFile },
    ];
    this.permisPecheSubmitted.emit(listeFichier);
  }

  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeFichier = selectElement.value; // 'physique' ou 'morale'
  }

  onFileSelect(event: any, field: string) {
    console.log('event => ', event);
    const file = event.target.files[0]; // Corrigé pour éviter une erreur de sélection de fichier
    if (file) {
      switch (field) {
        case 'demande':
          this.demandeFile = file;

          break;
        case 'cnib':
          this.cnibFile = file;

          break;
        case 'certificatNationalite':
          this.certificatNationaliteFile = file;

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
