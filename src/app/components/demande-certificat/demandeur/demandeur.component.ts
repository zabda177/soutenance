/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 13/10/2024 - 14:24:07
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 13/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper'; // Ajout de CdkStepperModule

@Component({
  selector: 'app-demandeur',
  standalone: true,
  templateUrl: './demandeur.component.html',
  imports: [CommonModule, ReactiveFormsModule, CdkStepperModule], // Ajout de CdkStepperModule
  styleUrls: ['./demandeur.component.css'],
})
export class DemandeurComponent implements OnInit {
  demandeurForm: FormGroup;
  typeDemandeur: string = ''; // Pour gérer le type de demandeur

  constructor(private fb: FormBuilder) {
    this.demandeurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      emailDemandeur: ['', [Validators.required, Validators.email]],
      datenaisDemandeur: ['', Validators.required],
      genreDemandeur: ['', Validators.required],
      telephone1Demandeur: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      telephone2Demandeur: ['', Validators.pattern('^[0-9]+$')], // Optionnel
      lieuResidenceDemandeur: ['', Validators.required],
      typePieceDemandeur: ['', Validators.required],
      numPieceDemandeur: ['', Validators.required],
    });
  }
  @Output() demandeurEvent: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {}
  formValide: boolean = false;

  onSubmit(): void {
    if (this.demandeurForm.valid) {
      this.formValide = true; // Active le message de succès
      this.demandeurEvent.emit(this.demandeurEvent);
      console.log('Formulaire valide, étape suivante');
    } else {
      this.formValide = false; // Désactive le message si formulaire invalide
      this.demandeurForm.markAllAsTouched(); // Marque tous les champs comme "touchés"
      console.log('Le formulaire est invalide');
    }
  }

  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeDemandeur = selectElement.value; // 'physique' ou 'morale'
  }
}
