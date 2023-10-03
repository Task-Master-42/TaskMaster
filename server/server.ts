import path from 'path';
import express, { Request, Response, NextFunction, Application } from 'express';
import { ExpressError } from './types';
const cookieParser = require('cookie-parser');

import authRouter from './routers/authRouter.ts';
import boardRouter from './routers/boardRouter.ts';

const app: Application = express();
const PORT: string = process.env.PORT || '3000';

app.use(express.json());
app.use(cookieParser());

app.use('/', express.static(path.resolve(__dirname, '../build')));
app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

app.get('/', (_req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
})

app.use('/auth', authRouter);
app.use('/board', boardRouter);

app.use('*', (_req: Request, res: Response) => {
  res.status(404).send("File not found");
})

app.use((err: ExpressError, _req: Request, res: Response, _next: NextFunction) => {
  const defaultErr: ExpressError = {
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