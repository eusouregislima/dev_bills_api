import { Router } from 'express';
import { baseRoutes } from './base.route';
import { CategoriesRoutes } from './categories.route';

export const routes = Router();

routes.use('/', baseRoutes);
routes.use('/categories', CategoriesRoutes);

/*
1. Importou o Router
2. Guardou o Router() na variável routes
3. Definiu o uso de cada routes passando a url e o método a ser chamado
*/
