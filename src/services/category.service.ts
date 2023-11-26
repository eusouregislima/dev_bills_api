import { Category } from '../entities/category.entity';

export class CategoriesService {
  async create(): Promise<Category> {
    const category = new Category({
      title: 'Example Category',
      color: '#ff33bb',
    });
    return category;
  }
}

/*
1. Criou a classe CategoriesService
2. Em uma função assíncrona create() determinou uma Promisse que seria a entidade Category que foi importada
3. Gerou a constante category instanciando a classe Category enviando um title e uma color
4. Retornou a category
*/
