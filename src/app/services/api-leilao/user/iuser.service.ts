import { Observable } from "rxjs";
import { ICreateUserRequest, ICreateUserResponse, IUpdateUserRequest, IUpdateUserResponse } from "./user.models";

export interface IUserService {
  save(request: ICreateUserRequest): Observable<ICreateUserResponse>;

  update(request: IUpdateUserRequest): Observable<IUpdateUserResponse>;

  delete(): Observable<void>;

  findByUserId(): Observable<ICreateUserResponse>;
}
