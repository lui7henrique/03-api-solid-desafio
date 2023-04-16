import { OrgsRepository } from '@/repositories/orgs-repository'
import { Org, Prisma } from '@prisma/client'
import { randomUUID } from 'node:crypto'

export class InMemoryOrgsRepository implements OrgsRepository {
  public items: Org[] = []

  async findByEmail(email: string) {
    const org = this.items.find((item) => item.email === email)

    if (!org) {
      return null
    }

    return org
  }

  async create(data: Prisma.OrgCreateInput) {
    const org: Org = {
      id: randomUUID(),
      responsible_name: data.responsible_name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
      address: data.address,
      postalCode: data.postalCode,
      whatsapp_number: data.whatsapp_number,
    }

    this.items.push(org)

    return org
  }
}
