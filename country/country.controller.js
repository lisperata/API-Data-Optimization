import axios from "axios";
import { filterByName, filterByPopulation, pagination, sort } from './utils.js';

export const getCountries = async (res, name, population, limit, order) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    let countries = response.data;

    if (name) {
      countries = filterByName(name, countries);
    }

    if (population) {
      countries = filterByPopulation(population, countries);
    }

    if(limit) {
      countries = pagination(limit, countries);
    }

    if(order) {
      countries = sort(order, countries);
    }

    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
}