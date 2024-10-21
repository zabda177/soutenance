/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 04/10/2024 - 14:28:37
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { DemandeLicenceComponent } from './../../../components/demande-certificat/demande-licence/demande-licence.component';
import { Component } from '@angular/core';
import { CreationEtablissementComponent } from '../../../components/demande-certificat/creation-etablissement/creation-etablissement.component';
import { DemandeurComponent } from '../../../components/demande-certificat/demandeur/demandeur.component';
import { PersonneMoraleComponent } from '../../../components/demande-certificat/personne-morale/personne-morale.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande',
  standalone: true,
  imports: [
    DemandeLicenceComponent,
    DemandeurComponent,
    PersonneMoraleComponent,
    CommonModule,
  ],
  templateUrl: './demande.component.html',
  styleUrl: './demande.component.css',
})
export class DemandeComponent {
  typeDemandeur: string = '';

  onTypeDemandeurChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.typeDemandeur = selectElement.value; // 'physique' ou 'morale'
  }
}
