/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 12/12/2024 - 05:50:25
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/12/2024
    * - Author          : ASUS
    * - Modification    :
**/




import { Component, inject } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Router } from '@angular/router';
import { MenuComponent } from '../../../components/ui/menu/menu.component';
import { DemandeServiceService } from '../../../components/demande-certificat/service/demande-service.service';
import { SoumissionDto } from '../../../components/demande-certificat/model/demande';

@Component({
  selector: 'app-demande-rejete',
  standalone: true,
  imports: [
    MenuComponent,
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    CommonModule,
  ],
  templateUrl: './demande-rejete.component.html',
  styleUrl: './demande-rejete.component.css',
})
export class DemandeRejeteComponent {
  demandeRejetes: any; //Liste des demandes Rejete
  router: Router = inject(Router);
  demandeServiceService: DemandeServiceService = inject(DemandeServiceService);

  constructor() { }
  ngOnInit(): void {
    this.getDemandeRejete();
  }

  getDemandeRejete(): void {
    this.demandeServiceService.getDemandeRejete().subscribe(
      (data: SoumissionDto[]) => {
        this.demandeRejetes = data;
      },
      (error) => {
        console.error('Erreur lors de la recuperation des demandes', error);
      }
    );
  }
}

