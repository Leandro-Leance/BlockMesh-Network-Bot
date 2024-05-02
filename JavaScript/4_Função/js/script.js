const nome = function(name) {
    console.log(`meu nome é ${name}`);
};

nome('Leandro Leance')
nome('Pamela Monteiro')
nome('Zé Roberto')
nome('Carlos Eduardo')
nome(`Conta kkkkkkk ${10 + 50}`)


// 2 -  return nas funções
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a, b);

// 5 - Arrow function
const testeArrow = () => {
    console.log(`está é uma arrow function`);
};

testeArrow();

// 6 - Mais sobre arrow function
const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4))




const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));
