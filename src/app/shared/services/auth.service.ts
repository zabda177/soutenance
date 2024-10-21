import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {dev_environment} from "../../../environments/development";
import {Login} from "../interfaces/security/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient:HttpClient = inject(HttpClient);
  API_URL = dev_environment.apiURL

  login(data: Login): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      `${this.API_URL}/authenticate`,
      data,
      { observe: 'response' }
    );
  }

}
