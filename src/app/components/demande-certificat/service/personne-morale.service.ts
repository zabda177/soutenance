/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 22/12/2024 - 12:20:03
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/12/2024
    * - Author          : ASUS
    * - Modification    :
**/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonneMoraleService {

  private baseUrl = 'http://127.0.0.1:8081/api';
  constructor(private httpClient: HttpClient) { } // Injection d'HttpClient

  getDetailsById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/demande/details/${id}`);
  }
}
