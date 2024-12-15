/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 01/12/2024 - 02:50:07
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/12/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component, inject } from '@angular/core';
import { MenuComponent } from '../../../../components/ui/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { SoumissionDto } from '../../../../components/demande-certificat/model/demande';
import { Router } from '@angular/router';
import { DemandeServiceService } from '../../../../components/demande-certificat/service/demande-service.service';

@Component({
  selector: 'app-demande-valide',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
  ],
  templateUrl: './demande-valide.component.html',
  styleUrl: './demande-valide.component.css',
})
export class DemandeValideComponent {
  demandeValide: SoumissionDto[] = [];
  router: Router = inject(Router);
  demandeServiceService: DemandeServiceService = inject(DemandeServiceService);

  ngOnInit(): void {
    this.getDemandeValide();
  }

  getDemandeValide(): void {
    this.demandeServiceService.getDemandeValide().subscribe(
      (data: SoumissionDto[]) => {
        this.demandeValide = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des demandes', error);
      }
    );
  }
  afficherDetailsValidees(demande: any): void {
    console.log('Demande:', demande); // Inspectez l'objet pour vérifier l'ID
    if (demande && demande.id) {
      // Utilisez la propriété appropriée pour l'ID
      this.demandeServiceService
        .getDemandeById(demande.id)
        .subscribe((response) => {
          console.log('Liste', response);
        });
      this.router.navigate(['/customer/demande-valide', demande.id]);
      console.log(
        'Tentative de redirection vers les détails de la demande avec ID:',
        demande.id
      );
    } else {
      console.error('ID de la demande manquant ou indéfini.', demande);
    }
  }
}
