import { app } from '@/app'
import { mockCreatePetBody } from '@/mock/pets/create'
import { createAndAuthenticateOrg } from '@/utils/test/create-and-authenticate-org'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Register pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register pet', async () => {
    const { token } = await createAndAuthenticateOrg(app)

    const response = await request(app.server)
      .post('/pets')
      .set('Authorization', `Bearer ${token}`)
      .send(mockCreatePetBody())

    expect(response.statusCode).toEqual(201)
  })

  it('should not be able to register pet without token', async () => {
    const token = ''

    const { body, statusCode } = await request(app.server)
      .post('/pets')
      .set('Authorization', `Bearer ${token}`)
      .send(mockCreatePetBody())

    expect(statusCode).toEqual(401)
    expect(body.message).toEqual('Unauthorized.')
  })

  it('should not be able to register pet without token', async () => {
    const { token } = await createAndAuthenticateOrg(app)

    const pet = mockCreatePetBody()

    const { body } = await request(app.server)
      .post('/pets')
      .set('Authorization', `Bearer ${token}`)
      .send({
        ...pet,
        size: 'ULTRA SMALL',
      })

    expect(body.message).toEqual('Validation error.')
  })
})
