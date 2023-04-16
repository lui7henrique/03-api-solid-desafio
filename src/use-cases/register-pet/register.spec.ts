import { expect, describe, it, beforeEach } from 'vitest'

import { mockOrg } from '@/mock/orgs/create'
import { RegisterPetUseCase } from '.'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { mockCreatePetBody } from '@/mock/pets/create'
import { Org } from '@prisma/client'

let petsRepository: InMemoryPetsRepository
let orgsRepository: InMemoryOrgsRepository

let sut: RegisterPetUseCase
let org: Org

describe('Register org use-case', () => {
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
})
