import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviromnent } from '../../../../environment/enviromnent';
import {
  ICreateOfferRequest,
  ICreateOfferResponse,
  IUpdateOfferRequest,
  IUpdateOfferResponse,
  IFindOffersByProductIdResponse
} from './offer.models';
import { IOfferService } from './ioffer.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService implements IOfferService {

  private readonly basePath = enviromnent.apiUrl;

  constructor(private http: HttpClient) {}

  create(request: ICreateOfferRequest): Observable<ICreateOfferResponse> {
    return this.http.post<ICreateOfferResponse>(`${this.basePath}offers`, request);
  }

  update(request: IUpdateOfferRequest): Observable<IUpdateOfferResponse> {
    return this.http.put<IUpdateOfferResponse>(`${this.basePath}offers`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}offers/${id}`);
  }

  findByProductId(productId: number): Observable<IFindOffersByProductIdResponse[]> {
    const params = new HttpParams().set('productId', productId);
    return this.http.get<IFindOffersByProductIdResponse[]>(`${this.basePath}offers`, { params });
  }
}
