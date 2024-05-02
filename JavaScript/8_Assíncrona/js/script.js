//Assícrona
//Passo o Set Time Out e nele uma função anonima
//Ao final passo o tempo depois da virgula, o tempo é em milesegundos

/* console.log('O programa ainda não executou  1....');


/* setTimeout(function () {
    console.log('Cheguei em ultimo lugar    4......')
}, 3000) */

/* console.log('O programa ainda não executou  2....');
console.log('O programa ainda não executou  3....');


console.log('');
console.log('=============================================');
console.log('');
 */
//SetInterval
//O setInterval é como o setTimeOut, só que neste caso ele irá se repetir mais vezes

/* console.log('Ainda não começou') */

/* setInterval(function () {
    console.log('agora sim, este é o setInterval, e a cada 7 segundos ficarei repetindo essa mesma mensagem')
}, 7000);

console.log('Esperando um pouco kkkkkkkkkkkkkkkkk')

setTimeout(function () {
    console.log('Mais um pouquinho poxa kkkkkkkkk......')
}, 3000); */


/* console.log('');
console.log('=============================================');
console.log('');
 */

//PROMISES
//O promise é um objetio, e como todo objeto ele possui métodos */


/* const promessa = Promise.resolve(5 + 5);

console.log('Algum código');

promessa.then(value => {
    console.log(`A soma é ${value}`);
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`Agora é ${value}`))
;

console.log('Outro código'); */


/* console.log('');
console.log('=============================================');
console.log(''); */

//Falha na promise
/* Promise.resolve(4 * 'asd')
    .then((n) => {
        if (Number.isNaN(n)) {
            throw new Error('Valores inválidos')
        }
    })
    .catch((err) => console.log(`Um erro ocorreu: ${err}`));
 */

//Rejeição

/* function checkNumber(n) {
    return new Promise((resolve, reject) => {

        if (n > 10) {
            resolve(`O número é maior que 10`)
        } else {
            reject(new Error('Número muito baixo'))
        }
    });
}

const a = checkNumber(20);
const b = checkNumber(9);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));
b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu: ${err}`));


console.log('');
console.log('=============================================');
console.log(''); */


//Resolvendo várias Promises
/* const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10)
    }, 5000)
})

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30);
    } else {
        reject('Erro!')
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));


console.log('');
console.log('=============================================');
console.log('');
 */

//ASYN FUNCTIONS

/* async function somaComDelay(a, b) {
    return a + b
}

somaComDelay(15, 20).then((value) => {
    console.log(`O valor da soma é ${value}`);
});

console.log('Teste async')


console.log('');
console.log('=============================================');
console.log(''); */


//Instrução Await
function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolveu a Promise');
        }, 5000);
    });
}

async function chamadaAsync() {
    console.log('Chamando a Promise, e esperando o resultado');
    const result = await resolveComDelay();
    console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();


console.log('');
console.log('=============================================');
console.log('');


//Generators
function* gerando() {
    yield 50;
    yield 80;
    yield 70;
    yield 120;
}

const gen = gerando();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);