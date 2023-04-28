import { makeRegisterPetUseCase } from '@/use-cases/factories/make-register-pet-use-case'
import {
  Ambient,
  EnergyLevel,
  IndependencyLevel,
  Size,
  Type,
} from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export type RegisterPetFields = {
  name: string
  description: string
  age: number
  size: Size
  energy_level: EnergyLevel
  independency_level: IndependencyLevel
  ambient: Ambient
  type: Type
}

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerPetParamsSchema = z.object({
    orgId: z.string().uuid(),
  })

  const { orgId } = registerPetParamsSchema.parse({
    orgId: request.user.sub,
  })

  const registerPetBodySchema = z.object({
    name: z.string().nonempty(),
    description: z.string().nonempty().max(300),
    age: z.number().min(0).max(30),
    size: z.nativeEnum(Size),
    energy_level: z.nativeEnum(EnergyLevel),
    independency_level: z.nativeEnum(IndependencyLevel),
    ambient: z.nativeEnum(Ambient),
    type: z.nativeEnum(Type),
  })

  const fields = registerPetBodySchema.parse(request.body)

  const registerPetUseCase = makeRegisterPetUseCase()

  await registerPetUseCase.execute({
    ...fields,
    orgId,
  })

  return reply.status(201).send()
}
