import { PrismaPetsRepository } from '@/repositories/prisma/prisma-pets-repository'
import { SearchPetsUseCase } from '../search-pets'

export function makeSearchPetsUseCase() {
  const gymsRepository = new PrismaPetsRepository()
  const useCase = new SearchPetsUseCase(gymsRepository)

  return useCase
}
