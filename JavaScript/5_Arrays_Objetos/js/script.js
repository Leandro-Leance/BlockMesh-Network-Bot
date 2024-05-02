
/* //       ARRAYS

const lista = [1, 2, 3, 4, 5, 'leandro'];
const seiLa = 45;


const nome = ['leandro', 'donisete'];
const sobreNome = ['leance'];
const nomeCompleto = nome.concat(sobreNome);
const teste = nomeCompleto[2];


console.log(lista);
console.log(typeof lista);
console.log(typeof seiLa, typeof lista);

console.log(lista[5], lista.length);
console.log(lista[5].length);

console.log(nomeCompleto);
console.log(nomeCompleto[1].indexOf('t'));
console.log(teste.indexOf('a'));

console.log('============================================================================================================================');


// OBJETOS

const person = {
    name: 'leandro',
    age: 29,
    job: 'monitor',
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

const car = {
    engine: 2.0,
    brand: 'vw',
    model: 'tiguan',
    km: 2000,
};


console.log(car);
car.doors = 4; //adiciona propriedade
console.log(car);
delete car.km; //remove propriedade
console.log(car);


console.log('============================================================================================================================');


//Copiando os valores de um objeto para o outro

const obj = {
    a: teste,
    b: true,
};

console.log(obj);

const obj2 = {
    c: 15,
    d: ['leandro', 'leance', 85]
};

Object.assign(obj2, obj);

console.log(obj2);


console.log('============================================================================================================================');
//Verificando as chaves com o metódo keys

console.log(Object.keys(car));
console.log(Object.keys(obj2));

console.log(Object.entries(car));
console.log(Object.entries(obj2));

console.log('============================================================================================================================');


//Loop em array, adicionando com o push e removendo com pop

const users = ['leandro', 'bixiga', 'joão', 'zé ramalho', 'kkkkkkkk'];

for (let i = 0; i < users.length; i++){
    console.log(`listando o usuário: ${users[i]}`);
}

users.push('canvas', 54, 100015415, 'casquinha');
console.log(users);


//O pop sempre removerá o ultimo item do array
//Posso resgatar o valor removido colocando ele em uma variável
users.pop();
console.log(users);

//removendo o ultimo item e colocando em uma variavel
const itemRemnovido = users.pop();
console.log(itemRemnovido);

console.log('============================================================================================================================');

//SHIFT e UNSHIFT remove
//Shift remove o primeiro elemento
//UNShift adiciona elementos no inicio do array

const letters = ['a', 'b', 'c', 'd'];
const letter = letters.shift(); //Capturando a primeira letra removida

console.log(letter);
console.log(letters);

letters.unshift('e', 'f', 'g', 'h');
letters.unshift(1, 2, 3, 4, 5, 6);

console.log(letters);

console.log('============================================================================================================================');

//IndeOf nos ajuda a encontrar o indice do elemeto detro do array
//LastindexOf encontra o ultimo elemento que se repete dentrop do array

const myElements = ['banana', 'maçã', 'abacate', 'abacaxi', 'maçã', 'limão'];

console.log(myElements.indexOf('abacate'));
console.log(myElements.indexOf('maçã'));

console.log(myElements.lastIndexOf('maçã'));


console.log('============================================================================================================================');

//Slice
//Posso adicionar +1 no slice para que ele capture também o indice 4

const testeSlice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const subArray = testeSlice.slice(2, 4); //Irá capturar os indices entre 2 e 4

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

// Irá capturar os indices a partir do indice 2
const subArray3 = testeSlice.slice(2)
console.log(subArray3)

const subArray4 = testeSlice.slice(1, 5);
console.log(subArray4);


console.log('============================================================================================================================');

//ForEach é como uma estrutura de for ou while, ele percorre cada um dos elementos do array

const nums = [1, 2, 3, 54, 6, 9];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: 'primeiro post', category: 'PHP' },
    { title: 'segundo post', category: 'JavaScript' },
    { title: 'terceiro post', category: 'Python' },
];

posts.forEach((post) => {
    console.log(`O ${post.title} é da categoria ${post.category}`);
});


console.log('============================================================================================================================');

//Includes é um método que verifica se o array tem um elemento
//o Includes me retorna dados booleans, ou seja, TRUE ou FALSE

const brands = ['BMW', 'Fiat', 'Ferrari', 'GMC'];
console.log(brands.includes('Ferrari'));

//Exemplo prático do uso de includes
const idade = [18, 56, 47, 15, 154];
if (idade.includes(18)) {
    console.log('Você pode acessar o site, pois é maior de idade')
};

console.log('============================================================================================================================');

//Reverse ele inverte os elemtos de uma array
//O reverse modifica definitivamente o array

const reverseOi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseOi.reverse())
console.log(reverseOi)


console.log('============================================================================================================================');
 */


//TRIM, é um metódo que utilizamos para a string, ou seja, remove espaços eoutros caracteres sujos

const usarTrim = '              Leandro Doniste Leance . 123           \n    '
const limpando = usarTrim.trim();

console.log(limpando)

console.log('============================================================================================================================');

//PADSTART, usado para inserir caracteres no inicio de uma string
//PADEND, insere no fim da string

const testePadStart = "Leandro";
const newNumber = testePadStart.padStart(20, "0");
const otherNumber = newNumber.padEnd(40, "0");
console.log(newNumber);
console.log(otherNumber);

console.log('============================================================================================================================');

//SPLIT divide uma string em um array
//Cada elemento será determinado por um separador em comum
//Como espaços, virgulas e pontos

const frase = 'O rato roeu a roupa do rei de roma kkkkk kkkkkkk kkkkkkkkkkkk';
const arrayDeFrase = frase.split(' ');

console.log(arrayDeFrase);

console.log('============================================================================================================================');

//JOIN  une um array em uma string, quase o inverso do split

const fraseDenovo = arrayDeFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ['mouse', 'teclado', 'monitor'];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
console.log(fraseDeCompra);

console.log('============================================================================================================================');

//REPEAT
const palavra = 'testando ';
console.log(palavra.repeat(5))

console.log('============================================================================================================================');

//REST OPERATOR ...
//Posso passar quantos argumtos quiser dentro, não preciso ter uma quantidade definida

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++){
        total += args[i]
    }

    return total;
}

console.log(somaInfinita(1, 2, 3, 45, 486145, 4848451546548545454))

    const somak = function(...args) {
    let oi = 0;

    for (let i = 0; i < args.length; i++){
        oi += args[i]
    }

    return oi
}

console.log(somak(50, 1, 100, 200));

console.log('============================================================================================================================');

// FOR OF

const soma2 = (...args) => {
    let total = 0

    for (num of args) {
        total += num;
    }

    return total;
};

console.log(soma2(56, 4, 60));

console.log('============================================================================================================================');

//DESTRUCTURING em objetos

const userDetails = {
    firstName: 'Leandro',
    lastName: 'Leance',
    job: 'Programador'
}

const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job)

//Renomeando a variável usando a sintaxe do destruction
const { firstName: primeiroNome } = userDetails;
console.log(primeiroNome)


console.log('============================================================================================================================');

//DESTRUCTURING em arrays

const mylist = ['avião', 'carro', 'cavalo']

const [veiculoA, veiculoB, veiculoC] = mylist

console.log(veiculoA, veiculoB, veiculoC)



//JSON
const myJson = '{"name": "Leandro", "age": "29", "skills": ["PHP", "Java", "Python"]}';

console.log(myJson)

//JSON para Objetos e Objetos para JSON

const myObject = JSON.parse(myJson) // JSON.parse tranforma em objeto
console.log(myObject);

myObject.lastName = 'Leance'
console.log(myObject);

//JSON.strngify transforma o objeto em JSON novamente
const myNewJason = JSON.stringify(myObject);
console.log(myNewJason)