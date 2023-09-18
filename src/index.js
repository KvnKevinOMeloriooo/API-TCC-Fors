import 'dotenv/config';

import express from 'expres';
import cors from 'cors';

import listarTenis from 'listarTenis';
import inserirTenis from 'inserirTenis';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use();

import { inserirTenis, listarTenis } from './bd.js';

import prompt from 'prompt-sync';
let ler = prompt();


let opcao;

do {

  console.log('\n\n## Escolha uma opção');
  console.log('1. Inserir tenis');
  console.log('2. Listar tenis');
  console.log('3. Listar tenis por Ano');
  console.log('4. Buscar tenis por Nome');
  console.log('0. Sair');
  opcao = Number(ler());


  if (opcao == 1) {
    // códigos para inserir tenis
    //
    console.log('> fake: tenis inserido');
  }
  else if (opcao == 2) {
    // códigos para listar tenis;
    //
    console.log('> fake: listando tenis');
  }
  

}
while (opcao != 0);


process.exit(0);

servidor.listen(process.env.PORT, () => console.log('A API subiu!!'))