import express from 'express';
import countryRouter from './country/country.router.js';
const app = express();

app.use(countryRouter);

app.use((req, res, next) => {
  res.status(404).send('Error 404: Page not found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Error 500: Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
