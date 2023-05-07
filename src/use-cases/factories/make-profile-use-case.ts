import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { ProfileUseCase } from '../profile'

export function makeProfileUseCase() {
  const orgsRepository = new PrismaOrgsRepository()
  const profileUseCase = new ProfileUseCase(orgsRepository)

  return profileUseCase
}
