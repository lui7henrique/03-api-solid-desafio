import { RegisterPetFields } from '@/http/controllers/pets/register'
import { faker } from '@faker-js/faker'

export const mockCreatePetBody = () => {
  const body: RegisterPetFields = {
    age: faker.datatype.number({ max: 30, min: 0 }),
    ambient: 'MEDIUM',
    description: faker.lorem.word(10),
    energy_level: 'HIGH',
    independency_level: 'LOW',
    name: faker.animal.dog(),
    size: 'MEDIUM',
  }

  return body
}

// export const mockOrg = async () => {
//   const password = faker.internet.password()

//   const org: { password_hash: string } & RegisterOrgFields = {
//     responsible_name: faker.name.fullName(),

//     address: faker.address.street(),
//     neighborhood: faker.company.name(),
//     city: faker.address.city(),
//     number: faker.address.buildingNumber(),
//     state: 'SP',

//     email: faker.internet.email(),
//     password_hash: await hash(password, 6),
//     password,
//     postalCode: faker.address.zipCode('#####-###'),
//     whatsapp_number: faker.phone.number('+55 ## 9####-#####'),
//   }

//   return org
// }
