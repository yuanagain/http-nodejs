import { createServer } from 'http';

createServer((req, res) => {
  res.write(`${process.env.ENV_DEMO_TEST}`);
  res.end();
}).listen(process.env.PORT);
