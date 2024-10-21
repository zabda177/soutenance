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
  quitanceFile: File | null = null;
  messageService: any;

  constructor() {
    this.fichierForm = new FormGroup({
      demande: new FormControl('', Validators.required),
      cnib: new FormControl('', Validators.required),
      reconnaissance: new FormControl('', Validators.required),
      listeMembre: new FormControl('', Validators.required),
      engagement: new FormControl('', Validators.required),
      photo: new FormControl('', Validators.required),
      quittances: new FormControl('', Validators.required),
    });
  }
  @Output() permisConcessionSubmitted = new EventEmitter<FormData>();

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
        formData.append('infrastructure', this.listeMembreFile);
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
        formData.append('planEtablissement', this.photoFile);
      } else {
        alert('Veuillez charger le fichier du plan');
        return;
      }
      if (this.quitanceFile) {
        formData.append('quitance', this.quitanceFile);
      } else {
        alert('Veuillez charger la quitance');
        return;
      }
      this.permisConcessionSubmitted.emit(formData);
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
        case 'listeMembre':
          this.listeMembreFile = file;
          break;
        case 'engagement':
          this.engagementFile = file;
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
