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

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  stats: DashboardStats | null = null;

  constructor(private demandeService: DemandeServiceService) { }

  ngOnInit(): void {
    this.demandeService.getDashboardStats().subscribe((data) => {
      this.stats = data;
    });
  }
}
