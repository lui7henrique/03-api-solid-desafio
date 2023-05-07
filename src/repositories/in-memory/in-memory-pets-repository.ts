import {
  Ambient,
  EnergyLevel,
  IndependencyLevel,
  Pet,
  Prisma,
  Size,
} from '@prisma/client'
import { randomUUID } from 'node:crypto'
import { PetsRepository } from '../pets-repository'

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = []

  async findById(id: string) {
    const pet = this.items.find((item) => item.id === id)

    return pet ?? null
  }

  async searchMany(
    city: string,
    page: number,
    age?: number | undefined,
    size?: Size | undefined,
    energy_level?: EnergyLevel | undefined,
    ambient?: Ambient | undefined,
    independency_level?: IndependencyLevel | undefined,
  ) {
    const filtered = this.items.slice((page - 1) * 20, page * 20)

    return filtered
  }

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet: Pet = {
      id: randomUUID(),
      name: data.name,

      size: data.size,
      age: data.age,
      ambient: data.ambient,
      description: data.description,
      energy_level: data.energy_level,
      independency_level: data.independency_level,
      type: data.type,

      orgId: data.orgId,

      created_at: new Date(),
    }

    this.items.push(pet)

    return pet
  }
}
