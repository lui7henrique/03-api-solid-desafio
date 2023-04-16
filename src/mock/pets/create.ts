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
