import { User } from "../../../models/User"

export interface ICreateOfferRequest {
  productId: number
  value: number
}

export interface ICreateOfferResponse {
  id: number
  value: number
  createdAt: Date
  productId: number
  owner: User
}

export interface IUpdateOfferRequest {
  id: number
  value: number
}

export interface IUpdateOfferResponse {
  id: number
  value: number
  createdAt: Date
  productId: number
  owner: User
}

export interface IFindOffersByProductIdResponse {
  id: number
  value: number
  createdAt: Date
  productId: number
  owner: User
}
