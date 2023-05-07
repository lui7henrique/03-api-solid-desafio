import { OrgsRepository } from '@/repositories/orgs-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
import { Org } from '@prisma/client'

interface ProfileUseCaseRequest {
  orgId: string
}

interface ProfileUseCaseResponse {
  org: Org
}

export class ProfileUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    orgId,
  }: ProfileUseCaseRequest): Promise<ProfileUseCaseResponse> {
    const org = await this.orgsRepository.findById(orgId)

    if (!org) {
      throw new ResourceNotFoundError()
    }

    return { org }
  }
}
