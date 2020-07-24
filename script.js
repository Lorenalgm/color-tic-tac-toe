//Pegando todos os cards em um array
const cards = document.querySelectorAll(".card");

let jogador = true;

//Percorrendo o array de cards e para cada card adicionar um event listen
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (jogador) {
      //Verificando se um square está sem a classe target para que o player possa marcar
      //Caso esteja com target, não irá marcar
      if (!card.classList.contains("target")) {
        card.style.backgroundColor = "red";

        //Adicionando uma classe para os quadrados que já estão marcados por algum player
        card.classList.add("target");

        //O jogador será o valor inverso ao atual
        //Se player1, então player2. Se player2, então player1
        jogador = !jogador;
      }
    } else {
      //Verificando se um square está sem a classe target para que o player possa marcar
      //Caso esteja com target, não irá marcar
      if (!card.classList.contains("target")) {
        card.style.backgroundColor = "yellow";

        //Adicionando uma classe para os quadrados que já estão marcados por algum player
        card.classList.add("target");

        //O jogador será o valor inverso ao atual
        //Se player1, então player2. Se player2, então player1
        jogador = !jogador;
      }
    }
  });
});
