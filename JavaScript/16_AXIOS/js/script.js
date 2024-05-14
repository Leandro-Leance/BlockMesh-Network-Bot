//* Primero request

//TODO: utilizdo o try catch para capturar possíveis erros, pois estou exposntando os dados de "usuários" para ser utilizado no meu projeto

//TODO: o async é para esperar os dados chegarem
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

//3 - Imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    container.appendChild(div);
  });
};

printData();

const metodoPost = document.querySelector("#post-form");
const title = document.querySelector("#title");
const body = document.querySelector("#body");

metodoPost.addEventListener("submit", (e) => {
  e.preventDefault();

  axios.post("http://jsonplaceholder.typicode.com/posts"),
    {
      title: title.value,
      body: body.value,
      userId: 1,
    };
});
