/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 26/11/2024 - 13:19:57
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/11/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component } from '@angular/core';
import { DashboardStats } from '../../../components/demande-certificat/model/demande';
import { DemandeServiceService } from '../../../components/demande-certificat/service/demande-service.service';
import { MenuComponent } from '../../../components/ui/menu/menu.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  stats: DashboardStats | null = null;
  username: string = '';
  constructor(private demandeService: DemandeServiceService,
    private keycloakService: KeycloakService,
  ) { }


  /* async ngOnInit(): Promise<void> {
    if (await this.keycloakService.isLoggedIn()) {
      this.username = await this.keycloakService.getUsername();
      this.loadDashboardData();
    } else {
      this.router.navigate(['/']);
    }
  }

  private loadDashboardData(): void {
    this.demandeService.getDashboardStats().subscribe((data) => {
      this.stats = data;
    });
  }

  // Ajout de la méthode logout

 */
  ngOnInit(): void {
    this.demandeService.getDashboardStats().subscribe((data) => {
      this.stats = data;
    });
  }
  public logout(): void {
    this.keycloakService.logout(window.location.origin);
  }
}
