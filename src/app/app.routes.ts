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
import { DemandeLicenceComponent } from './components/demande-certificat/demande-licence/demande-licence.component';
import { PecheComponent } from './components/demande-certificat/peche/peche.component';
import { FichierConcessionComponent } from './components/demande-certificat/fichier-concession/fichier-concession.component';
import { GuideComponent } from './components/demande-certificat/guide/guide.component';
import { FichierGuideComponent } from './components/demande-certificat/fichier-guide/fichier-guide.component';
import { CommercialeComponent } from './components/demande-certificat/commerciale/commerciale.component';
import { FichierCommercialeComponent } from './components/demande-certificat/fichier-commerciale/fichier-commerciale.component';
import { AgrementComponent } from './components/demande-certificat/agrement/agrement.component';

export const routes: Routes = [

  {
    path: 'demandeLicence',
    component: DemandeLicenceComponent,
  },
  {
    path:'peche',
    component: PecheComponent,
  },
  {
    path:'fichierConcesssion',
    component: FichierConcessionComponent,
  },
  {
    path:'guide',
    component: GuideComponent,
  },
  {
    path: 'fichierGuide',
    component: FichierGuideComponent,
  },
  {
    path:'commerciale',
    component: CommercialeComponent,
  },
  {
    path:'fichierCommerciale',
    component: FichierCommercialeComponent,
  },
  {
    path:'agrement',
    component: AgrementComponent,
  },
  {
    path:'permis',
    component: FichierPermisComponent,
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
