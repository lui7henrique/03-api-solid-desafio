import { FastifyInstance } from 'fastify'

import { register } from './register'
import { authenticate } from './authenticate'
import { profile } from './profile'
import { verifyJwt } from '@/middlewares/verify-jwt'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs', register)

  app.post('/login', authenticate)

  /* Authenticated */
  app.get('/profile', { onRequest: [verifyJwt] }, profile)
}
