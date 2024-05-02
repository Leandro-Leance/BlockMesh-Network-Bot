
//STRICT - Utilizado para criai códigos sem qualquer tipo de bug
//Assim que o JS localiza algum bug, ele irá mostrar erro no console
//E se houver erro o coódigo não executa
"use strict";

//opa = 'teste'; //causará um erro, pois não foi definido conts ou let
const opa1 = 'teste';

//console.log(opa);
console.log(opa1);


console.log('');
console.log('=========================================================');
console.log('');

//Utilizando o console.log para debug

let a = 10;
let b = 15;

if (a === 10) {
    a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++){
    a =a + 2
}

console.log(a)

if (a > 5) {
    a = 25;
}

console.log(a)


console.log('');
console.log('=========================================================');
console.log('');


//DEBUGGER
//Com o debugger eu controlo parte a parte do processo do código.
//A cada debugger inserido ele pausa, me dando o controle de continuar na execução ou não, e ele irá executar até o próximo debugger inserido


/* let c = 1;
let d = 2;

if (c === 1) {
    c = d + 2
}

debugger;

for (let i = 0; i < d; i++){
    c = c + 2;
}

console.log('Executou o loop');
debugger;

if (c > 5) {
    c = 25;
    console.log(`A váriavel c agora vale ${c}`);
}

debugger;

console.log('FIMMMMMMM.................')


console.log('');
console.log('=========================================================');
console.log('');
 */


//TRATAMENTO DE DADOS

function checkNumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log('valor incorreto!');
        return;
    }

    console.log('valor correto');
    return result;
}

checkNumber(8);
checkNumber('não');
checkNumber(85);
checkNumber('testando');
checkNumber({});


console.log('');
console.log('=========================================================');
console.log('');


//EXCEPTIONS
//Utilizamos a expressão =throw new Error= com uma mensagem de (erro) como argumento

let x = 10;

if (x != 11) {
    //throw new Error('O valor não pode ser diferente de 11')
};


console.log('');
console.log('=========================================================');
console.log('');


//TRY CATCH
//com o try catch posso fazer testes em programas/códigos
//Só preciso inserir tudo em dentro de blocos

try {
    const soma = x + y;
} catch (error) {
    console.log(`Erro no programa: ${error}`)
}


console.log('');
console.log('=========================================================');
console.log('');


//FINALLY
//O finally é um bloco que será executado sempre, independente de erro ou não
//O bloco do finally vai depois do catch
try {
    const value = checkNumber('asd');
    if (!value) {
        throw new Error('valores inválidos');
    }
} catch (error) {
    console.log(`Opa, aconteceu um problema ${error}`);
} finally {
    console.log('O código foi executado');
};


console.log('');
console.log('=========================================================');
console.log('');


//ASSERTIONS
//O assertion é para nós devs, não aparecerá a mensagem para usuários finais
//Só preciso fazer uma function e inserir nela o throw new Error

function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error('O array precisa ter elementos');
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}

//checkArray([]);
checkArray([1,2,3]);