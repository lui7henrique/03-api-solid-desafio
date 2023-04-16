import { beforeEach, describe, expect, it } from 'vitest'
import { AuthenticateUseCase } from '.'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { mockOrg } from '@/mock/orgs/create'
import { InvalidCredentialsError } from '../errors/invalid-credentials-error'
import { faker } from '@faker-js/faker'

let orgsRepository: InMemoryOrgsRepository
let sut: AuthenticateUseCase

describe('Authenticate org use-case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new AuthenticateUseCase(orgsRepository)
  })

  it('should be able to authenticate', async () => {
    const fakeOrg = await mockOrg()

    await orgsRepository.create(fakeOrg)

    const { org } = await sut.execute({
      email: fakeOrg.email,
      password: fakeOrg.password,
    })

    expect(org.id).toEqual(expect.any(String))
  })

  it('should not be able to authenticate with wrong email', async () => {
    const fakeData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    await expect(() => sut.execute(fakeData)).rejects.toBeInstanceOf(
      InvalidCredentialsError,
    )
  })

  it('should not be able to authenticate with wrong email', async () => {
    const fakeOrg = await mockOrg()
    await orgsRepository.create(fakeOrg)

    const fakeData = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    await expect(() => sut.execute(fakeData)).rejects.toBeInstanceOf(
      InvalidCredentialsError,
    )
  })
})
