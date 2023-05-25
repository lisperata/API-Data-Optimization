import axios from "axios";
import { filter } from './utils.js';

export const getCountries = async (res, name) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    let countries = response.data;
    if (name) {
      countries = filter(name, countries);
    }
  
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
}