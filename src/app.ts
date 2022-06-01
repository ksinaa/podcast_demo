import express from 'express';
import morgan from 'morgan';

import logger from './config/winston'

import 'dotenv/config'

const PORT = process.env.PORT

const app = express();

app.use(morgan('combined'));



app.listen(PORT, () => {
    logger.info(`server is running on port ${PORT}`)
})