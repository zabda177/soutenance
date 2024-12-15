/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 11/12/2024 - 20:33:58
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/12/2024
    * - Author          : ASUS
    * - Modification    :
**/


import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Ajoutez cette importation

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient() // Ajoutez cette ligne
  ]
};
