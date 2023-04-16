import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { ShowPetUseCase } from '../show-pet'

export function makeShowPetUseCase() {
  const petsRepository = new PrismaPetsRepository()
  const useCase = new ShowPetUseCase(petsRepository)

  return useCase
}
