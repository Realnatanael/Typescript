"use strict";
//Constantes e variáveis em TypeScript
const nome = 'João';
const idade = 27;
const adulto = true;
const simbolo = Symbol('qualquer-symbol');
//let nome: string = 'João';
//let idade: number = 27;
//let adulto: boolean = true;
//let simbolo: symbol = Symbol('qualquer-symbol');
// Arrays
const arrayNumbers = [1, 2, 3]; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, number.
const arrayStrings = ['a', 'b', 'c']; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, string.
//let arrayNumbers: Array<number> = [1, 2, 3];
//let arrayStrings: Array<string> = ['a', 'b', 'c'];
//Outra forma de declarar arrays
const arrayNumbers2 = [1, 2, 3]; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, number.
const arrayStrings2 = ['a', 'b', 'c']; //Note que primeiro declaramos o tipo de dado que o array irá armazenar, no caso, string.
//Alterando valores de variáveis em TypeScript em depois dando console.log
let minhaIdade = 27;
//console.log(minhaIdade);
//minhaIdade = 28;
console.log(minhaIdade);
//Funções em TypeScript
function soma(x, y) {
    return x + y; //A função retorna a soma dos dois parâmetros.
}
const result = soma(2, 2); //Aqui chamamos a função soma e passamos os valores 2 e 2 como argumentos.
//Funções em TypeScript com retorno void
function criaErro() {
    throw new Error('Erro qualquer'); //A função lança um erro.
}
//void é um tipo que representa a ausência de tipo. Ou seja, é um tipo que não tem valor. POde ser usado em funções que não retornam nada. ex de funções que não retornam nada: console.log, alert, etc.	
//Tipando objetos em TypeScript
const pessoa = {
    nome: 'João', //A propriedade nome do objeto pessoa recebe o valor 'João'.
    idade: 27 //A propriedade idade do objeto pessoa recebe o valor 27.
};
//Tipando arrays em TypeScript
const arrayNumbers3 = [1, 2, 3]; //Aqui declaramos um array de números.
const arrayStrings3 = ['a', 'b', 'c']; //Aqui declaramos um array de strings.
//POO em TypeScript
//Classes em TypeScript
class Pessoa {
    //Aqui declaramos o construtor da classe Pessoa.
    constructor(nome, idade, adulto) {
        this.nome = nome; //A propriedade nome da classe Pessoa recebe o valor do parâmetro nome.
        this.idade = idade; //A propriedade idade da classe Pessoa recebe o valor do parâmetro idade.
        this.adulto = adulto; //A propriedade adulto da classe Pessoa recebe o valor do parâmetro adulto.
    }
}
//Instanciando objetos em TypeScript
const pessoa1 = new Pessoa('João', 27, true); //Aqui instanciamos um objeto da classe Pessoa.
//herança em TypeScript
class Carro {
    constructor() {
        this.velocidadeAtual = 0; //A classe Carro é do tipo private
    }
    //Aqui declaramos o método acelerar da classe Carro.
    acelerar() {
        this.velocidadeAtual += 10; //A propriedade velocidadeAtual da classe Carro é incrementada em 10.
    }
    //Aqui declaramos o método parar da classe Carro.
    parar() {
        this.velocidadeAtual = 0; //A propriedade velocidadeAtual da classe Carro é zerada.
    }
    //Aqui declaramos o método velocidadeAtual da classe Carro.
    velocidade() {
        return this.velocidadeAtual; //O método retorna a propriedade velocidadeAtual da classe Carro.
    }
}
class Camaro extends Carro {
    constructor() {
        super(...arguments);
        this.turbo = false; //A classe Camaro tem uma propriedade turbo do tipo boolean.
    }
    //Aqui declaramos o método ligarTurbo da classe Camaro.
    ligarTurbo() {
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
    constructor() {
        this._idade = 0; //A classe Pessoa2 tem uma propriedade _idade do tipo number.
    }
    //Esse _ antes do nome da propriedade é uma convenção para indicar que a propriedade é privada.
    //Se não fosse privada poderíamos acessar a propriedade diretamente, mas como é privada, precisamos de um método para acessá-la.
    //Aqui declaramos o método get idade da classe Pessoa2.
    get idade() {
        return this._idade; //O método get idade retorna a propriedade _idade da classe Pessoa2.
    }
    //Aqui declaramos o método set idade da classe Pessoa2.
    set idade(valor) {
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
    static nextId() {
        return Util.id++; //O método retorna a propriedade id da classe Util incrementada em 1.
    }
}
Util.id = 0; //A classe Util tem uma propriedade id do tipo number.
//console.log(Util.nextId()); //Aqui chamamos o método nextId da classe Util e exibimos o valor no console.
//Private, Public, Protected em TypeScript
//Private: A propriedade ou método é acessível apenas dentro da própria classe.
//Public: A propriedade ou método é acessível de fora da classe.
//Protected: A propriedade ou método é acessível apenas dentro da própria classe e nas classes que herdam dela.
class Empresa {
    constructor(nome, cnpj) {
        //Esse metodo pode ser publico pelo fato de que n
        this.colaboradores = []; //A classe Empresa tem uma propriedade colaboradores do tipo Colaborador que é privada e somente leitura.
        this.nome = nome; //A propriedade nome da classe Empresa recebe o valor do parâmetro nome.
        this.cnpj = cnpj; //A propriedade cnpj da classe Empresa recebe o valor do parâmetro cnpj.
    }
    adicionaColaborador(colaborador) {
        this.colaboradores.push(colaborador); //O método adiciona o colaborador ao array de colaboradores.
    }
    mostrarColaboradores() {
        for (const colaborador of this.colaboradores) { //Para cada colaborador no array de colaboradores.
            console.log(colaborador); //Exibe o colaborador no console.
        }
    }
}
class Colaborador {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    } //Aqui declaramos o construtor da classe Colaborador.
}
const empresa = new Empresa('Udemy', '11.111.111/0001-11'); //Aqui instanciamos um objeto da classe Empresa.
const colaborador1 = new Colaborador('Luiz', 'Miranda'); //Aqui instanciamos um objeto da classe Colaborador.
const colaborador2 = new Colaborador('Maria', 'Silva'); //Aqui instanciamos um objeto da classe Colaborador.
empresa.adicionaColaborador(colaborador1); //Aqui chamamos o método adicionaColaborador do objeto empresa e passamos o colaborador1 como argumento.
empresa.adicionaColaborador(colaborador2); //Aqui chamamos o método adicionaColaborador do objeto empresa e passamos o colaborador2 como argumento.
function getUser() {
    return {
        nome: 'João', //A propriedade nome do objeto retornado recebe o valor 'João'.
        email: 'João@gmail.com' //A propriedade email do objeto retornado recebe o valor 'Joã
    };
}
function setUser(usuario) {
    //...
}
//Generics em TypeScript
//Generics são tipos que são definidos em tempo de execução.
//Eles permitem criar funções, classes e interfaces que podem trabalhar com diferentes tipos de dados.
//Aqui declaramos uma função que recebe um array de números e retorna o maior número.
function obterMaiorNumero(array) {
    return Math.max(...array); //A função Math.max retorna o maior número do array.
}
//Aqui declaramos uma função que recebe um array de strings e retorna a string com mais caracteres.
function obterMaiorString(array) {
    return array.reduce((acc, cur) => acc.length > cur.length ? acc : cur, ''); //A função reduce retorna a string com mais caracteres do array.
}
//Aqui declaramos uma função genérica que recebe um array e retorna o maior item do array.
function obterMaiorItem(array) {
    return array.reduce((acc, cur) => acc > cur ? acc : cur); //A função reduce retorna o maior item do array.
}
//Aqui chamamos a função obterMaiorItem com um array de números.
const maiorNumero = obterMaiorItem([1, 2, 3, 4, 5]); //Aqui chamamos a função obterMaiorItem com um array de números.
//Aqui chamamos a função obterMaiorItem com um array de strings.
const maiorString = obterMaiorItem(['a', 'ab', 'abc', 'abcd']); //Aqui chamamos a função obterMaiorItem com um array de strings.
//Namespace em TypeScript
//Namespaces são espaços de nomes que permitem organizar o código em módulos.
//Aqui declaramos um namespace Utilidades.
var Utilidades;
(function (Utilidades) {
    function areaCircunferencia(raio) {
        return Math.PI * Math.pow(raio, 2); //A função retorna a área da circunferência.
    }
    Utilidades.areaCircunferencia = areaCircunferencia;
})(Utilidades || (Utilidades = {}));
//Aqui chamamos a função areaCircunferencia do namespace Utilidades.
const area = Utilidades.areaCircunferencia(10); //Aqui chamamos a função areaCircunferencia do namespace Utilidades.
//Enums em TypeScript
//Enums são conjuntos de valores nomeados.
//Aqui declaramos um enum Cor.
var Cor;
(function (Cor) {
    Cor["Vermelho"] = "Vermelho";
    Cor["Verde"] = "Verde";
    Cor["Azul"] = "Azul"; //O enum Cor tem um valor Azul.
})(Cor || (Cor = {}));
//Aqui declaramos uma variável cor do tipo Cor.
let cor = Cor.Verde; //Aqui declaramos uma variável cor do tipo Cor e atribuímos o valor Verde.
//Aqui exibimos a variável cor no console.
//console.log(cor); //Aqui exibimos a variável cor no console.
//Type Assertion em TypeScript
//Type Assertion é a forma de converter um tipo de dado para outro.
//Aqui declaramos uma variável idadeX do tipo any.
let idadeX = 23; //Aqui declaramos uma variável idade do tipo any e atribuímos o valor 23.
//Aqui declaramos uma variável idadeY do tipo number.
let idadeY = idadeX; //Aqui declaramos uma variável idade do tipo number e atribuímos o valor de idadeX.
//Aqui declaramos uma variável idadeZ do tipo number.
let idadeZ = idadeX; //Aqui declaramos uma variável idade do tipo number e atribuímos o valor de idadeX.
//Aqui declaramos uma variável idadeA do tipo Idade.
let idadeA = 23; //Aqui declaramos uma variável idade do tipo Idade e atribuímos o valor 23.
//Aqui declaramos uma variável idadeB do tipo Idade.
let idadeB = 23; //Aqui declaramos uma variável idade do tipo Idade e atribuímos o valor 23.
//testando conhecimentos em TypeScript
//Primeiro crie duas classes, uma chamada Clã e outra chamada Membro (membro é herdado de clã), depois crie um método chamado adicionarMembro na classe Clã que recebe um membro e o adiciona ao array de membros do clã, depois faça esse membro se casar com um membro de outro clã, e adicione o membro casado ao array de membros do clã, depois gere seu filho e adicione o filho ao array de membros do clã, com o sobrenome dos dois clãs (exemplo: filho do clã A com o clã B terá o sobrenome AB).
//Aqui declaramos a classe Clã.
class Clã {
    constructor() {
        this.membros = []; //A classe Clã tem uma propriedade membros do tipo Membro que é privada.
    }
    //Aqui declaramos o método adicionarMembro da classe Clã.
    adicionarMembro(membro) {
        this.membros.push(membro); //O método adiciona o membro ao array de membros.
    }
}
//Aqui declaramos a classe Membro.
class Membro extends Clã {
    constructor(nome, sobrenome) {
        super(); //Aqui chamamos o construtor da classe Clã.
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //Aqui declaramos o método casar da classe Membro.
    casar(membro) {
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
