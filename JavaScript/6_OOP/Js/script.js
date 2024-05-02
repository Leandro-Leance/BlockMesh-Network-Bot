// Métodos

const animal = {
    nome: 'macaco',

    som: function (){
        return 'gritar'
    },

    tipo: function () {
        console.log('primata')
    },

};

console.log(animal.nome);
console.log(animal.som());
animal.tipo();

console.log(" ")
console.log("============================================================== ")
console.log(" ")

// Mais sobre Métodos

const pessoa = {
    nome: 'Leandro',
    animal: 'Lagarto',
    carro: 'Ferrari',

    getNome: function () {
        if (this.nome === 'leandro'){
            return `Olá, seu nome é ${this.nome}`
        } else
            return `Seu nome mudou para ${this.nome}`
    },

    setNome: function (novoNome) {
        this.nome = novoNome;
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome('Leance');

console.log(pessoa.getNome())

console.log(" ")
console.log("============================================================== ")
console.log(" ")

//Protype
//Com o prototype posso acessar seu ancestral, ou seja seu 'Pai', ou sua RAIZ
//Tbm consigo ver toda a raiz deste objeto, tudo em JS é um OBEJTO
//Seja String, Number, Boolean, Array e outros

const txt = 'leandro';
console.log(Object.getPrototypeOf(txt));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.lenght);
console.log(Object.getPrototypeOf(arr));

console.log(" ")
console.log("============================================================== ")
console.log(" ")

//CLASSES BÁSICAS
//Através do Prototype (OBJETO PAI), posso moldar novas classes e criar novos objetos FILHOS
//Uso o Prototype como molde, e vou dando novos valores e atribuiçôes nos objetos filhos usando o ( OBJECT.CREATE(aqui fica o nome do objeto prototype, ou objeto pai a ser "copiado"))

const cachorro = {
    raca: null,
    patas: 4,
    rabo: 'sim',
    beleza: null,
};

const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemão';
pastorAlemao.beleza = 'Bonito';

const pincher = Object.create(cachorro);
pincher.raca = 'Pincher';
pincher.beleza = 'Feio Pra Caramba';

console.log(pastorAlemao);
console.log(pincher);
console.log(pincher.rabo, pincher.patas);


console.log(" ")
console.log("============================================================== ")
console.log(" ")

//Classes com função construtora
//Uso uma função que cria um molde básico de Objetos
//Depois escolho deus valores passando como parametros da função

function criaCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}

const bob = criaCachorro('Bob', 'Vira Lata');
const jack = criaCachorro('Jack', 'Poodle');

console.log(bob);
console.log(jack);

console.log(" ")
console.log("=============================================================")
console.log(" ")


//Funções como classes - Função construtora moderna
//Inicio o nome da função com letra maiúscula para demonstrar que se trata de um objeto
//Com a função definida uso a palavra NEW para criar de fato esse novo objeto

function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro('Ozzy', 'Husky');
const viralata = new Cachorro('Caramelo', 'Viara Lata')
console.log(husky);
console.log(viralata);

console.log(" ")
console.log("============================================================== ")
console.log(" ")

//Adicionando métodos nas classes
//Jeito básico, antigo do JS

Cachorro.prototype.uivar = function () {
    console.log('Auuuuuuu');
}

console.log(Cachorro.prototype);

husky.uivar();

console.log(" ")
console.log("============================================================== ")
console.log(" ")


//Classes ES6
//Atualmenete essa é a forma utilizada em JS
//Maior parte do que vi até agora não é mais utilizado

class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse('jeff', 'labrador');
console.log(jeff);
console.log(Object.getPrototypeOf(jeff))

console.log(" ")
console.log("============================================================== ")
console.log(" ")


//Criando métodos nas classes

class Carros {
    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;
    }

    descrever() {
        console.log(`Este modelo se chama ${this.marca}, e tem a cor ${this.cor}`);
    }
}

const ferrari = new Carros('Ferrari', 'Vemelha');
const mustang = new Carros('Mustang', 'Preto e branco');

console.log(ferrari);
ferrari.descrever();
console.log(mustang);
mustang.descrever();

console.log(" ")
console.log("============================================================== ")
console.log(" ")

//Simbolos nas classes, para isso utilizo o Symbol()
//São utilizados quando não pretendo alterar seus valores, pois são imutaveis

class Aviao {
    constructor(marca, turbinas){
        this.marca = marca
        this.turbinas = turbinas
    }
}

const boeing = new Aviao('Boeing', 10);
console.log(boeing);

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

console.log(" ")
console.log("============================================================== ")
console.log(" ")


// GETTER e SETTER
//GETTER é utilizado para exibir algum valor
//SETTER é uilizado para alterar o valor

class Post{
    constructor(titulos, descricao, tags) {
        this.titulos = titulos;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulos(){
        return `Você está lendo : ${this.titulos}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }

}

const myPost = new Post('Programando em 2024', 'É um post sobre programação');
console.log(myPost);
console.log(myPost.exibirTitulos);

myPost.adicionarTags = 'Programação, JS, PHP';
console.log(myPost);

console.log(" ")
console.log("============================================================== ")
console.log(" ")


//Herença nas classes que estão sendo criadas pelo constructor
//Utilizo o extends para herdar as propriedades da classe pai
//E dentro da classe filho utilizo super para enviar os valores para a classe pai

class Mamifero{
    constructor(patas) {
        this.patas = patas;
    }
}

class Lobo extends Mamifero{
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    }
}

const whiteWolf = new Lobo(4, 'Shark');
const blackWolf = new Lobo(4, 'negão');

console.log(whiteWolf);
console.log(blackWolf);

console.log(" ")
console.log("============================================================== ")
console.log(" ")

//Operador INSTANCEOF
//esse operador verifica se um obejto é pai de outro


console.log(whiteWolf instanceof Lobo) // whiteWolf foi criado através de Lobo
console.log(Lobo instanceof Mamifero);// Aqui Lobo é uma classe enquanto Mamifero é um objeto, por isso o resultado é false

