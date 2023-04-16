import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface ShowPetUseCaseRequest {
  id: string
}

interface ShowPetUseCaseResponse {
  pet: Pet | null
}

export class ShowPetUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    id,
  }: ShowPetUseCaseRequest): Promise<ShowPetUseCaseResponse> {
    if (!id) {
      throw new ResourceNotFoundError()
    }

    const pet = await this.petsRepository.findById(id)

    return { pet }
  }
}
