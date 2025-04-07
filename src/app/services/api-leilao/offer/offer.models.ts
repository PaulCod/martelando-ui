import { User } from "../../../models/User"
import { ICreateProductResponse } from "../product/product.models"

export interface ICreateOfferRequest {
  product_id: number
  amount: number,
  status: string
}

export interface ICreateOfferResponse {
  id: number
  amount: number
  createdAt: Date
  product: ICreateOfferResponse
  bidder: User
}

export interface IUpdateOfferRequest {
  id: number
  amount: number
}

export interface IUpdateOfferResponse {
  id: number
  amount: number
  createdAt: Date
  product: ICreateProductResponse
  bidder: User
}

export interface IFindOffersByProductIdResponse {
  id: number
  amount: number
  createdAt: Date
  product: ICreateProductResponse
  bidder: User
}
