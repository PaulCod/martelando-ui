import { Injectable } from '@angular/core';
import { IUserService } from './iuser.service';
import { ICreateUserRequest, ICreateUserResponse, IUpdateUserRequest, IUpdateUserResponse } from './user.models';
import { HttpClient } from '@angular/common/http';
import { enviromnent } from '../../../../environment/enviromnent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  private readonly basePath = enviromnent.apiUrl;

  constructor(private http: HttpClient) { }

  save(request: ICreateUserRequest): Observable<ICreateUserResponse> {
    return this.http.post<ICreateUserResponse>(`${this.basePath}auth/register`, request)
  }

  update(request: IUpdateUserRequest): Observable<IUpdateUserResponse> {
    return this.http.put<IUpdateUserResponse>(`${this.basePath}auth/update`, request)
  }

  delete(): Observable<void> {
    return this.http.delete<void>(`${this.basePath}auth/delete`);
  }
}
