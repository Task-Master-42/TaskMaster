const path = require('path');
const express = require('express');
import { Request, Response, NextFunction} from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

app.use('*', (req: Request, res: Response) => {
  res.status(404).send("File not found");
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error.',
    status: 500,
    message: {err: 'An error occurred.'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

let server;
if (require.main === module) {
  server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
};

module.exports = { app, server };