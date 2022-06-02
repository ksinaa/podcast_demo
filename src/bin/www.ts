import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import logger from '../config/winston';

import mainRoute from '../app';

import 'dotenv/config'

const PORT = process.env.PORT;


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use('/api', mainRoute);

app.listen(PORT, () => {
    logger.info(`server is running on port ${PORT}`)
})