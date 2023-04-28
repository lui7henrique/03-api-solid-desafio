import { prisma } from '@/lib/prisma'
import {
  Ambient,
  EnergyLevel,
  IndependencyLevel,
  Prisma,
  Size,
  Type,
} from '@prisma/client'
import { PetsRepository } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async findById(id: string) {
    const pet = await prisma.pet.findFirst({
      where: { id },
    })

    return pet
  }

  async searchMany(
    city: string,
    page: number,

    age?: number,
    size?: Size,
    energy_level?: EnergyLevel,
    ambient?: Ambient,
    independency_level?: IndependencyLevel,
    type?: Type,
  ) {
    const pets = await prisma.pet.findMany({
      where: {
        Org: { city: { contains: city } },

        age: { equals: age },
        size: { equals: size },
        energy_level: { equals: energy_level },
        ambient: { equals: ambient },
        independency_level: { equals: independency_level },
        type: { equals: type },
      },
      skip: (page - 1) * 20,
      take: 20,
    })

    return pets
  }
}
