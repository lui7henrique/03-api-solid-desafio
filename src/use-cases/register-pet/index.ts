import { Pet } from '@prisma/client'
import { RegisterPetFields } from '@/http/controllers/pets/register'
import { PetsRepository } from '@/repositories/pets-repository'
import { OrgsRepository } from '@/repositories/orgs-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

interface RegisterUseCaseRequest extends RegisterPetFields {
  orgId: string
}

interface RegisterUseCaseResponse {
  pet: Pet
}

export class RegisterPetUseCase {
  constructor(
    private petsRepository: PetsRepository,
    private orgsRepository: OrgsRepository,
  ) {}

  async execute(
    input: RegisterUseCaseRequest,
  ): Promise<RegisterUseCaseResponse> {
    const org = await this.orgsRepository.findById(input.orgId)

    if (!org) {
      throw new ResourceNotFoundError()
    }

    const pet = await this.petsRepository.create(input)

    return { pet }
  }
}
