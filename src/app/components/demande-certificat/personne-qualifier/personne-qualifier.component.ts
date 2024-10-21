import { Component } from '@angular/core';
import { CdkStepperNext, CdkStepperPrevious } from "@angular/cdk/stepper";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-personne-qualifier',
  standalone: true,
  imports: [
    CdkStepperNext,
    CdkStepperPrevious,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './personne-qualifier.component.html',
  styleUrl: './personne-qualifier.component.css'
})
export class PersonneQualifierComponent {
  personneQualifierForm!: FormGroup;

  constructor() {
    this.personneQualifierForm = new FormGroup({
      nomPrenom: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      lieuNaissance: new FormControl('', Validators.required),
      residence: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      typePiece: new FormControl('', Validators.required),

      numPiece: new FormControl('', Validators.required),
      profession: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      numDiplome: new FormControl('', Validators.required),
      libelleDiplome: new FormControl('', Validators.required),
      lieuDiplome: new FormControl('', Validators.required),
      dateDiplome: new FormControl('', Validators.required)
    });
  }
}
