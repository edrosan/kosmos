import express, { json } from 'express';
import { env } from './functions/env.js';
import { usersRouter } from './routes/users.js';
import { daysRouter } from './routes/days.js';
import cors from 'cors';
import { iaRouter } from './routes/ia.js';
import { tasksRouter } from './routes/tasks.js';

const PORT = env('PORT') || 3030;

const app = express();
app.disable('x-powered-by');
app.use(cors())
app.use(json());

app.get('/', (req, res) => {
  res.json({
    author: 'JEL',
    message: 'The Kósmos',
    version: '0.0.1'
  });
})

app.use('/users', usersRouter);
app.use('/days', daysRouter);
app.use('/ia', iaRouter);
app.use('/tasks', tasksRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})



