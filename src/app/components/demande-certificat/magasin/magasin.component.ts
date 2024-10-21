import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CdkStepperNext, CdkStepperPrevious} from "@angular/cdk/stepper";

@Component({
  selector: 'app-magasin',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CdkStepperPrevious,
    CdkStepperNext
  ],
  templateUrl: './magasin.component.html',
  styleUrl: './magasin.component.css'
})
export class MagasinComponent {
  magasinForm!: FormGroup;

  constructor() {
    this.magasinForm = new FormGroup({
      secteur: new FormControl('', Validators.required),
      porte: new FormControl('', Validators.required),
      rue: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
    });
  }
}
