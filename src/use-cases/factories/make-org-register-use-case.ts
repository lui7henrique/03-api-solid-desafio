import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { RegisterUseCase } from '../register-org'

export function makeOrgRegisterUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const registerUseCase = new RegisterUseCase(orgsRepository)

  return registerUseCase
}
