import { OrgAlreadyExistsError } from '@/use-cases/errors/org-already-exists-errors'
import { makeOrgRegisterUseCase } from '@/use-cases/factories/make-org-register-use-case'
import { State } from '@prisma/client'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export type RegisterOrgFields = {
  responsible_name: string
  email: string
  postalCode: string

  address: string
  neighborhood: string
  number: string
  city: string
  state: State

  whatsapp_number: string
  password: string
}

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    responsible_name: z.string().nonempty(),
    email: z.string().nonempty().email(),
    postalCode: z.string().nonempty(),
    address: z.string().nonempty(),
    neighborhood: z.string().nonempty(),
    number: z.string().nonempty(),
    city: z.string().nonempty(),
    state: z.nativeEnum(State),

    whatsapp_number: z.string().nonempty(),
    password: z.string().min(6),
  })

  try {
    const fields = registerBodySchema.parse(request.body)
    const registerUseCase = makeOrgRegisterUseCase()

    await registerUseCase.execute(fields)
  } catch (error) {
    if (error instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: error.message })
    }

    throw error
  }

  return reply.status(201).send()
}
