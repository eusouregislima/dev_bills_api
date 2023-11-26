import { Request, Response } from 'express';
import { CategoriesService } from '../services/category.service';

export class CategoriesControler {
  async create(_: Request, res: Response) {
    const service = new CategoriesService();

    const result = await service.create();

    // aqui ele vai lá no serviço, há uma espera para resolver essa promisse

    return res.status(201).json(result);
  }
}

/*
1. Criou a classe CategoriesControler com uma chamada assíncrona de create com Request e Response
2. Instanciou a Classe CategoriesService(), que importou do arquivo de service, na variável service
3. Guardou na variável result a resposta desse service.create
4. Retornou o status 201 pois está criando e o json com o resultado criado
*/
