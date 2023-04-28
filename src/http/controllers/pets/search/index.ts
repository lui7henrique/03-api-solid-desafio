import { makeSearchPetsUseCase } from '@/use-cases/factories/make-search-pet-use-case'
import {
  Ambient,
  EnergyLevel,
  IndependencyLevel,
  Size,
  Type,
} from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const searchPetsQuerySchema = z.object({
    city: z.string().nonempty(),

    age: z.coerce.number().min(0).max(30).optional(),
    size: z.nativeEnum(Size).optional(),
    energy_level: z.nativeEnum(EnergyLevel).optional(),
    independency_level: z.nativeEnum(IndependencyLevel).optional(),
    ambient: z.nativeEnum(Ambient).optional(),
    type: z.nativeEnum(Type).optional(),

    page: z.coerce.number().min(1).default(1),
  })

  const {
    city,
    page,
    age,
    size,
    energy_level,
    ambient,
    independency_level,
    type,
  } = searchPetsQuerySchema.parse(request.query)

  const searchPetsUseCase = makeSearchPetsUseCase()

  const { pets } = await searchPetsUseCase.execute({
    city,
    page,

    age,
    size,
    energy_level,
    ambient,
    independency_level,
    type,
  })

  return reply.status(200).send({
    pets,
  })
}
