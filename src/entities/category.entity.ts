type CategoryProps = {
  id?: string;
  title: string;
  color: string;
};

// uma classe é uma categoria geral, por exemplo carro, ou animal, já em uma isntância eu defino claramente qual carro é, ou qual doginho é.
// Quando uso o this, estou falando do atributo da classe, no caso o id, e quando coloco somente o id sem o this, estarei falando da variável passada

// Ficou público porque qualquer instância poderá acessar esse id, caso ficasse private não teriam acesso
// O id ficou como opcional porque no ato de criação da categoria não precisaria necessariamente ter um id
// Já no ato de uma busca, dai precisa ter

export class Category {
  public id?: string;
  public title: string;
  public color: string;

  //passar parâmetros opcionais por último no constructor
  constructor({ id, color, title }: CategoryProps) {
    this.id = id;
    this.title = title;
    this.color = color.toUpperCase();
  }
}

// Definiu como seria o modelo da categoria
