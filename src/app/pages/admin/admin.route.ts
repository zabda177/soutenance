import {Routes} from "@angular/router";

export const AdminRoute: Routes = [
  {
    path: 'demandes',
    loadChildren: () => import('./demande/demande.component').then(m => m.DemandeComponent)
  }
]
