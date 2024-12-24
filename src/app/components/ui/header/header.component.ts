/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 11/12/2024 - 19:18:41
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/12/2024
    * - Author          : ASUS
    * - Modification    :
**/

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  title = 'keycloak-angular-example';
  keycloakService: KeycloakService;
  statusPanel: string = '';
  httpClient: HttpClient;

  constructor(keycloakService: KeycloakService, httpClient: HttpClient) {
    this.keycloakService = keycloakService;
    this.httpClient = httpClient;

    keycloakService.keycloakEvents$.subscribe({
      next(event) {
        if (event.type == KeycloakEventType.OnTokenExpired) {
          keycloakService.updateToken(20);
        }
      }
    });
  }

  public login(): void {

    this.keycloakService.login();

  }
  logout() {
    this.keycloakService.logout();
  }

}
