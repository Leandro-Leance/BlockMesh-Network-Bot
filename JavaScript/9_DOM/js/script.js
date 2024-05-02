//Movendo-se pelo DOM
const acessarDom = document.body

console.log(acessarDom);
console.log(acessarDom.childNodes[1]);
console.log(acessarDom.childNodes[1].childNodes);
console.log(acessarDom.childNodes[1].childNodes[1].textContent
);


//Selecionando por Tag
const listItens = document.getElementsByTagName('li');

console.log(listItens);


//Selecionando por ID
const listItensID = document.getElementById('main-container');
const title = document.getElementById('title');

console.log(title);
console.log(listItensID);



//Selecionando por classe
const listItensClass = document.getElementsByClassName('product');

console.log(listItensClass);


//Seleconando elementos por CSS
const productQuery = document.querySelectorAll('.product');
const mainContainer = document.querySelector('#main-container');

console.log(productQuery);
console.log(mainContainer);


//INSERTBEFORE
//Com o insertBefore consigo  adicionar ou criar um novo elemento antes do selecionado

const p = document.createElement('p');
//Aqui criei uma const para acessar o header, o parentElement acessa o elemento pai, no caso o header é o elemento pai do title(h1)
const header = title.parentElement;

header.insertBefore(p, title);


//APPENDCHILD
//Com o appendChild adiciono elemento dentro de outro, este elemento será o último elemento dentro do elemento pai
const navlinks = document.querySelector('nav ul');
const li = document.createElement('li');

navlinks.appendChild(li);


//REPLACECHILD
//O replaceChild é utilizado para trocar um elemento, precisamos de um elemento pai sendo acessado também, além do elemento a ser substituído e o que vai substituir
const h2 = document.createElement('h2');

//Com o textContent adiciono texto dentro de uma elemento
h2.textContent = 'Meu novo Título!';

header.replaceChild(h2, title);


//CREATTEXTNODE
//Com o createTextNode consigo criar nos de textos e insirer em um elemento
const myText = document.createTextNode('Agora vamos colocar mais um título');
const h3 = document.createElement('h3');
console.log(myText)

h3.appendChild(myText);
console.log(h3)

mainContainer.appendChild(h3)


//SETATTIBUTE E GETATTRIBUTE
//Com o setAttribute consigo inserir atributos dentro de tags/elementos
//Com o getAttribute consigo pegar os atributos das tags/elementos
const firstLink = navlinks.querySelector('a');

firstLink.setAttribute('href', 'https://google.com');
firstLink.setAttribute('target', '_blank');

console.log(firstLink.getAttribute('href', 'target'));


//OFFSETWIDTH E OFFSETHEIGHT com as bordas
//CLIENTWIDTH E CLIENTHEIGHT sem as boras
//Com essas propriedades consigo pegas a aulta e largura
const footer = document.querySelector('footer');

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientHeight);
console.log(footer.clientWidth);



//GETCLIENTBOUNDINGRECT getClientBoundingRect
//Com o getClientBoundingRect consigo pegar informações do elemento
const product1 = listItensClass[0];

console.log(product1.getBoundingClientRect());


//Alterando elementos no html com .style
//As regras de traço do css vão se tornar camelCase na alteração de estilos no JS
//Exemplo: bacground-color => backgroundColor
mainContainer.style.backgroundColor = '#333';
mainContainer.style.color = 'red';
mainContainer.style.paddingBottom = '50px';


//Alterando estilos de HTMLCOLLECTION
//Uso o laço de repetição FOR que vai passar item a item adicionando a propriedade desejada
for (const li of listItens) {
    li.style.backgroundColor = 'gray'
    li.style.marginBottom = '10px'
    li.style.padding = '20px'
}