import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("Conection Ready"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Listening in port: ${PORT}`)
});