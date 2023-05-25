export const filter = (name, countries) => {
    return countries.filter((country) =>
    country.name.common.toLowerCase().includes(name.toLowerCase())
  );
}