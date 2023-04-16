import { expect, describe, it, beforeEach } from 'vitest'

import { mockOrg } from '@/mock/orgs/create'
import { RegisterPetUseCase } from '.'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { mockCreatePetBody } from '@/mock/pets/create'
import { Org } from '@prisma/client'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let petsRepository: InMemoryPetsRepository
let orgsRepository: InMemoryOrgsRepository

let sut: RegisterPetUseCase
let org: Org

describe('Register pet use-case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository()
    orgsRepository = new InMemoryOrgsRepository()

    const newOrg = await mockOrg()
    org = newOrg as Org

    orgsRepository.create(newOrg)

    sut = new RegisterPetUseCase(petsRepository, orgsRepository)
  })

  it('should to register', async () => {
    const data = mockCreatePetBody()

    const { pet } = await sut.execute({
      ...data,
      orgId: org.id,
    })

    expect(pet.id).toEqual(expect.any(String))
    expect(pet.orgId).toEqual(org.id)
  })

  it('should to register', async () => {
    const data = mockCreatePetBody()

    await expect(() =>
      sut.execute({
        ...data,
        orgId: 'invalid',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
