const contador = document.getElementById("contador");
const startDate = new Date("2023-06-23T00:00:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    contador.innerHTML = `${days} dias, ${hours}h ${minutes}min ${seconds}s`;
}

setInterval(updateCounter, 1000);
updateCounter();

// slideshow
const imagens = [
    "IMG_0244.jpeg", "IMG_0412.jpeg", "IMG_3633.jpeg", "IMG_3644.jpeg",
    "IMG_3832.jpeg", "IMG_4747.jpeg", "IMG_6756.jpeg", "IMG_8663.jpeg",
    "66faebc3-7237-47a7-9b4a-7f3f429dc5d8.jpeg"
];
let index = 0;

function trocarImagem() {
    index = (index + 1) % imagens.length;
    document.getElementById("slide").src = imagens[index];
}

setInterval(trocarImagem, 4000);
