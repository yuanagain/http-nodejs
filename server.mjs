import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World! Blah blah');
  res.end();
}).listen(process.env.PORT);
