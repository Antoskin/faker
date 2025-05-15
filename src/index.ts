export type {
  LocaleDefinition,
  LocaleEntry,
  LocationDefinition,
  MetadataDefinition,
} from './definitions';
export { FakerError } from './errors/faker-error';
export { Faker } from './faker';
export type { FakerOptions } from './faker';
export * from './locale';
export { fakerEN as faker } from './locale';
export * from './locales';
export type { StringModule } from './modules/string';
export type { NumberModule } from './modules/number';
export type { LocationModule } from './modules/location';
export type { Randomizer } from './randomizer';
export { SimpleFaker, simpleFaker } from './simple-faker';
export { mergeLocales } from './utils/merge-locales';
export {
  generateMersenne32Randomizer,
  generateMersenne53Randomizer,
} from './utils/mersenne';
