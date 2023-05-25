import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/countries', async (req, res) => {

  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

app.use((req, res, next) => {
  res.status(404).send('Error 404: Page not found');
});

app.use((err, req, res, next) => {
  res.status(500).send('Error 500: Internal Server Error');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
