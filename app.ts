import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


import errorHandler from './api/utils/error-handler';

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(errorHandler);

export default app;