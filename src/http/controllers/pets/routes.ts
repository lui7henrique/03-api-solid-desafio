import { FastifyInstance } from 'fastify'
import { register } from './register'
import { verifyJwt } from '@/middlewares/verify-jwt'
import { search } from './search'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', search)

  /* Authenticated */
  app.post('/pets', { onRequest: [verifyJwt] }, register)
}
