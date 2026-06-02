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

function escolherVoce(){

document.getElementById("mensagemFinal").style.display = "block";

for(let i=0;i<40;i++){

const coracao = document.createElement("div");

coracao.innerHTML = "❤️";

coracao.classList.add("coracao");

coracao.style.left = Math.random() * 100 + "vw";

coracao.style.bottom = "-20px";

document.body.appendChild(coracao);

setTimeout(()=>{
coracao.remove();
},4000);

}

}
