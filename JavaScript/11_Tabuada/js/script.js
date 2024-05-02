// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector('#multiplication-operations');
const multiplicationTitle = document.querySelector("#multiplication-title span")

//Funções

const createTable = (number, multiplicatorNumber) => {
    //Toda vez q a função for executada a div será limpada
    multiplicationTable.innerHTML = "";

    //Função de laço de repetição e as suas configurações
    for (i = 1; i <= multiplicatorNumber; i++) {
        const resultado = number * i;
        
        //Método para criar uma template string, a partir dessa template será criado divs com seus conteúdos
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${resultado}</div>
        </div>
        `;
        
        //O new DOMParser faz conversão do meu JS para o Html, no caso o template q fiz em js será transformado em html
        const parser = new DOMParser()

        //Agora utilizo o DOMParser e passo ele para string, logo em seguida defino o que será tranformado, que no caso é a template com os argumentos de texto e html (text/html)
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        
        //E aqui adiciono a template tranformada em htmlTemplate dentro do documento HTML com o appendchild (está sendo inserido dentro da div multiplication-operations sendo o ultimo elemento, logo abaixo da tag P)
        multiplicationTable.appendChild(row)
    };

    multiplicationTitle.innerText = number
};




//Eventos

//Aqui configurei as ações do botão submit com o addEventListener
multiplicationForm.addEventListener("submit", (e) => {
    //O preventDefault não deixa a página ser recarregada
    e.preventDefault();

    //Capturei os valores dos inputs e coloquei dentro de variáveis
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    //Este if serve para que o usuário preecha todos os campos, caso contrário nada será exibido
    if (!multiplicationNumber || !multiplicatorNumber) return;
    
    //Passei os argumetos para a função criada acima a createTable
    createTable(multiplicationNumber, multiplicatorNumber)

});