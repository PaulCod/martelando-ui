import { Observable } from "rxjs";
import { ICreateProductRequest, ICreateProductResponse, IFindAllProductsResponse, IFindProductByIdRequest, IUpdateProductRequest, IUpdateProductResponse } from "./product.models";

export interface IProductService {
  create(request: ICreateProductRequest): Observable<ICreateProductResponse>

  update(request: IUpdateProductRequest): Observable<IUpdateProductResponse>

  findAllProducts(): Observable<IFindAllProductsResponse[]>

  findByProductId(id: string): Observable<ICreateProductResponse>
}
