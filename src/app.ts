import express from 'express';
import cors from 'cors';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// routes

app.get('/', (req, res) => {
  res.send('Hey Hi, Welcome to my project!');
});

export default app;
