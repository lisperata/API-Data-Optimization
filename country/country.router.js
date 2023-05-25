import { getCountries } from './country.controller.js';
import express from 'express';

const countryRouter = express.Router();

countryRouter.get('/api/countries', async (req, res) => {
    const { name, population, limit, order } = req.query;
    await getCountries(res, name, population, limit, order);
  });
  

export default countryRouter;