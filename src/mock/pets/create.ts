import { RegisterPetFields } from '@/http/controllers/pets/register'
import { faker } from '@faker-js/faker'
import {
  Ambient,
  EnergyLevel,
  IndependencyLevel,
  Size,
  Type,
} from '@prisma/client'

const ambientOptions: Ambient[] = ['SMALL', 'MEDIUM', 'LARGE']
const energyLevelOptions: EnergyLevel[] = ['LOW', 'MEDIUM', 'HIGH']
const independencyLevelOptions: IndependencyLevel[] = ['LOW', 'MEDIUM', 'HIGH']
const sizeOptions: Size[] = ['SMALL', 'MEDIUM', 'LARGE']
const typeOptions: Type[] = ['DOG', 'CAT']

export const mockCreatePetBody = () => {
  const body: RegisterPetFields = {
    age: faker.datatype.number({ max: 30, min: 0 }),
    description: faker.lorem.word(10),
    name: faker.animal.dog(),
    ambient: ambientOptions[faker.datatype.number({ min: 0, max: 2 })],
    energy_level: energyLevelOptions[faker.datatype.number({ min: 0, max: 2 })],
    independency_level:
      independencyLevelOptions[faker.datatype.number({ min: 0, max: 2 })],
    size: sizeOptions[faker.datatype.number({ min: 0, max: 2 })],
    type: typeOptions[faker.datatype.number({ min: 0, max: 1 })],
  }

  return body
}
