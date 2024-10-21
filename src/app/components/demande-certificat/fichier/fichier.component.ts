/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 05/10/2024 - 04:43:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 05/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component, EventEmitter, Output } from '@angular/core';
import { CdkStepperNext, CdkStepperPrevious } from '@angular/cdk/stepper';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fichier',
  standalone: true,
  imports: [
    CdkStepperNext,
    CdkStepperPrevious,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './fichier.component.html',
  styleUrl: './fichier.component.css',
})
export class FichierComponent {
  fichierForm!: FormGroup;
  formValide: boolean = true;
  typeFichier: string = '';

  demandeFile: File | null = null;
  cnibFile: File | null = null;
  reconnaissanceFile: File | null = null;
  infrastructureFile: File | null = null;
  avisFile: File | null = null;
  titreTerrainFile: File | null = null;
  planEtablissementFile: File | null = null;
  quitanceFile: File | null = null;
  messageService: any;

  constructor() {
    this.fichierForm = new FormGroup({
      demande: new FormControl('', Validators.required),
      cnib: new FormControl('', Validators.required),
      reconnaissance: new FormControl('', Validators.required),
      infrastructure: new FormControl('', Validators.required),
      avis: new FormControl('', Validators.required),
      titreTerrain: new FormControl('', Validators.required),
      planEtablissement: new FormControl('', Validators.required),
      quitance: new FormControl('', Validators.required),
    });
  }
  @Output() demandeurSubmitted = new EventEmitter<FormData>();

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
      if (this.infrastructureFile) {
        formData.append('infrastructure', this.infrastructureFile);
      } else {
        alert('Veuillez charger votre fichier descriptif');
        return;
      }
      if (this.titreTerrainFile) {
        formData.append('titreTerrain', this.titreTerrainFile);
      } else {
        alert('Veuillez charger le titre du Terrain');
        return;
      }
      if (this.planEtablissementFile) {
        formData.append('planEtablissement', this.planEtablissementFile);
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
      this.demandeurSubmitted.emit(formData);
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
        case 'infrastructure':
          this.infrastructureFile = file;
          break;
        case 'titreTerrain':
          this.titreTerrainFile = file;
          break;
        case 'planEtablissement':
          this.planEtablissementFile = file;
          break;
        case 'quitance':
          this.quitanceFile = file;
          break;
      }
    }
  }
}
