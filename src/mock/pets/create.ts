import { RegisterPetFields } from '@/http/controllers/pets/register'
import { faker } from '@faker-js/faker'

type mockCreatePetBodyOptions = {
  invalidField: keyof RegisterPetFields
}

export const mockCreatePetBody = (options?: mockCreatePetBodyOptions) => {
  const body: RegisterPetFields = {
    age: faker.datatype.number({ max: 30, min: 0 }),
    ambient: 'MEDIUM',
    description: faker.lorem.word(10),
    energy_level: 'HIGH',
    independency_level: 'LOW',
    name: faker.animal.dog(),
    size: 'MEDIUM',
  }

  if (options?.invalidField) {
    const invalidField = options.invalidField

    const formattedBody = {
      ...body,
      [invalidField]: faker.lorem.word(),
    }

    console.log({ formattedBody })

    return formattedBody
  }

  return body
}
