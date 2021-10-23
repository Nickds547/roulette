import * as express from 'express';
import {config} from './config';
import * as routes from './routes/index'
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import db from './service/Db';

dotenv.config();
global.db = db;
const app = express();
app.use(bodyParser.json());
app.get('/user', routes.userRouter)

app.listen(config.port, () => {
  console.log('server running on PORT:' + config.port);
});