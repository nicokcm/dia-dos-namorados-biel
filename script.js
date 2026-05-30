const inicio = new Date("2025-06-19T00:00:00");

function atualizarContador(){

const agora = new Date();

const diferenca = agora - inicio;

const dias = Math.floor(diferenca / (1000*60*60*24));

const contador = document.getElementById("contador");

if(contador){
contador.innerHTML = dias + " dias ❤️";
}

}

setInterval(atualizarContador,1000);

atualizarContador();
