import { OrgsRepository } from '@/repositories/orgs-repository'
import { Org, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export class InMemoryOrgsRepository implements OrgsRepository {
  public items: Org[] = []

  async findById(id: string) {
    const org = this.items.find((item) => item.id === id)

    return org ?? null
  }

  async findByEmail(email: string) {
    const org = this.items.find((item) => item.email === email)

    if (!org) {
      return null
    }

    return org
  }

  async create(data: Prisma.OrgCreateInput) {
    const org: Org = {
      id: data.id ?? randomUUID(),
      responsible_name: data.responsible_name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      address: data.address,
      city: data.city,
      neighborhood: data.neighborhood,
      number: data.number,
      state: data.state,
      postal_code: data.postal_code,
      whatsapp_number: data.whatsapp_number,
    }

    this.items.push(org)

    return org
  }
}
