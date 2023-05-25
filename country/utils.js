export const filterByName = (name, countries) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase()
        .includes(name.toLowerCase())
  );
}

export const filterByPopulation = (population, countries) => {
  return countries.filter((country) => {
    const countryPopulation = country.population;
    const populationThreshold = population * 1000000;

    return countryPopulation < populationThreshold;
  });
};

export const pagination = (limit, countries) => {
  return countries.slice(0, limit);
};
