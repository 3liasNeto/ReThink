const autor = document.querySelector('.h-author');
const frase = document.querySelector('.h-article');
// text effect 
var i = 0;
var html = frase.innerHTML;
var attr = frase.setAttribute("data", html);
var txt = frase.getAttribute("data");
var speed = 400;

function typeWriter() {
  if (i <= txt.length) {
    document.querySelector(".h-article").innerHTML = txt.slice(0 , i + 1);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const randonPhrase = randomInt(0, 10);
const termo = ["Friedrich Nietzsche","Fernando Pessoa",]

const url = `https://pensador-api.vercel.app/?term=${termo}`
fetch(url)
    .then(response => response.json())
    .then(result => {
        autor.innerText = result.frases[randonPhrase].autor
        frase.innerText = result.frases[randonPhrase].texto
    })
    .catch(error => console.log('error', error));




// acessibilidade movel, nao repetir a mesma frase, limite de frase por dia, e atualização 24h