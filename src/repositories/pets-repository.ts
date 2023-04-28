import {
  Prisma,
  Pet,
  Size,
  EnergyLevel,
  Ambient,
  IndependencyLevel,
  Type,
} from '@prisma/client'

export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>

  searchMany(
    city: string,
    page: number,

    age?: number,
    size?: Size,
    energy_level?: EnergyLevel,
    ambient?: Ambient,
    independency_level?: IndependencyLevel,
    type?: Type,
  ): Promise<Pet[]>

  findById(id: string): Promise<Pet | null>
}
