// arquivo responsável por guardar a rota base

import { Router } from 'express';

import packageJson from '../../package.json';

export const baseRoutes = Router();

baseRoutes.get('/', (_, res) => {
  const { name, version, description, author } = packageJson;

  res.status(200).json({ name, version, description, author });
});

/* 
1. Importou o Router do express
2. Guardou o Router() em uma variável baseRoutes
3. Chamou o método get pegando os dados importados do package.json
4. Respondeu com status 200 e um json com alguns dados selecionados do package.json
*/
