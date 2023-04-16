import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { RegisterOrgUseCase } from '../register-org'

export function makeOrgRegisterUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const registerUseCase = new RegisterOrgUseCase(orgsRepository)

  return registerUseCase
}
