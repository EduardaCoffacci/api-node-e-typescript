import express from 'express';

const server = express();


server.get('/', (_, res) => {
  res.send('Olá, Dev!');
});

export { server };
