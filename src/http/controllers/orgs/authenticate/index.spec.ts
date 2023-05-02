import { app } from '@/app'
import { prisma } from '@/lib/prisma'
import { faker } from '@faker-js/faker'
import { hash } from 'bcryptjs'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Authenticate org (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to authenticate org', async () => {
    const password = faker.internet.password()

    const org = await prisma.org.create({
      data: {
        address: faker.address.street(),
        neighborhood: faker.address.street(),
        number: faker.address.buildingNumber(),
        state: 'AC',
        postal_code: faker.address.zipCodeByState('#####-###'),
        responsible_name: faker.name.fullName(),
        password_hash: await hash(password, 6),
        whatsapp_number: faker.phone.number(),
        city: faker.address.city(),
        email: faker.internet.email(),
      },
    })

    const { statusCode } = await request(app.server).post('/login').send({
      email: org.email,
      password,
    })

    expect(statusCode).toEqual(200)
  })

  it('should not be able to authenticate with invalid credentials', async () => {
    const password = faker.internet.password()
    const email = faker.internet.email()

    const { statusCode, body } = await request(app.server).post('/login').send({
      email,
      password,
    })

    expect(statusCode).toEqual(400)
    expect(body).toEqual({
      message: 'Invalid credentials.',
    })
  })
})
