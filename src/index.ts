//Constantes e variáveis em TypeScript
const nome: string = 'João';
const idade: number = 27;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-symbol');
//let nome: string = 'João';
//let idade: number = 27;
//let adulto: boolean = true;
//let simbolo: symbol = Symbol('qualquer-symbol');

// Arrays
const arrayNumbers: Array<number> = [1, 2, 3]; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, number.
const arrayStrings: Array<string> = ['a', 'b', 'c']; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, string.

//let arrayNumbers: Array<number> = [1, 2, 3];
//let arrayStrings: Array<string> = ['a', 'b', 'c'];

//Outra forma de declarar arrays
const arrayNumbers2: number[] = [1, 2, 3]; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, number.
const arrayStrings2: string[] = ['a', 'b', 'c']; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, string.

//Alterando valores de variáveis em TypeScript em depois dando console.log
let minhaIdade: number = 27;
//console.log(minhaIdade);
//minhaIdade = 28;
console.log(minhaIdade);

//Funções em TypeScript
function soma(x: number, y: number): number { //A função soma recebe dois parâmetros, x e y, ambos do tipo number, e retorna um valor do tipo number.
  return x + y; //A função retorna a soma dos dois parâmetros.
}
const result = soma(2, 2); //Aqui chamamos a função soma e passamos os valores 2 e 2 como argumentos.

//Funções em TypeScript com retorno void
function criaErro(): void { //A função criaErro não retorna nada, ou seja, seu retorno é void.
  throw new Error('Erro qualquer'); //A função lança um erro.
}
//void é um tipo que representa a ausência de tipo. Ou seja, é um tipo que não tem valor. POde ser usado em funções que não retornam nada. ex de funções que não retornam nada: console.log, alert, etc.	

//Tipando objetos em TypeScript
const pessoa: { //Aqui declaramos um objeto pessoa.
  nome: string; //O objeto pessoa tem uma propriedade nome do tipo string.
  idade: number; //O objeto pessoa tem uma propriedade idade do tipo number.
  adulto?: boolean; //O objeto pessoa tem uma propriedade adulto do tipo boolean, que é opcional.
} = {
  nome: 'João', //A propriedade nome do objeto pessoa recebe o valor 'João'.
  idade: 27 //A propriedade idade do objeto pessoa recebe o valor 27.
}

//Tipando arrays em TypeScript
const arrayNumbers3: number[] = [1, 2, 3]; //Aqui declaramos um array de números.
const arrayStrings3: string[] = ['a', 'b', 'c']; //Aqui declaramos um array de strings.

//POO em TypeScript

//Classes em TypeScript
class Pessoa { //Aqui declaramos uma classe Pessoa.
  nome: string; //A classe Pessoa tem uma propriedade nome do tipo string.
  idade: number; //A classe Pessoa tem uma propriedade idade do tipo number.
  adulto: boolean; //A classe Pessoa tem uma propriedade adulto do tipo boolean.

   //Aqui declaramos o construtor da classe Pessoa.
  constructor(nome: string, idade: number, adulto: boolean) { //Aqui declaramos o construtor da classe Pessoa.
    this.nome = nome; //A propriedade nome da classe Pessoa recebe o valor do parâmetro nome.
    this.idade = idade; //A propriedade idade da classe Pessoa recebe o valor do parâmetro idade.
    this.adulto = adulto; //A propriedade adulto da classe Pessoa recebe o valor do parâmetro adulto.
  }
}

//Instanciando objetos em TypeScript
const pessoa1 = new Pessoa('João', 27, true); //Aqui instanciamos um objeto da classe Pessoa.

//herança em TypeScript
class Carro { //Aqui declaramos uma classe Carro.
  private velocidadeAtual: number = 0; //A classe Carro é do tipo private

  //Aqui declaramos o método acelerar da classe Carro.
  acelerar(): void {
    this.velocidadeAtual += 10; //A propriedade velocidadeAtual da classe Carro é incrementada em 10.
  }

  //Aqui declaramos o método parar da classe Carro.
  parar(): void {
    this.velocidadeAtual = 0; //A propriedade velocidadeAtual da classe Carro é zerada.
  }

  //Aqui declaramos o método velocidadeAtual da classe Carro.
  velocidade(): number {
    return this.velocidadeAtual; //O método retorna a propriedade velocidadeAtual da classe Carro.
  }
}


class Camaro extends Carro { //Aqui declaramos uma classe Camaro que herda da classe Carro.
  private turbo = false; //A classe Camaro tem uma propriedade turbo do tipo boolean.

  //Aqui declaramos o método ligarTurbo da classe Camaro.
  ligarTurbo(): void { //O método ligarTurbo da classe Camaro não retorna nada porque não faz sentido retornar nada já que ele apenas altera o valor da propriedade turbo.
    this.turbo = true; //A propriedade turbo da classe Camaro recebe true.
  }
}

const camaro = new Camaro(); //Aqui instanciamos um objeto da classe Camaro.
camaro.acelerar(); //Aqui chamamos o método acelerar do objeto camaro.
camaro.acelerar(); //Aqui chamamos o método acelerar do objeto camaro.
camaro.acelerar(); //Aqui chamamos o método acelerar do objeto camaro.
// console.log(camaro.velocidade()); //Aqui chamamos o método velocidade do objeto camaro e exibimos o valor no console.
// camaro.parar(); //Aqui chamamos o método parar do objeto camaro.

//Metodos Getters e Setters em TypeScript
class Pessoa2 {
  private _idade: number = 0; //A classe Pessoa2 tem uma propriedade _idade do tipo number.
  //Esse _ antes do nome da propriedade é uma convenção para indicar que a propriedade é privada.
  //Se não fosse privada poderíamos acessar a propriedade diretamente, mas como é privada, precisamos de um método para acessá-la.

  //Aqui declaramos o método get idade da classe Pessoa2.
  get idade(): number {
    return this._idade; //O método get idade retorna a propriedade _idade da classe Pessoa2.
  }

  //Aqui declaramos o método set idade da classe Pessoa2.
  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) { //Se o valor for maior ou igual a 0 e menor ou igual a 120.
      this._idade = valor; //A propriedade _idade da classe Pessoa2 recebe o valor.
    }
  }
}

const pessoa2 = new Pessoa2(); //Aqui instanciamos um objeto da classe Pessoa2.
pessoa2.idade = 10; //Aqui chamamos o método set idade do objeto pessoa2.
//console.log(pessoa2.idade); //Aqui chamamos o método get idade do objeto pessoa2 e exibimos o valor no console.

//Métodos estáticos em TypeScript
//Métodos estáticos são métodos que podem ser chamados diretamente na classe, sem precisar instanciar um objeto.
class Util {
  static id: number = 0; //A classe Util tem uma propriedade id do tipo number.

  static nextId(): number { //Aqui declaramos o método nextId da classe Util.
    return Util.id++; //O método retorna a propriedade id da classe Util incrementada em 1.
  }
}

//console.log(Util.nextId()); //Aqui chamamos o método nextId da classe Util e exibimos o valor no console.

//Private, Public, Protected em TypeScript
//Private: A propriedade ou método é acessível apenas dentro da própria classe.
//Public: A propriedade ou método é acessível de fora da classe.
//Protected: A propriedade ou método é acessível apenas dentro da própria classe e nas classes que herdam dela.

class Empresa {
  public readonly nome: string; //A classe Empresa tem uma propriedade nome do tipo string que é pública e somente leitura.
  //Esse metodo pode ser publico pelo fato de que n
  private readonly colaboradores: Colaborador[] = []; //A classe Empresa tem uma propriedade colaboradores do tipo Colaborador que é privada e somente leitura.

  protected readonly cnpj: string; //A classe Empresa tem uma propriedade cnpj do tipo string que é protegida e somente leitura.

  constructor(nome: string, cnpj: string) { //Aqui declaramos o construtor da classe Empresa.
    this.nome = nome; //A propriedade nome da classe Empresa recebe o valor do parâmetro nome.
    this.cnpj = cnpj; //A propriedade cnpj da classe Empresa recebe o valor do parâmetro cnpj.
  }

  adicionaColaborador(colaborador: Colaborador): void { //Aqui declaramos o método adicionaColaborador da classe Empresa.
    this.colaboradores.push(colaborador); //O método adiciona o colaborador ao array de colaboradores.
  }

  mostrarColaboradores(): void { //Aqui declaramos o método mostrarColaboradores da classe Empresa.
    for (const colaborador of this.colaboradores) { //Para cada colaborador no array de colaboradores.
      console.log(colaborador); //Exibe o colaborador no console.
    }
  }
}

class Colaborador {
  constructor(public readonly nome: string, public readonly sobrenome: string) { } //Aqui declaramos o construtor da classe Colaborador.
}

const empresa = new Empresa('Udemy', '11.111.111/0001-11'); //Aqui instanciamos um objeto da classe Empresa.
const colaborador1 = new Colaborador('Luiz', 'Miranda'); //Aqui instanciamos um objeto da classe Colaborador.
const colaborador2 = new Colaborador('Maria', 'Silva'); //Aqui instanciamos um objeto da classe Colaborador.

empresa.adicionaColaborador(colaborador1); //Aqui chamamos o método adicionaColaborador do objeto empresa e passamos o colaborador1 como argumento.
empresa.adicionaColaborador(colaborador2); //Aqui chamamos o método adicionaColaborador do objeto empresa e passamos o colaborador2 como argumento.

//empresa.nome = 'Empresa XYZ'; //Aqui tentamos alterar o valor da propriedade nome do objeto empresa, mas não conseguimos porque ela é somente leitura.
//empresa.mostrarColaboradores(); //Aqui chamamos o método mostrarColaboradores do objeto empresa.

//Interface em TypeScript
//Interfaces são contratos que definem propriedades e métodos que uma classe deve implementar.
interface Usuario { //Aqui declaramos uma interface Usuario.
  nome: string; //A interface Usuario tem uma propriedade nome do tipo string.
  email: string; //A interface Usuario tem uma propriedade email do tipo string.
  address?: string; //A interface Usuario tem uma propriedade address do tipo string que é opcional.
}   

function getUser(): Usuario { //Aqui declaramos a função getUser.
  return { //A função retorna um objeto com as propriedades nome e email.
    nome: 'João', //A propriedade nome do objeto retornado recebe o valor 'João'.
    email: 'João@gmail.com' //A propriedade email do objeto retornado recebe o valor 'Joã
    }
}

function setUser(usuario: Usuario) { //Aqui declaramos a função setUser.
    //...
}

//Generics em TypeScript
//Generics são tipos que são definidos em tempo de execução.
//Eles permitem criar funções, classes e interfaces que podem trabalhar com diferentes tipos de dados.
//Aqui declaramos uma função que recebe um array de números e retorna o maior número.
function obterMaiorNumero(array: Array<number>): number { //Aqui declaramos a função obterMaiorNumero.
  return Math.max(...array); //A função Math.max retorna o maior número do array.
}

//Aqui declaramos uma função que recebe um array de strings e retorna a string com mais caracteres.
function obterMaiorString(array: Array<string>): string { //Aqui declaramos a função obterMaiorString.
  return array.reduce((acc, cur) => acc.length > cur.length ? acc : cur, ''); //A função reduce retorna a string com mais caracteres do array.
}

//Aqui declaramos uma função genérica que recebe um array e retorna o maior item do array.
function obterMaiorItem<T>(array: Array<T>): T { //Aqui declaramos a função obterMaiorItem.
  return array.reduce((acc, cur) => acc > cur ? acc : cur); //A função reduce retorna o maior item do array.
}

//Aqui chamamos a função obterMaiorItem com um array de números.
const maiorNumero = obterMaiorItem([1, 2, 3, 4, 5]); //Aqui chamamos a função obterMaiorItem com um array de números.

//Aqui chamamos a função obterMaiorItem com um array de strings.
const maiorString = obterMaiorItem(['a', 'ab', 'abc', 'abcd']); //Aqui chamamos a função obterMaiorItem com um array de strings.

//Namespace em TypeScript
//Namespaces são espaços de nomes que permitem organizar o código em módulos.
//Aqui declaramos um namespace Utilidades.
namespace Utilidades {
  export function areaCircunferencia(raio: number): number { //Aqui declaramos a função areaCircunferencia.
    return Math.PI * Math.pow(raio, 2); //A função retorna a área da circunferência.
  }
}

//Aqui chamamos a função areaCircunferencia do namespace Utilidades.
const area = Utilidades.areaCircunferencia(10); //Aqui chamamos a função areaCircunferencia do namespace Utilidades.

//Enums em TypeScript
//Enums são conjuntos de valores nomeados.
//Aqui declaramos um enum Cor.
enum Cor { //Aqui declaramos um enum Cor.
  Vermelho = 'Vermelho', //O enum Cor tem um valor Vermelho.
  Verde = 'Verde', //O enum Cor tem um valor Verde.
  Azul = 'Azul' //O enum Cor tem um valor Azul.
}

//Aqui declaramos uma variável cor do tipo Cor.
let cor: Cor = Cor.Verde; //Aqui declaramos uma variável cor do tipo Cor e atribuímos o valor Verde.

//Aqui exibimos a variável cor no console.
//console.log(cor); //Aqui exibimos a variável cor no console.

//Type Assertion em TypeScript
//Type Assertion é a forma de converter um tipo de dado para outro.
//Aqui declaramos uma variável idadeX do tipo any.
let idadeX: any = 23; //Aqui declaramos uma variável idade do tipo any e atribuímos o valor 23.

//Aqui declaramos uma variável idadeY do tipo number.
let idadeY: number = <number>idadeX; //Aqui declaramos uma variável idade do tipo number e atribuímos o valor de idadeX.

//Aqui declaramos uma variável idadeZ do tipo number.
let idadeZ: number = idadeX as number; //Aqui declaramos uma variável idade do tipo number e atribuímos o valor de idadeX.

//Aqui exibimos a variável idadeY no console.
//console.log(idadeY); //Aqui exibimos a variável idadeY no console.

//Aqui exibimos a variável idadeZ no console.
//console.log(idadeZ); //Aqui exibimos a variável idadeZ no console.

//Type Aliases em TypeScript
//Type Aliases são formas de criar tipos personalizados.
//Aqui declaramos um type Idade.
type Idade = number; //Aqui declaramos um type Idade do tipo number.

//Aqui declaramos uma variável idadeA do tipo Idade.
let idadeA: Idade = 23; //Aqui declaramos uma variável idade do tipo Idade e atribuímos o valor 23.

//Aqui declaramos uma variável idadeB do tipo Idade.
let idadeB: Idade = 23; //Aqui declaramos uma variável idade do tipo Idade e atribuímos o valor 23.

//Aqui exibimos a variável idadeA no console.
//console.log(idadeA); //Aqui exibimos a variável idadeA no console.

//Aqui exibimos a variável idadeB no console.
//console.log(idadeB); //Aqui exibimos a variável idadeB no console.

//Intersection Types em TypeScript
//Intersection Types são formas de combinar tipos.
//Aqui declaramos um type PessoaX.
type PessoaX = {
  nome: string; //O type PessoaX tem uma propriedade nome do tipo string.
}

//Aqui declaramos um type PessoaY.
type PessoaY = {
  idade: number; //O type PessoaY tem uma propriedade idade do tipo number.
}

//Aqui declaramos um type PessoaZ.
type PessoaZ = PessoaX & PessoaY; //Aqui declaramos um type PessoaZ que combina os types PessoaX e PessoaY.

//testando conhecimentos em TypeScript

//Primeiro crie duas classes, uma chamada Clã e outra chamada Membro (membro é herdado de clã), depois crie um método chamado adicionarMembro na classe Clã que recebe um membro e o adiciona ao array de membros do clã, depois faça esse membro se casar com um membro de outro clã, e adicione o membro casado ao array de membros do clã, depois gere seu filho e adicione o filho ao array de membros do clã, com o sobrenome dos dois clãs (exemplo: filho do clã A com o clã B terá o sobrenome AB).

//Aqui declaramos a classe Clã.
class Clã {
  private membros: Membro[] = []; //A classe Clã tem uma propriedade membros do tipo Membro que é privada.

  //Aqui declaramos o método adicionarMembro da classe Clã.
  adicionarMembro(membro: Membro): void {
    this.membros.push(membro); //O método adiciona o membro ao array de membros.
  }
}

//Aqui declaramos a classe Membro.
class Membro extends Clã { //A classe Membro herda da classe Clã.
  constructor(public nome: string, public sobrenome: string) { //Aqui declaramos o construtor da classe Membro.
    super(); //Aqui chamamos o construtor da classe Clã.
  }

  //Aqui declaramos o método casar da classe Membro.
  casar(membro: Membro): void {
    const nomeFilho = `${this.nome} ${membro.nome}`; //O nome do filho é a concatenação dos nomes dos membros.
    const sobrenomeFilho = `${this.sobrenome} ${membro.sobrenome}`; //O sobrenome do filho é a concatenação dos sobrenomes dos membros.
    const filho = new Membro(nomeFilho, sobrenomeFilho); //Aqui instanciamos um objeto da classe Membro com o nome e sobrenome do filho.
    this.adicionarMembro(filho); //O membro é adicionado ao array de membros.
  }
}

//Aqui instanciamos um objeto da classe Clã.
const clã1 = new Clã(); //Aqui instanciamos um objeto da classe Clã.
const clã2 = new Clã(); //Aqui instanciamos um objeto da classe Clã.

//Aqui instanciamos um objeto da classe Membro.
const membro1 = new Membro('João', 'Silva'); //Aqui instanciamos um objeto da classe Membro.
const membro2 = new Membro('Maria', 'Santos'); //Aqui instanciamos um objeto da classe Membro.

//Aqui chamamos o método casar do objeto membro1 e passamos o membro2 como argumento.
membro1.casar(membro2); //Aqui chamamos o método casar do objeto membro1 e passamos o membro2 como argumento.

//Aqui chamamos o método adicionarMembro do objeto clã1 e passamos o membro1 como argumento.
clã1.adicionarMembro(membro1); //Aqui chamamos o método adicionarMembro do objeto clã1 e passamos o membro1 como argumento.

//Aqui chamamos o método adicionarMembro do objeto clã2 e passamos o membro2 como argumento.
clã2.adicionarMembro(membro2); //Aqui chamamos o método adicionarMembro do objeto clã2 e passamos o membro2 como argumento.

//Aqui exibimos o array de membros do clã1 no console.
console.log(clã1); //Aqui exibimos o array de membros do clã1 no console.

//Aqui exibimos o array de membros do clã2 no console.
console.log(clã2); //Aqui exibimos o array de membros do clã2 no console.

//Aqui o membro1 se casa com o membro2 e gera um filho com o nome e sobrenome dos dois membros.
//O filho é adicionado ao array de membros do clã1.
//O array de membros do clã1 é exibido no console.

//Aqui declaramos a classe Clã.                 