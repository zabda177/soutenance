/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 29/11/2024 - 15:30:12
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/11/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { DemandeServiceService } from './../../../../components/demande-certificat/service/demande-service.service';
import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../../../components/ui/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SoumissionDto } from '../../../../components/demande-certificat/model/demande';
import { error } from 'console';

@Component({
  selector: 'app-demande-accepter-details',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
  ],
  templateUrl: './demande-accepter-details.component.html',
  styleUrl: './demande-accepter-details.component.css',
})
export class DemandeAccepterDetailsComponent {
  idDemande: number | null = null;
  router: Router = inject(Router);
  demandes: any; // Liste  pour stocker les demandes acceptees
  demandeServiceService: DemandeServiceService = inject(DemandeServiceService);
  demande: SoumissionDto[] = [];
  demandeSoumise: SoumissionDto[] = [];
  rejectionReasons: string[] = ['Motif 1', 'Motif 2', 'Motif 3'];
  selectedRejectionReason: string | undefined;
  showRejectionModal: boolean = false;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.idDemande = +this.route.snapshot.paramMap.get('id')!;
    console.log('ID de la demande récuperé:', this.idDemande);
    if (this.idDemande) {
      this.getDemandeDetails(this.idDemande);
    } else {
      console.error('ID de la demande manquant ou invalide.');
    }
  }

  getDemandeDetails(idDemande: number): void {
    this.demandeServiceService.getDemandeById(idDemande).subscribe(
      (data: SoumissionDto) => {
        console.log('Détails de la demande récupérés :', data); //  log pour vérifier la récupération des données
        this.demandes = data; // Stocke les détails de la demande
        console.log('Infos : ', this.demandes);
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des détails de la demande',
          error
        );
      }
    );
  }

  // suite
  valideDemande(): void {
    if (this.idDemande !== null) {
      // Vérifie que idDemande n'est pas null
      this.demandeServiceService.validerDemande(this.idDemande).subscribe({
        next: (response) => {
          alert('Demande validée avec succès');
          this.router.navigate(['/customer/demandes/validees']);
          //this.demandesSoumises = this.demandesSoumises.filter(demande => demande.idDemande !== this.idDemande);
        },
        error: (err) => {
          console.error('Erreur lors de la validation de la demande', err);
        },
      });
    } else {
      console.error("L'ID de la demande est nul");
    }
  }
  ouvrirRejectionModal() {
    this.showRejectionModal = true;
  }

  rejeteDemande(): void {
    if (this.idDemande !== null) {
      this.demandeServiceService.rejeterDemande(this.idDemande).subscribe({
        next: (response) => {
          alert('Demande rejetée avec succès');
          this.router.navigate(['/customer/demandes/soumises']);
          this.demandeSoumise = this.demandeSoumise.filter(
            (demande) => demande.id !== this.idDemande
          );
        },
        error: (err: any) => {
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
