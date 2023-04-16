import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { PetsRepository } from '../pets-repository'

export class PrismaPetsRepository implements PetsRepository {
  async create(data: Prisma.PetCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async searchMany(city: string, page: number) {
    const pets = await prisma.pet.findMany({
      where: {
        Org: { city: { contains: city } },
      },
      skip: (page - 1) * 20,
      take: 20,
    })

    return pets
  }
}
