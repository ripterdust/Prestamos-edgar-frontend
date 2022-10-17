import { faker } from '@faker-js/faker'
export const randNumber = (max = 100, min = 0) => faker.datatype.number({ min, max })

export const randName = () => faker.name.fullName()

export const randDate = () => `${randNumber(30, 1)}/${randNumber(12, 1)}`
