import {
  Ambient,
  EnergyLevel,
  IndependencyLevel,
  Pet,
  Size,
  Type,
} from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repository'
import { CityIsRequiredError } from '../errors/city-is-required-errror'

interface SearchUseCaseRequest {
  city: string
  page: number

  age?: number
  size?: Size
  energy_level?: EnergyLevel
  ambient?: Ambient
  independency_level?: IndependencyLevel
  type?: Type
}

interface SearchUseCaseResponse {
  pets: Array<Pet>
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetsRepository) {}

  async execute({
    city,
    page,

    age,
    size,
    energy_level,
    ambient,
    independency_level,
    type,
  }: SearchUseCaseRequest): Promise<SearchUseCaseResponse> {
    if (!city) {
      throw new CityIsRequiredError()
    }

    const pets = await this.petsRepository.searchMany(
      city,
      page,

      age,
      size,
      energy_level,
      ambient,
      independency_level,
      type,
    )

    return { pets }
  }
}
