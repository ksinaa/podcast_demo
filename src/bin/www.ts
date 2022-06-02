import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import logger from '../config/winston';

import mainRoute from '../app';

import 'dotenv/config'

const PORT = process.env.PORT;


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('combined'));

app.use('/api', mainRoute);

mongoose.connect(`${process.env.mongoURL}`, () => {
    logger.info(`mongodb is running on url: ${process.env.mongoURL}`)
    app.listen(PORT, () => {
        logger.info(`server is running on port ${PORT}`)
    })
})

