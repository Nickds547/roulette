import * as express from 'express';
import * as cors from 'cors';
import * as bodyparser from 'body-parser';
import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose';
import routes from './routes'
import { ConnectOptions } from 'mongoose';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(routes);

const PORT = process.env.PORT;
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_INSTANCE}/${process.env.MONGO_DB}?retryWrites=true&w=majority`

app.get('/', (req, res) => res.send('All good!'));

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

app.on('error', function(err){
  console.log(err)
})