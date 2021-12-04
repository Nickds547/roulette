import * as express from 'express';
import * as cors from 'cors';

const app = express();
const PORT = 8000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});