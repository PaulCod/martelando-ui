export interface ICreateUserRequest {
  name: string
  email: string
  phone: string
  password: string
}

export interface IUpdateUserRequest {
  name: string
  phone: string
  password: string
}

export interface ICreateUserResponse {
  name: string
  email: string
  phone: string
}

export interface IUpdateUserResponse {
  name: string
  email: string
  phone: string
}
