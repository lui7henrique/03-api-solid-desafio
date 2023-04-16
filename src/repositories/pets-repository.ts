import {
  Prisma,
  Pet,
  Size,
  EnergyLevel,
  Ambient,
  IndependencyLevel,
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
  ): Promise<Pet[]>
}
