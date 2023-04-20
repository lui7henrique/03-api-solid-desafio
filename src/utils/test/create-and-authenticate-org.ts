import { prisma } from '@/lib/prisma'
import { faker } from '@faker-js/faker'
import { hash } from 'bcryptjs'

import { FastifyInstance } from 'fastify'
import request from 'supertest'

export async function createAndAuthenticateOrg(app: FastifyInstance) {
  const [email, password, city] = [
    faker.internet.email(),
    faker.internet.password(),
    faker.lorem.word(),
  ]

  await prisma.org.create({
    data: {
      address: faker.address.street(),
      neighborhood: faker.address.street(),
      number: faker.address.buildingNumber(),
      state: 'AC',
      postalCode: faker.address.zipCodeByState('#####-###'),
      responsible_name: faker.name.fullName(),
      whatsapp_number: faker.phone.number(),
      city,
      email,
      password_hash: await hash(password, 6),
    },
  })

  const authResponse = await request(app.server).post('/login').send({
    email,
    password,
  })

  const { token } = authResponse.body

  return {
    token,
    city,
  }
}
