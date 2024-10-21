import {Routes} from "@angular/router";
import {MainContentComponent} from "../../components/ui/main-content/main-content.component";

export const CustomerRoute: Routes = [
  {
    path: 'demandes',
    loadComponent: () => import('./demande-agrement-customer/demande-agrement-customer.component').then(m => m.DemandeAgrementCustomerComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./../../components/ui/main-content/main-content.component').then(m => m.MainContentComponent)
  }
]
