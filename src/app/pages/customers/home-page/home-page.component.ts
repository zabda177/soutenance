/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 04/10/2024 - 13:59:58
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 04/10/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/ui/header/header.component';
import { MainContentComponent } from '../../../components/ui/main-content/main-content.component';
import { FooterComponent } from '../../../components/ui/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CreationEtablissementComponent } from '../../../components/demande-certificat/creation-etablissement/creation-etablissement.component';
import { DemandeLicenceComponent } from '../../../components/demande-certificat/demande-licence/demande-licence.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    CreationEtablissementComponent,
    DemandeLicenceComponent,
    RouterOutlet,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
