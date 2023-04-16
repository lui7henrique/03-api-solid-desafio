import { RegisterOrgFields } from '@/http/controllers/orgs/register'
import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client'
import { hash } from 'bcryptjs'
import { randomUUID } from 'crypto'

export const mockCreateOrgBody = () => {
  const body: RegisterOrgFields = {
    responsible_name: faker.name.fullName(),

    address: faker.address.street(),
    neighborhood: faker.company.name(),
    city: faker.address.city(),
    number: faker.address.buildingNumber(),
    state: 'SP',

    email: faker.internet.email(),
    password: faker.internet.password(),
    postalCode: faker.address.zipCode('#####-###'),
    whatsapp_number: faker.phone.number('+55 ## 9####-#####'),
  }

  return body
}

export const mockOrg = async () => {
  const password = faker.internet.password()

  const org: {
    password_hash: string
    password: string
  } & Prisma.OrgUncheckedCreateInput = {
    responsible_name: faker.name.fullName(),

    address: faker.address.street(),
    neighborhood: faker.company.name(),
    city: faker.address.city(),
    number: faker.address.buildingNumber(),
    state: 'SP',

    email: faker.internet.email(),
    password_hash: await hash(password, 6),
    id: randomUUID(),
    password,
    postalCode: faker.address.zipCode('#####-###'),
    whatsapp_number: faker.phone.number('+55 ## 9####-#####'),
  }

  return org
}
