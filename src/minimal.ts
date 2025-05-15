import { faker } from '@faker-js/faker';

export const generateUserAddress = (locale = 'en_US') => {

  const stateFaker = faker.location.state({ abbreviated: true });

  return {
    city: faker.location.city(),
    zip: faker.location.zipCode(),
    address: faker.location.streetAddress(),
    state: stateFaker ?? '',
  };
};
