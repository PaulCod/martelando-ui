import { User } from "../../../models/User"

export interface ICreateProductRequest {
  title: string
  imageUrl: string
  initialOffer: number
  description: string
  status: string
  startAt: Date
  endAt: Date
}

export interface IUpdateProductRequest {
  id: number
  title: string
  description: string
  status: string
  endAt: Date
}

export interface ICreateProductResponse {
  id: number
  title: string
  imageUrl: string
  initialOffer: number
  description: string
  status: string
  startAt: Date
  endAt: Date
  owner: User
}

export interface IUpdateProductResponse {
  id: number
  title: string
  imageUrl: string
  initialOffer: number
  description: string
  status: string
  startAt: Date
  endAt: Date
  owner: User
}

export interface IFindAllProductsResponse {
  id: number
  title: string
  imageUrl: string
  initialOffer: number
  description: string
  status: string
  startAt: Date
  endAt: Date
  owner: User
}

