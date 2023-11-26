import { Router } from 'express';
import { CategoriesControler } from '../controllers/category.controller';

export const CategoriesRoutes = Router();

const controller = new CategoriesControler();

CategoriesRoutes.post('/', controller.create);

/* 
1. Importou o Router do express
2. Guardou o Router() em uma variável 
3. Instanciou a classe CategoriesControler na variável controller
4. Chamou o método post na variável que guardou o Router() na rota base utilizando a instância com o .create
5. Colocar controller.create é o mesmo que colocar (req, res) => controle.create(req,res) de forma resumida
*/
