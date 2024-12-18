import { DemandeAgrementCustomerComponent } from './pages/customers/demande-agrement-customer/demande-agrement-customer.component';
import { FichierPermisComponent } from './components/demande-certificat/fichier-permis/fichier-permis.component';
/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 04/10/2024 - 14:48:45
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Routes } from '@angular/router';
import { AdminRoute } from './pages/admin/admin.route';
import { CustomerRoute } from './pages/customers/customer.route';

import { FichierConcessionComponent } from './components/demande-certificat/fichier-concession/fichier-concession.component';

import { FichierGuideComponent } from './components/demande-certificat/fichier-guide/fichier-guide.component';

import { FichierCommercialeComponent } from './components/demande-certificat/fichier-commerciale/fichier-commerciale.component';
import { VerificationComponent } from './pages/customers/verification/verification/verification.component';
import { DemandeValideComponent } from './pages/customers/demandeValide/demande-valide/demande-valide.component';
import { DemandeAccepterComponent } from './pages/customers/demandeAcceptee/demande-accepter/demande-accepter.component';
import { DemandeAccepterDetailsComponent } from './pages/customers/demandeAcceptee/demande-accepter-details/demande-accepter-details.component';
import { DashboardComponent } from './pages/customers/dashboard/dashboard.component';
import { HttpClient } from '@angular/common/http';
import { DemandeComponent } from './pages/admin/demande/demande.component';
import { MenuComponent } from './components/ui/menu/menu.component';
import { DemandeRejeteComponent } from './pages/customers/demande-rejetees/demande-rejete.component';
import { DemamndeDetailsComponent } from './pages/customers/demamnde-details/demamnde-details.component';
export const routes: Routes = [




  {
    path: 'demande-details/:id',
    component: DemamndeDetailsComponent,
  },

  {
    path: 'demande-accepter-details',
    component: DemandeAccepterDetailsComponent,
  },

  {
    path: 'demande-rejete',
    component: DemandeRejeteComponent,
  },
  {
    path: 'demandeAccepteDetails',
    component: DemandeAccepterDetailsComponent,
  },
  {
    path: 'demande',
    component: DemandeComponent,
  },
  {
    path: 'demandes/acceptees',
    component: DemandeAccepterComponent
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'fichierGuide',
    component: FichierGuideComponent,
  },


  {
    path: 'fichierCommerciale',
    component: FichierCommercialeComponent,
  },

  {
    path: 'permis',
    component: FichierPermisComponent,
  },
  {
    path: 'fichierConcesssion',
    component: FichierConcessionComponent,
  },

  {
    path: 'verification',
    component: VerificationComponent,
  },
  {
    path: 'demandes',
    component: DemandeAgrementCustomerComponent,
  },

  {
    path: 'admin',
    children: AdminRoute,
  },
  {
    path: 'customer',
    children: CustomerRoute,
  },
  {
    path: '',
    redirectTo: '/customer/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/customer/home', // Redirection en cas de route non trouvée
  },
];
