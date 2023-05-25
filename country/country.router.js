import { getCountries } from './country.controller.js';
import express from 'express';

const countryRouter = express.Router();

countryRouter.get('/api/countries', async (req, res) => {
    const { name, population } = req.query;
    await getCountries(res, name, population);
  });
  

export default countryRouter;