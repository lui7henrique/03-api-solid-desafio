import { app } from '@/app'
import { mockCreatePetBody } from '@/mock/pets/create'
import { createAndAuthenticateOrg } from '@/utils/test/create-and-authenticate-org'
import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('Show pet (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to show pet', async () => {
    const { token, city } = await createAndAuthenticateOrg(app)

    await Promise.all(
      Array.from({
        length: 5,
      }).map(async () => {
        await request(app.server)
          .post('/pets')
          .set('Authorization', `Bearer ${token}`)
          .send(mockCreatePetBody())
      }),
    )

    const {
      body: { pets },
    } = await request(app.server)
      .get(`/pets?city=${city}`)
      .set('Authorization', `Bearer ${token}`)

    expect(pets.length).toEqual(5)

    const pet = pets[0]

    const { body } = await request(app.server)
      .get(`/pets/${pet.id}`)
      .set('Authorization', `Bearer ${token}`)

    expect(body.pet.id).toContain(pet.id)
  })
})
