import { Injectable } from '@angular/core';
import { IAuthService } from './iauth.service';
import { ILoginRequest, ILoginResponse } from './auth.models';
import { enviromnent } from '../../../../environment/enviromnent';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService{

  private readonly basePath = enviromnent.apiUrl

  constructor(private http: HttpClient) { }

  login(request: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(`${this.basePath}auth/login`, request)
  }
}
