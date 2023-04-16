import { makeShowPetUseCase } from '@/use-cases/factories/make-show-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function show(request: FastifyRequest, reply: FastifyReply) {
  const showPetQuerySchema = z.object({
    id: z.string().nonempty().uuid(),
  })

  const { id } = showPetQuerySchema.parse(request.params)

  const showPetUseCase = makeShowPetUseCase()

  const { pet } = await showPetUseCase.execute({ id })

  return reply.status(200).send({
    pet,
  })
}
