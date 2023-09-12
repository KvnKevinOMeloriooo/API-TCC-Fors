import 'dotenv/config';

import express from 'expres';
import cors from 'cors';


let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use();

servidor.listen(process.env.PORT, () => console.log('A API subiu!!'))