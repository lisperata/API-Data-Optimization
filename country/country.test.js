import assert from 'assert';
import {
  filterByName,
  filterByPopulation,
  pagination,
  sort
} from './utils.js';

describe('FilterByName', () => {
  const countries = [
    { name: { common: 'United States' } },
    { name: { common: 'Canada' } },
    { name: { common: 'Mexico' } },
    { name: { common: 'Brazil' } }
  ];

  it('should return countries matching the given name', () => {
    const result = filterByName('united', countries);
    assert.deepStrictEqual(result, [{ name: { common: 'United States' } }]);
  });

  it('should be case-insensitive', () => {
    const result = filterByName('BRAZIL', countries);
    assert.deepStrictEqual(result, [{ name: { common: 'Brazil' } }]);
  });

  it('should return an empty array if no countries match the name', () => {
    const result = filterByName('Germany', countries);
    assert.deepStrictEqual(result, []);
  });
});

describe('FilterByPopulation', () => {
  const countries = [
    { population: 328000000 },
    { population: 37600000 },
    { population: 12620000 },
    { population: 211000000 }
  ];

  it('should return countries with a population below the threshold', () => {
    const result = filterByPopulation(50, countries);
    assert.deepStrictEqual(result, [
      { population: 37600000 },
      { population: 12620000 }
    ]);
  });

  it('should return an empty array if no countries have a population below the threshold', () => {
    const result = filterByPopulation(10, countries);
    assert.deepStrictEqual(result, []);
  });
});

describe('Pagination', () => {
  const countries = [
    { name: 'Country 1' },
    { name: 'Country 2' },
    { name: 'Country 3' },
    { name: 'Country 4' },
    { name: 'Country 5' }
  ];

  it('should return the specified number of countries', () => {
    const result = pagination(3, countries);
    assert.deepStrictEqual(result, [
      { name: 'Country 1' },
      { name: 'Country 2' },
      { name: 'Country 3' }
    ]);
  });

  it('should return all countries if the limit exceeds the array length', () => {
    const result = pagination(10, countries);
    assert.deepStrictEqual(result, countries);
  });
});

describe('Sort', () => {
  const countries = [
    { name: { common: 'United States' } },
    { name: { common: 'Canada' } },
    { name: { common: 'Mexico' } },
    { name: { common: 'Brazil' } }
  ];

  it('should sort countries in ascending order', () => {
    const result = sort('ascend', countries);
    assert.deepStrictEqual(result, [
      { name: { common: 'Brazil' } },
      { name: { common: 'Canada' } },
      { name: { common: 'Mexico' } },
      { name: { common: 'United States' } }
    ]);
  });

  it('should sort countries in descending order', () => {
    const result = sort('descend', countries);
    assert.deepStrictEqual(result, [
      { name: { common: 'United States' } },
      { name: { common: 'Mexico' } },
      { name: { common: 'Canada' } },
      { name: { common: 'Brazil' } }
    ]);
  });

  it('should return the original array if the order is not specified', () => {
    const result = sort(undefined, countries);
    assert.deepStrictEqual(result, countries);
  });
});