/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 26/11/2024 - 14:10:49
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/11/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from '../../../components/ui/menu/menu.component';
import {
  PieceJointeDto,
  SoumissionDto,
} from '../../../components/demande-certificat/model/demande';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeServiceService } from '../../../components/demande-certificat/service/demande-service.service';
import { DemandeurService } from '../../../components/demande-certificat/service/demandeur.service';
import { PersonneMoraleService } from '../../../components/demande-certificat/service/personne-morale.service';

@Component({
  selector: 'app-demamnde-details',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
    MenuComponent,
  ],
  templateUrl: './demamnde-details.component.html',
  styleUrl: './demamnde-details.component.css',
})
export class DemamndeDetailsComponent {
  demandeDetail: any;
  demandeurDetails: any;
  personneMoraleDetails: any;
  idDemande: number | null = null;

  pieces: PieceJointeDto[] = [];
  router: Router = inject(Router);
  demande: SoumissionDto[] = []; // Assurez-vous que c'est initialisé
  demandesSoumises: SoumissionDto[] = []; // Liste des demandes soumises
  rejectionReasons: string[] = ['Motif 1', 'Motif 2', 'Motif 3', 'Motif 4'];
  selectedRejectionReason: string | undefined;
  showRejectionModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private demandeServiceService: DemandeServiceService,
    private demandeurService: DemandeurService,
    private personneMoraleService: PersonneMoraleService,
  ) { }
  ngOnInit(): void {
    //  récupérer le paramètre dynamique 'idDemande'
    this.idDemande = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID de la demande récupéré:', this.idDemande); // Pour déboguer
    if (this.idDemande) {
      this.getDemandeDetails(this.idDemande);
    } else {
      console.error('ID de la demande manquant ou invalide.');
    }
  }
  getDemandeDetails(demandeId: number): void {
    this.demandeServiceService.getDemandeById(demandeId).subscribe((demande: any) => {
      this.demandeDetail = demande; // Stocker la demande récupérée.
      this.demandeurDetails = demande.nomResponsable;
      this.pieces = demande.pieces || [];
      if (demande.typeDemandeur === 'physique') {
        // Appeler le service ou composant pour récupérer les détails de la personne physique.
        this.demandeurService.getDetailsById(demande.demandeurId).subscribe((details) => {
          this.demandeurDetails = details;
        });
      } else if (demande.typeDemandeur === 'morale') {
        // Appeler le service ou composant pour récupérer les détails de la personne morale.
        this.personneMoraleService.getDetailsById(demande.demandeurId).subscribe((details) => {
          this.personneMoraleDetails = details;
        });
      }
    });
  }


  // Méthode pour accepter la demande
  accepterDemande(): void {
    if (this.idDemande !== null) {
      // Vérifie que idDemande n'est pas null
      this.demandeServiceService.accepterDemande(this.idDemande).subscribe({
        next: (response) => {
          alert('Demande acceptée avec succès');
          this.router.navigate(['/customer/demandes/soumises']);
          this.demandesSoumises = this.demandesSoumises.filter(
            (demande) => demande.id !== this.idDemande
          );
        },
        error: (err) => {
          console.error("Erreur lors de l'acceptation de la demande", err);
        },
      });
    } else {
      console.error("L'ID de la demande est nul");
    }
  }
  ouvrirRejectionModal() {
    this.showRejectionModal = true;
  }

  rejeterDemande(): void {
    if (this.idDemande !== null) {
      this.demandeServiceService.rejeterDemande(this.idDemande).subscribe({
        next: (response) => {
          alert('Demande rejetée avec succès');
          this.router.navigate(['/customer/demandes/soumises']);
          this.demandesSoumises = this.demandesSoumises.filter(
            (demande) => demande.id !== this.idDemande
          );
        },
        error: (err) => {
          console.error('Erreur lors du rejet de la demande', err);
        },
      });
    } else {
      console.error("L'ID de la demande est nul");
    }
    this.showRejectionModal = false;
    // Code pour rejeter la demande avec selectedRejectionReason
    console.log('Motif de rejet:', this.selectedRejectionReason);
  }

  fermerRejectionModal() {
    this.showRejectionModal = false;
  }
}

