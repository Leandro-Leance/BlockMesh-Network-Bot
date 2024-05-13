// * FILTER
//* com o filter eu posso filtrar as informações de um array [array]
const arr = [1, 2, 3, 4, 5, 6];

const numerosMaiores = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(numerosMaiores);

const user = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "Marcos", available: true },
  { name: "Carlos", available: false },
  { name: "Camargo", available: true },
];

//! capturando apenas os disponiveis, no caso true
const usuariosDisponiveis = user.filter((user) => user.available);
console.log(usuariosDisponiveis);

console.log("");
console.log("==============================================================");
console.log("");

//* MAP
//* O map percorre todo o array, podendo alterar o que precisamos, enquanto o filter pega o q precisamos de um array

const products = [
  { name: "Caneta", price: 7.99, category: "oferta" },
  { name: "Caderno", price: 9.99, category: "abusivo" },
  { name: "Lapis", price: 5.99, category: "oferta" },
  { name: "Borracha", price: 2.99, category: "oferta" },
  { name: "Apontador", price: 9.99, category: "abusivo" },
];

products.map((product) => {
  if (product.category === "oferta") {
    product.desatualizado = true;
  }

  if (product.category === "abusivo") {
    product.desatualizado = false;
  }
});

console.log(products);

const mudar = products.filter((atualizar) => atualizar.desatualizado);
console.log(mudar);

const alterando = mudar.forEach((mudando) => {
  if (mudando.desatualizado === true) {
    mudando.desatualizado = false;
  }
});

console.log(alterando);

console.log("");
console.log("==============================================================");
console.log("");

//* DESTRUCTURING

const fruits = ["maçã", "mamão", "laranja"];

//todo para usar esta ação, precisamos criar um array com os nomes como abaixo, e usar o método de atribuição e o nome da array que desejamos os dados
const [f1, f2, f3] = fruits;

console.log(f1, f3);

const productDetails = {
  type: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Preto",
};

//todo: aqui consigo pegar cada chave do objeto e seus valores, é so utilizar o mesmo processo, começo passando o nome das chaves para acessar seus valores e depois uso método de atribuição e o nome do objeto

//! Aqui a chave type teve seu nome alterado para nomeDoProduto
const { type: nomeDoProduto, price, category, color } = productDetails;

console.log(nomeDoProduto, price);

console.log(
  `O nome do produto é ${nomeDoProduto}, e ele custa ${price}, e é da cor ${color}`
);

console.log("");
console.log("==============================================================");
console.log("");

//* SPREAD OPERATOR ...
// todo: utilizado em array e objetos, podemos unir dois arrays ou dois objetos para formar apenas um

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//! Unindo com o spread operator ...
const a3 = [...a1, ...a2];

console.log(a3);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: "10000", price: "50.0000" };

//! Unindo com o spread operator ...
const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);
