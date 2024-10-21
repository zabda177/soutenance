import { CommonModule } from '@angular/common';
/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 06/10/2024 - 17:11:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 06/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { CdkStepperModule, CdkStepperNext } from '@angular/cdk/stepper';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-personne-morale',
  standalone: true,
  imports: [
    CdkStepperNext,
    ReactiveFormsModule,
    CommonModule,
    CdkStepperModule,
  ],
  templateUrl: './personne-morale.component.html',
  styleUrl: './personne-morale.component.css',
})
export class PersonneMoraleComponent {
  personneMoraleForm!: FormGroup;
  typePersonneMorale: string = '';
  constructor() {
    this.personneMoraleForm = new FormGroup({
      ifu: new FormControl('', Validators.required),
      denomination: new FormControl('', Validators.required),
      siege: new FormControl('', Validators.required),
      emailDemandeur: new FormControl('', Validators.required),
      telephone1Demandeur: new FormControl('', Validators.required),
      telephone2Demandeur: new FormControl('', Validators.required),
    });
  }

  @Output() personneMoraleEvent: EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {}

  formValide: boolean = false;
  onSubmit(): void {
    if (this.personneMoraleForm.valid) {
      this.formValide = true; // Active le message de succès
      this.personneMoraleEvent.emit(this.personneMoraleForm);
    } else {
      this.formValide = false; // Désactive le message si formulaire invalide
      this.personneMoraleForm.markAllAsTouched(); // Marque tous les champs comme "touchés"
      console.log('Le formulaire est invalide');
    }
  }

  onTypePersonneMoraleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typePersonneMorale = selectElement.value; // 'physique' ou 'morale'
  }
}
