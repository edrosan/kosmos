import express, { json } from 'express';
import { env } from './functions/env.js';
import { usersRouter } from './routes/users.js';
import { daysRouter } from './routes/days.js';

const PORT = env('PORT') || 3030;

const app = express();
app.disable('x-powered-by');
app.use(json());

app.get('/', (req, res) => {
  res.json({
    author: 'JEL',
    message: 'Kósmos API',
    version: '0.0.1'
  });
})

app.use('/users', usersRouter);
app.use('/days', daysRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})



