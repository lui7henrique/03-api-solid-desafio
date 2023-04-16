import { FastifyInstance } from 'fastify'
import { register } from './register'
import { verifyJwt } from '@/middlewares/verify-jwt'
import { search } from './search'
import { show } from './show'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/pets', search)
  app.get('/pets/:id', show)

  /* Authenticated */
  app.post('/pets', { onRequest: [verifyJwt] }, register)
}
