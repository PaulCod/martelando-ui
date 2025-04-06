import { Injectable } from '@angular/core';
import { enviromnent } from '../../../../environment/enviromnent';
import { HttpClient } from '@angular/common/http';
import { IProductService } from './iproduct.service';
import { Observable } from 'rxjs';
import { ICreateProductRequest, ICreateProductResponse, IUpdateProductRequest, IUpdateProductResponse, IFindAllProductsResponse } from './product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService{

  private readonly basePath = enviromnent.apiUrl

  constructor(private http: HttpClient) { }

  create(request: ICreateProductRequest): Observable<ICreateProductResponse> {
    return this.http.post<ICreateProductResponse>(`${this.basePath}products`, request)
  }

  update(request: IUpdateProductRequest): Observable<IUpdateProductResponse> {
    return this.http.post<IUpdateProductResponse>(`${this.basePath}products`, request)
  }

  findAllProducts(): Observable<IFindAllProductsResponse[]> {
    return this.http.get<IFindAllProductsResponse[]>(`${this.basePath}products`)
  }

}
