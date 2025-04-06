import { Observable } from "rxjs";
import { ILoginRequest, ILoginResponse } from "./auth.models";

export interface IAuthService{
  login(request: ILoginRequest): Observable<ILoginResponse>;
}
