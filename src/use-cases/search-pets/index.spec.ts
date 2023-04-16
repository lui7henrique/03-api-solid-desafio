import { expect, describe, it, beforeEach } from 'vitest'

import { mockOrg } from '@/mock/orgs/create'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository'
import { mockCreatePetBody } from '@/mock/pets/create'
import { Org } from '@prisma/client'
import { SearchPetsUseCase } from '.'
import { CityIsRequiredError } from '../errors/city-is-required-errror'

let petsRepository: InMemoryPetsRepository
let orgsRepository: InMemoryOrgsRepository

let sut: SearchPetsUseCase
let org: Org

describe('Search pets use-case', () => {
  beforeEach(async () => {
    petsRepository = new InMemoryPetsRepository()
    orgsRepository = new InMemoryOrgsRepository()

    const newOrg = await mockOrg()
    org = newOrg as Org

    orgsRepository.create(newOrg)

    sut = new SearchPetsUseCase(petsRepository)
  })

  it('should be able to search for pets w/ query city', async () => {
    const data = mockCreatePetBody()

    await petsRepository.create({
      orgId: org.id,
      ...data,
    })

    const { pets } = await sut.execute({
      city: org.city,
      page: 1,
    })

    expect(pets).toHaveLength(1)
    expect(pets).toEqual([expect.objectContaining({ name: data.name })])
  })

  it('should not be able to search for pets without city', async () => {
    const data = mockCreatePetBody()

    await petsRepository.create({
      orgId: org.id,
      ...data,
    })

    await expect(() =>
      sut.execute({
        city: '',
        page: 1,
      }),
    ).rejects.toBeInstanceOf(CityIsRequiredError)
  })

  it('should be able to fetch paginated pets search', async () => {
    for (let i = 1; i <= 22; i++) {
      const data = mockCreatePetBody()

      await petsRepository.create({
        orgId: org.id,
        ...data,
        name: `Pet ${i}`,
      })
    }

    const { pets } = await sut.execute({
      city: org.city,
      page: 2,
    })

    expect(pets).toHaveLength(2)
    expect(pets).toEqual([
      expect.objectContaining({ name: 'Pet 21' }),
      expect.objectContaining({ name: 'Pet 22' }),
    ])
  })
})
