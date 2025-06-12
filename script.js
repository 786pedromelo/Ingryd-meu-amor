
const inicio = new Date("2023-06-23T00:00:00");

function atualizaContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerText =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizaContador, 1000);
atualizaContador();
