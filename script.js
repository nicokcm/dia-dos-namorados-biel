const inicio = new Date("2025-06-19T00:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferenca % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferenca % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferenca % (1000 * 60)) /
        1000
    );

    const contador = document.getElementById("contador");

    if (contador) {

        contador.innerHTML = `
            ${dias} dias<br>
            ${horas} horas<br>
            ${minutos} minutos<br>
            ${segundos} segundos<br><br>
            ❤️
        `;

    }

}

setInterval(atualizarContador, 1000);

atualizarContador();

function escolherVoce() {

    const mensagem = document.getElementById("mensagemFinal");

    if (mensagem) {
        mensagem.style.display = "block";
    }

    for (let i = 0; i < 40; i++) {

        const coracao = document.createElement("div");

        coracao.innerHTML = "❤️";

        coracao.className = "coracao";

        coracao.style.left = Math.random() * 100 + "vw";

        coracao.style.bottom = "-50px";

        document.body.appendChild(coracao);

        setTimeout(() => {
            coracao.remove();
        }, 4000);

    }

}
