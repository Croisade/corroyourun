export type RegisterResponse = {
  accountId: string
  email: string
  password: string
  firstName: string
  lastName: string
  refreshToken: string
  createdAt: CreatedAt
  updatedAt: UpdatedAt
}

type CreatedAt = {
  T: number
  I: number
}

type UpdatedAt = {
  T: number
  I: number
}
