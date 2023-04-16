import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { compare } from 'bcryptjs'
import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterOrgUseCase } from '.'

import { OrgAlreadyExistsError } from '../errors/org-already-exists-errors'
import { mockCreateOrgBody } from '@/mock/orgs/create'

let orgsRepository: InMemoryOrgsRepository
let sut: RegisterOrgUseCase

describe('Register org use-case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository()
    sut = new RegisterOrgUseCase(orgsRepository)
  })

  it('should to register', async () => {
    const data = mockCreateOrgBody()
    const { org } = await sut.execute(data)

    expect(org.id).toEqual(expect.any(String))
  })

  it('should hash user password upon registration', async () => {
    const data = mockCreateOrgBody()
    const { org } = await sut.execute(data)

    const isPasswordCorrectlyHashed = await compare(
      data.password,
      org.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to register with same email twice', async () => {
    const data = mockCreateOrgBody()
    await sut.execute(data)

    await expect(() => sut.execute(data)).rejects.toBeInstanceOf(
      OrgAlreadyExistsError,
    )
  })
})
