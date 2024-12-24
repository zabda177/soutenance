/**
    * @description      :
    * @author           : ASUS
    * @group            :
    * @created          : 20/12/2024 - 23:32:00
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/12/2024
    * - Author          : ASUS
    * - Modification    :
**/
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieceJointeService {

  private baseUrl = 'http://localhost:8081'; // Ajustez l'URL selon votre configuration

  constructor(private http: HttpClient) { }

  uploadFiles(files: File[], demandeId: number): Observable<any> {
    const formData = new FormData();

    files.forEach((file, index) => {
      formData.append('pieceJointeDtos[' + index + '].file', file);
      formData.append('pieceJointeDtos[' + index + '].libelle', file.name);

    });
    formData.append('demandeId', demandeId.toString());

    return this.http.post(`${this.baseUrl}/send-files?demandeId=${demandeId}`, formData);
  }


}
