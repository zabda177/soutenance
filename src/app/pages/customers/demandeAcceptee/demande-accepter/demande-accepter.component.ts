import { DemandeServiceService } from './../../../../components/demande-certificat/service/demande-service.service';
/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 29/11/2024 - 14:12:23
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/11/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../../../components/ui/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { SoumissionDto } from '../../../../components/demande-certificat/model/demande';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-demande-accepter',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
  ],
  providers: [DemandeServiceService],
  templateUrl: './demande-accepter.component.html',
  styleUrl: './demande-accepter.component.css',
})
export class DemandeAccepterComponent {

  demandeAcceptees: SoumissionDto[] = []; // liste des demandes acceptées
  router: Router = inject(Router);
  demandeServiceService: DemandeServiceService = inject(DemandeServiceService);

  constructor() { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getDemandeAcceptees();
  }

  getDemandeAcceptees(): void {
    this.demandeServiceService.getDemandeAccepte().subscribe(
      (data: SoumissionDto[]) => {
        this.demandeAcceptees = data;
      },
      (error) => {
        console.error('Erreur  lors de la recupearation des demandes', error);
      }
    );
  }

  afficherDetailsAcceptees(demande: any): void {
    console.log('Demande:', demande); // Inspecter l'objet pour verifier l'ID
    if (demande && demande.idDemande) {
      this.demandeServiceService
        .getDemandeById(demande.id)
        .subscribe((response) => {
          console.log('Liste', response);
        });
      this.router.navigate(['/custumer/demandeAccepter', demande.id]);
      console.log(
        'tentative de redirection vers les details de la demande avec II',
        demande.id
      );
    } else {
      console.error('ID de la demmande manquant ou indefini', demande);
    }
  }
}
