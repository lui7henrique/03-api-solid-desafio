import { faker } from '@faker-js/faker'
import { hash } from 'bcryptjs'

export const mockCreateOrgBody = () => {
  const body = {
    responsible_name: faker.name.fullName(),
    address: faker.address.street(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    postalCode: faker.address.zipCode('#####-###'),
    whatsapp_number: faker.phone.number('+55 ## 9####-#####'),
  }

  return body
}

export const mockOrg = async () => {
  const password = faker.internet.password()
  const org = {
    responsible_name: faker.name.fullName(),
    address: faker.address.street(),
    email: faker.internet.email(),
    password_hash: await hash(password, 6),
    password,
    postalCode: faker.address.zipCode('#####-###'),
    whatsapp_number: faker.phone.number('+55 ## 9####-#####'),
  }

  return org
}
