/**
 * @description      :
 * @author           : ASUS
 * @group            :
 * @created          : 06/12/2024 - 23:36:44
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 06/12/2024
 * - Author          : ASUS
 * - Modification    :
 **/
import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import {
  Commune,
  DashboardStats,
  Province,
  Region,
  SoumissionDto,
} from '../model/demande';

import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DemandeServiceService {
  private baseUrl = 'http://127.0.0.1:8081/api';
  codeDemande = uuidv4();


  private demandeSoumise: SoumissionDto | null = null;
  constructor(private http: HttpClient) { }




  soumission(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData, { responseType: 'text' });
  }
  getRegions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/region`);
  }
  getProvinceByRegion(regionId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/province/by-region/id?regionId=${regionId}`
    );
  }
  getCommuneByProvince(provinceId: number): Observable<any[]> {
    `${this.baseUrl}/commune/province/${provinceId}`;
    return this.http.get<any[]>(
      `${this.baseUrl}/commune/provincce/${provinceId}`
    );
  }
  setDemandeSoumise(data: SoumissionDto): void {
    this.demandeSoumise = data;
  }

  getDemandeSoumise(): SoumissionDto | null {
    return this.demandeSoumise;
  }

  clearDemandeData(): void {
    this.demandeSoumise = null;
  }

  login(numeroDemande: number, codeDemande: String): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/demande/demande${numeroDemande}/$codeDemande}`
    );
  }
  getDemandeDetailsVerification(
    numeroDemande: number,
    codeDemande: string
  ): Observable<SoumissionDto> {
    return this.http.get<SoumissionDto>(
      `${this.baseUrl}/demande${numeroDemande}/${codeDemande}`
    );
  }

  getDemande(): Observable<any> {
    return this.http.get<[]>(`${this.baseUrl}/demande`);
  }

  getDemandeEncours(): Observable<SoumissionDto[]> {
    return this.http.get<SoumissionDto[]>(`${this.baseUrl}/demande/listSoumission`);
    console.log('URL appelée:', `${this.baseUrl}/encours`);
  }

  getPersonnePhysiqueById(id: number): Observable<SoumissionDto> {
    return this.http.get<SoumissionDto>(`${this.baseUrl}/demande/personnePhysique${id}`);
  }

  getDemandeById(id: number): Observable<SoumissionDto> {
    return this.http.get<SoumissionDto>(`${this.baseUrl}/demande/demande-details/${id}`);
  }
  accepterDemande(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/demande/${id}/accepte`, {});
  }
  rejeterDemande(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/demande/${id}/rejete`, {});
  }
  validerDemande(id: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/demande/${id}/valide`, {});
  }
  getDemandeAccepte(): Observable<SoumissionDto[]> {
    return this.http.get<SoumissionDto[]>(`${this.baseUrl}/demande/accepte`);
  }
  getDemandeRejete(): Observable<SoumissionDto[]> {
    return this.http.get<SoumissionDto[]>(`${this.baseUrl}/demande/rejete`);
  }
  getDemandeValide(): Observable<SoumissionDto[]> {
    return this.http.get<SoumissionDto[]>(`${this.baseUrl}/demande/valide`);
  }

  getDashboardStats(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.baseUrl}/demande/stats`);
  }

  getRegionsListe(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.baseUrl}/region`);
  }

  getRegion(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.baseUrl}/region/${id}`);
  }
  createRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(`${this.baseUrl}/region`, region);
  }

  updateRegion(id: number, region: Region): Observable<Region> {
    return this.http.post<Region>(`${this.baseUrl}/region/${id}`, region);
  }

  deleteRegion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/region/${id}`);
  }

  getCommunes(): Observable<Commune[]> {
    return this.http.get<Commune[]>(`${this.baseUrl}/commune`);
  }

  getCommune(id: number): Observable<Commune> {
    return this.http.get<Commune>(`${this.baseUrl}/commune/${id}`);
  }

  createCommune(commune: Commune): Observable<Commune> {
    return this.http.post<Commune>(`${this.baseUrl}/commune`, commune);
  }

  updateCommune(id: number, commune: Commune): Observable<Commune> {
    return this.http.post<Commune>(`${this.baseUrl}/commune`, commune);
  }

  deleteCommune(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/commune/${id}`);
  }

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.baseUrl}/province`);
  }
  getProvince(id: number): Observable<Province> {
    return this.http.get<Province>(`${this.baseUrl}/provinces/${id}`);
  }

  createProvince(province: Province): Observable<Province> {
    return this.http.post<Province>(`${this.baseUrl}/provinces`, province);
  }
  updateProvince(id: number, province: Province): Observable<Province> {
    return this.http.post<Province>(
      `${this.baseUrl}/provinces/${id}`,
      province
    );
  }
  deleteProvince(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/provinces/${id}`);
  }


  envoyerDemande(formData: FormData): Observable<any> {
    const headers = new HttpHeaders(); // Pas besoin d'en-têtes supplémentaires pour FormData
    return this.http.post(
      this.baseUrl + '/demande/soumission',
      formData,
      { headers }
    );
  }







}
