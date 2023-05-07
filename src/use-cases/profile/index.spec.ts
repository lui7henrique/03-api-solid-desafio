import { expect, describe, it, beforeEach } from 'vitest'

import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { mockOrg } from '@/mock/orgs/create'
import { ProfileUseCase } from '.'
import { Org } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let orgsRepository: InMemoryOrgsRepository
let sut: ProfileUseCase

let mockedOrg: Org

describe('Profile org use-case', () => {
  beforeEach(async () => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new ProfileUseCase(orgsRepository)

    const newOrg = await mockOrg()
    mockedOrg = newOrg as Org

    orgsRepository.create(newOrg)
  })

  it('should be able to get org profile', async () => {
    const { org } = await sut.execute({ orgId: mockedOrg.id })

    expect(org.id).toEqual(mockedOrg.id)
  })

  it('should not be able to get org profile with wrong id', async () => {
    await expect(
      async () => await sut.execute({ orgId: 'xd' }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
