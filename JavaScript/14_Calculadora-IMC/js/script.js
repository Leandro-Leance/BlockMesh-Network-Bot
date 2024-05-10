// IMC DATA
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

//todo: Seleção dos elemtos
const imcTable = document.querySelector("#imc-table");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");
const imcNumber = document.querySelector("#imc-number span");
const imcInfo = document.querySelector("#imc-info span");
const backBtn = document.querySelector("#back-btn");
const calcContainer = document.querySelector("#calc-container");
const resultContainer = document.querySelector("#result-container");

//todo: Funções
function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("table-data");

    imcTable.appendChild(div);

    const classification = document.createElement("p");
    classification.innerHTML = item.classification;

    const info = document.createElement("p");
    info.innerHTML = item.info;

    const obesity = document.createElement("p");
    obesity.innerHTML = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);
  });
}

function cleanInput() {
  heightInput.value = "";
  weightInput.value = "";
  imcNumber.classList = "";
  imcInfo.classList = "";
}

function validDigits(text) {
  return text.replace(/[^0-9,]/g, "");
}

function calcImc(weight, height) {
  const imc = (weight / (height * height)).toFixed(1);
  return imc;
}

function showOrHideResults() {
  calcContainer.classList.toggle("hide");
  resultContainer.classList.toggle("hide");
}

//todo: Inicialização
createTable(data);

//todo: EVENTOS

[heightInput, weightInput].forEach((el) => {
  el.addEventListener("input", (e) => {
    const updateValue = validDigits(e.target.value);
    e.target.value = updateValue;
  });
});

calcBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const weight = +weightInput.value.replace(",", "."); //! Com o .replace eu troco de lugar caracteres, neste caso a virgula por ponto, já que o JS reconhece apenas pontos para fazer cálculos
  const height = +heightInput.value.replace(",", "."); //! o sinal de + faz a conversão de strings obtidas nos inputs por números float, para que o JS faça os cálculos

  if (!weight || !height) return;

  const imc = calcImc(weight, height);

  let info;

  data.forEach((item) => {
    if (imc >= item.min && imc <= item.max) {
      info = item.info;
    }
  });

  if (!info) return;

  imcNumber.innerText = imc;
  imcInfo.innerText = info;

  switch (info) {
    case "Magreza":
      imcNumber.classList.add("low");
      imcInfo.classList.add("low");
      break;
    case "Normal":
      imcNumber.classList.add("good");
      imcInfo.classList.add("good");
      break;
    case "Sobrepeso":
      imcNumber.classList.add("medium");
      imcInfo.classList.add("medium");
      break;
    case "Obesidade":
      imcNumber.classList.add("high");
      imcInfo.classList.add("high");
      break;
    case "Obesidade grave":
      imcNumber.classList.add("very-high");
      imcInfo.classList.add("very-high");
      break;
  }

  showOrHideResults();
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cleanInput();
});

backBtn.addEventListener("click", () => {
  cleanInput();
  showOrHideResults();
});
