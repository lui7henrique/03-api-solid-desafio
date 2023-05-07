import { makeProfileUseCase } from '@/use-cases/factories/make-profile-use-case'

import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  const profileUseCase = makeProfileUseCase()

  const { org } = await profileUseCase.execute({
    orgId: request.user.sub,
  })

  return reply.status(200).send(org)
}
