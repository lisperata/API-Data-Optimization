import { getCountries } from './country.controller.js';
import express from 'express';

const countryRouter = express.Router();

countryRouter.get('/api/countries', async (req, res) => {
    const { name } = req.query;
    await getCountries(res, name);
  });
  

export default countryRouter;