import { Observable } from "rxjs"
import {
  ICreateOfferRequest,
  ICreateOfferResponse,
  IUpdateOfferRequest,
  IUpdateOfferResponse,
  IFindOffersByProductIdResponse
} from "./offer.models"

export interface IOfferService {
  create(request: ICreateOfferRequest): Observable<ICreateOfferResponse>

  update(request: IUpdateOfferRequest): Observable<IUpdateOfferResponse>

  delete(id: number): Observable<void>

  findByProductId(productId: number): Observable<IFindOffersByProductIdResponse[]>
}
