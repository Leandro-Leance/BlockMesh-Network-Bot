
//Adidionando Eventos
//Para adicionar utilizo o método addEventListner, depois insiro o evento seguido de virgula, logo em seguida defino a função que este evento terá
const btn = document.querySelector('#my-button');

btn.addEventListener('click', function () {
    console.log('Clicou Aqui');
});



//Removendo eventos
//Para remover a função eu preciso ter uma função nomeada, ou seja, criar primeiro uma função e depois criar o seu evento utilizando-a
//Pois precisarei do nome da função de evento na hora de criar a função de remoção
const secondBtn = document.querySelector('#btn');

function imprimirMensagem() {
    console.log('Teste');
}

//criado o evento click, agora passo o nome da função
secondBtn.addEventListener('click', imprimirMensagem);

const thirdBtn = document.querySelector('#other-btn');

thirdBtn.addEventListener('click', () => {
    console.log('Evento removido');
    secondBtn.removeEventListener('click', imprimirMensagem);
});


//Argumento do Evento
const myTitle = document.querySelector('#my-title');

myTitle.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})


//Propagação de eventos
//QUANDO EXISTE UM EVENTO DENTRO DO OUTRO
//Para isso atribuo um parametro no evento filho e utilizo o método .stopPropagation
const btnContainer = document.querySelector('#btn-container')
const divBtn = document.querySelector('#div-btn')

btnContainer.addEventListener('click', () => {
    console.log('Evento pai!')
})

divBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Evento filho')
})


//Removendo o evento padrão
//Links tem evento padrão de levar até páginas urls definidas, mas podemos remover esse padrão
const a = document.querySelector('a')

a.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Não alterou a página')
})


//Eventos KEYDOWN e KEYUP
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})


//Eventos de Mouse
const mouseEvents = document.querySelector('#mouse')

mouseEvents.addEventListener("mousedown", () => {
    console.log('Pressionou o botão')
})

mouseEvents.addEventListener("mouseup", () => {
    console.log('Soltou o botão')
})

mouseEvents.addEventListener("dblclick", () => {
    console.log('Clique duplo')
})


//MOVIMENTAÇÃO DE MOUESE
//Utilizando o mouse move posso capturar a posição do mouse/ponteiro
document.addEventListener('mousemove', (e) => {
    //console.log(`Posiçao do ponteiro no eixo X: ${e.x}` )
    //console.log(`Posiçao do ponteiro no eixo Y: ${e.y}` )
})


//EVENTOS POR SCROLL
const scrollDiv = window.addEventListener('scroll', (e) => {
    if (window.scrollY > 200) {
        console.log('Passamos de 200px')
    }
})


//EVENTO DE FOCO/BLUR
const input = document.querySelector('#my-input')

input.addEventListener('focus', (e) => {
    console.log('Entrou no input')
})

input.addEventListener('blur', (e) => {
    console.log('Saiu no input')
})


//EVENTO DE LOAD
//Carregamento de página, não é mais utu]ilizado pois em muitos navegadores está restrito o uso

//Assim q entra na página e caarrega exibe a mensagem 
window.addEventListener('load', () => {
    console.log('A página carregou')
})

//Não funciona mais, assim que saia da página exibia uma mensagem, foi proibido
window.addEventListener('load', (e) => {
    e.preventDefault();
    e.returnValue = 'teste'
})



//TÉCNICA DEBOUNCE
//Técnica para fazer um evento dispara menos vezes
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        //Aqui estarei limpando a execução e reiniciando ela
        if (timeout) {
            clearTimeout(timeout)
        }


        //Aqui estou aplicando os argumentos para esta função, por isso utilizo o apply
        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener('mousemove', debounce(() => {
    console.log('executando a cada 400ms')
}, 400))