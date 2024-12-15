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

import { Component, inject, OnInit } from '@angular/core';
import { DemandeurComponent } from '../../../components/demande-certificat/demandeur/demandeur.component';
import { PersonneMoraleComponent } from '../../../components/demande-certificat/personne-morale/personne-morale.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { MenuComponent } from '../../../components/ui/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemandeAgrementCustomerComponent } from '../../customers/demande-agrement-customer/demande-agrement-customer.component';
import { FichierComponent } from '../../../components/demande-certificat/fichier/fichier.component';
import { SoumissionDto } from '../../../components/demande-certificat/model/demande';
import { DemandeServiceService } from '../../../components/demande-certificat/service/demande-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  standalone: true,
  imports: [
    DemandeurComponent,
    PersonneMoraleComponent,
    CommonModule,
    MenuComponent,
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
    DemandeAgrementCustomerComponent,
    DemandeurComponent,
    FichierComponent,
  ],
  templateUrl: './demande.component.html',
  styleUrl: './demande.component.css',
})
export class DemandeComponent implements OnInit {
  demandes: SoumissionDto[] = [];

  constructor(
    private demandeServiceServie: DemandeServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDemandesEncours();
  }

  getDemandesEncours(): void {
    this.demandeServiceServie.getDemandeEncours().subscribe(
      (data: SoumissionDto[]) => {
        this.demandes = data;
        console.log('Demandes récupérées:', this.demandes);
      },
      (error) => {
        console.error('Erreur lors de la récupération des demandes', error);
      }
    );
  }

  afficherDetails(demande: any): void {
    console.log('Demande:', demande); // Inspectez l'objet pour vérifier l'ID
    if (demande && demande.id) {
      // Utilisez la propriété appropriée pour l'ID
      this.demandeServiceServie
        .getDemandeById(demande.id)
        .subscribe((response) => {
          console.log('Liste', response);
        });
      this.router.navigate(['/customer/demande-details', demande.id]);
      console.log(
        'Tentative de redirection vers les détails de la demande avec ID:',
        demande.id
      );
    } else {
      console.error('ID de la demande manquant ou indéfini.', demande);
    }
  }

}
