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
  quittanceFile: File | null = null;

  @Output() fichierSubmitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onFileSave() {
    if (this.demandeFile == null) {
      alert('Veuillez chzrgée la Demande');
      return;
    } else if (this.cnibFile == null) {
      alert('Veuillez chargée la CNIB');
      return;
    } else if (this.reconnaissanceFile == null) {
      alert('Veulliez chaeger le fichier de reconnaissance');
      return;
    } else if (this.infrastructureFile == null) {
      alert('Veeuillez charger la liste du materiels');
      return;
    } else if (this.avisFile == null) {
      alert('Veuillez charger l avis');
      return;
    } else if (this.titreTerrainFile == null) {
      alert('Charger le titre du terrain');
      return;
    } else if (this.planEtablissementFile == null) {
      alert('Charger le plan du terrain');
      return;
    } else if (this.quittanceFile == null) {
      alert('Charger la quitance');
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
      alert('Veuillez charger CNIB');
      return;
    }
    if (this.reconnaissanceFile) {
      formData.append('reconnaissance', this.reconnaissanceFile);
    } else {
      alert('Veuillez charger le Document de reconnaissance');
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

    if (this.avisFile) {
      formData.append('avis', this.avisFile);
    } else {
      alert('Veuillez charger lavvis environnementale ');
      return;
    }
    if (this.quittanceFile) {
      formData.append('quittance', this.quittanceFile);
    } else {
      alert('Veuillez charger la quitance');
      return;
    }
    this.fichierSubmitted.emit(formData);
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
        case 'avis':
          this.avisFile = file;
          break;

        case 'quittance':
          this.quittanceFile = file;
          break;
      }
    }
  }
}
