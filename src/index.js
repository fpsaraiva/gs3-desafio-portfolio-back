import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());

const port = process.env.PORT || 3338;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server rodando na Porta ${port}!`);
});
