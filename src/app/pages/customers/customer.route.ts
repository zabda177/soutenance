import { PersonneMoraleComponent } from './../../components/demande-certificat/personne-morale/personne-morale.component';
import { DemandeRejeteComponent } from './demande-rejetees/demande-rejete.component';

/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 01/12/2024 - 23:38:43
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/12/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { VerificationComponent } from './verification/verification/verification.component';
import { Routes } from '@angular/router';
import { MainContentComponent } from '../../components/ui/main-content/main-content.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeComponent } from './../admin/demande/demande.component';
import { DemandeAccepterDetailsComponent } from './demandeAcceptee/demande-accepter-details/demande-accepter-details.component';
import { DemandeAccepterComponent } from './demandeAcceptee/demande-accepter/demande-accepter.component';
import { DemamndeDetailsComponent } from './demamnde-details/demamnde-details.component';
import { DemandeurComponent } from '../../components/demande-certificat/demandeur/demandeur.component';
import { KeycloakAuthGuard } from 'keycloak-angular';
export const CustomerRoute: Routes = [

  {
    path: 'personnePhysique',
    loadComponent: () => import('../../components/demande-certificat/demandeur/demandeur.component').then((m) => DemandeurComponent)
  },
  {
    path: 'personneMorale',
    loadComponent: () => import('./../../components/demande-certificat/personne-morale/personne-morale.component').then((m) => m.PersonneMoraleComponent),
  },

  {
    path: 'demande-details/:id',
    loadComponent: () => import('./demamnde-details/demamnde-details.component').then((m) => DemamndeDetailsComponent),
  },
  {
    path: 'demannde-accepter-detail',
    loadComponent: () => import('./demandeAcceptee/demande-accepter-details/demande-accepter-details.component').then((m) => m.DemandeAccepterDetailsComponent)
  },
  {
    path: 'demande-rejete',
    loadComponent: () => import('./demande-rejetees/demande-rejete.component').then((m) => m.DemandeRejeteComponent),
  },
  {
    path: 'demande',
    loadComponent: () => import('./../admin/demande/demande.component').then((m) => m.DemandeComponent),
  },


  {
    path: 'home',
    loadComponent: () =>
      import('./../../components/ui/main-content/main-content.component').then((m) => m.MainContentComponent),
  },

  {
    path: 'demandes',
    loadComponent: () =>
      import('./demande-agrement-customer/demande-agrement-customer.component').then((m) => m.DemandeAgrementCustomerComponent),
  },

  {
    path: 'verification',
    loadComponent: () =>
      import('./verification/verification/verification.component').then(
        (m) => m.VerificationComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [KeycloakAuthGuard]
  },

  {
    path: 'demandes/acceptees',
    loadComponent: () =>
      import(
        './demandeAcceptee/demande-accepter/demande-accepter.component'
      ).then((m) => m.DemandeAccepterComponent),
  },

  /* {
    path: 'demandes-detail/:id',
    loadComponent: () => import('').then((m) => m.DemamndeDetailsComponent),
  },

  {
    path: 'demandes-acceptees/:id',
    loadComponent: () =>
      import(
        './demandeAcceptées/demande-accepter-details/demande-accepter-details.component'
      ).then((m) => m.DemandeAccepterDetailsComponent),
  },
  {
    path: 'demandes/validees',
    loadComponent: () =>
      import('./demandeValides/demande-valide/demande-valide.component').then(
        (m) => m.DemandeValideComponent
      ),
  },
  {
    path: 'demandes-validees/:id',
    loadComponent: () =>
      import(
        './demandeValides/demande-valide-detail/demande-valide-detail.component'
      ).then((m) => m.DemandeValideDetailComponent),
  },

  },*/

];
