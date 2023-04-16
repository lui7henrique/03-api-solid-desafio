import { expect, describe, it, beforeEach } from 'vitest'

import { mockOrg } from '@/mock/orgs/create'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { mockCreatePetBody } from '@/mock/pets/create'
import { Org } from '@prisma/client'

import { ShowPetUseCase } from '.'
import { randomUUID } from 'crypto'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'

let petsRepository: InMemoryPetsRepository
let orgsRepository: InMemoryOrgsRepository

let sut: ShowPetUseCase
let org: Org

describe('Search pets use-case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository()
    orgsRepository = new InMemoryOrgsRepository()

    const newOrg = await mockOrg()
    org = newOrg as Org

    orgsRepository.create(newOrg)

    sut = new ShowPetUseCase(petsRepository)
  })

  it('should be able to show pet', async () => {
    const data = mockCreatePetBody()

    const { id } = await petsRepository.create({
      orgId: org.id,
      ...data,
    })

    const { pet } = await sut.execute({
      id,
    })

    expect(pet?.id).toContain(id)
  })

  it("should not be able to show pet when don't have results", async () => {
    const { pet } = await sut.execute({
      id: randomUUID(),
    })

    expect(pet).toBe(null)
  })

  it('should not be able to show pet when id is invalid', async () => {
    await expect(() =>
      sut.execute({
        id: '',
      }),
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
