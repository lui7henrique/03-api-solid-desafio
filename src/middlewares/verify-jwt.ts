import { FastifyReply, FastifyRequest } from 'fastify'

export async function verifyJwt(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    console.log({teste: request.headers})
    return reply.status(401).send({ message: 'Unauthorized.' })
  }
}
