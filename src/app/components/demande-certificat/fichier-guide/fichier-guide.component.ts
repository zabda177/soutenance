import { LicenceGuide } from './../model/licence-guide';
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
  quittancesFile: File | null = null;
  messageService: any;

  constructor() {
    this.fichierForm = new FormGroup({
      demande: new FormControl('', Validators.required),
      cnib: new FormControl('', Validators.required),
      reconnaissance: new FormControl('', Validators.required),
      certificatNationalite: new FormControl('', Validators.required),
      listeEquipement: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      quittances: new FormControl('', Validators.required),
    });
  }

  @Output() LicenceGuideSubmitted = new EventEmitter<FormData>();
  onSubmit(): void {
    if (this.fichierForm.valid) {
      this.formValide = true; // Active le message de succès
      console.log('Formulaire validé');
    } else {
      this.formValide = false; // Désactive le message si formulaire invalide
      this.fichierForm.markAllAsTouched(); // Marque tous les champs comme "touchés"
      console.log('Le formulaire est invalide');
    }

    //ajout de conditions
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
      if (this.reconnaissanceFile) {
        formData.append('reconnaissance', this.reconnaissanceFile);
      } else {
        alert('Veuillez charger votre document de reconnaisssance');
        return;
      }
      if (this.certificatNationaliteFile) {
        formData.append(
          'certificatNationalite',
          this.certificatNationaliteFile
        );
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
      if (this.quittancesFile) {
        formData.append('quitance', this.quittancesFile);
      } else {
        alert('Veuillez charger la quitance');
        return;
      }
      this.LicenceGuideSubmitted.emit(formData);
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
        case 'reconnaissance':
          this.reconnaissanceFile = file;
          break;
        case 'certificatNationalite':
          this.certificatNationaliteFile = file;
          break;
        case 'listeEquiment':
          this.listeEquipementFile = file;
          break;
        case 'photo':
          this.photoFile = file;
          break;
        case 'quitance':
          this.quittancesFile = file;
          break;
      }
    }
  }
}
