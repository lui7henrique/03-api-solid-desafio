import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repository'
import { CityIsRequiredError } from '../errors/city-is-required-errror'

interface SearchUseCaseRequest {
  city: string
  page: number
}

interface SearchUseCaseResponse {
  pets: Array<Pet>
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
    page,
  }: SearchUseCaseRequest): Promise<SearchUseCaseResponse> {
    if (!city) {
      throw new CityIsRequiredError()
    }

    const pets = await this.petsRepository.searchMany(city, page)

    return { pets }
  }
}
