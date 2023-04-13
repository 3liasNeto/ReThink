const autor = document.querySelector('.h-author');
const frase = document.querySelector('.h-article');

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const randonPhrase = randomInt(0, 10);
const autores = [
  "Fernando Pessoa",
  "William Shakespeare",
  "Desconhecido",
  "Clarice Lispector",
  "Maria Julia Paes de Silva",
  "Friedrich Nietzsche",
  "Augusto Cury",
  "Luís de Camões",
  "Mario Quintana",
  "Roberto Shinyashiki",
  "Confúcio",
  "Carlos Drummond de Andrade",
  "Pitágoras",
  "Dalai Lama",
  "Aristóteles",
  "Haile Selassie",
  "Oscar Wilde",
  "Machado de Assis",
  "Oliver Wendell Holmes Sr.",
  "Albert Einstein",
  "Charles Chaplin",
  "Stubby Currence",
  "John Wooden",
  "Thich Nhat HanhD.",
  "Elhers",
  "Fernando Teixeira de Andrade",
  "Gloria Hurtado",
  "Leonardo da Vinci",
  "Paulo Coelho",
  "Joseph Addison",
  "Antoine de Saint-Exupéry",
  "Roger Bussy-Rabutin",
  "Georges Bernanos",
  "Evelyn Beatrice Hall",
  "Geraldo Eustáquio de Souza",
  "Toquinho e Mutinho",
  "Myrtes Mathias",
  "Lilian Tonet",
  "Sócrates",
  "Nemo Nox",
  "Vinicius de Moraes",
  "Cora Coralina",
  "Amyr Klink",
  "Sarah Westphal",
  "Martin Luther King",
  "Garth Henrichs",
  "Waldemar Valle Martins",
  "Santo Agostinho",
  "Millôr Fernandes",
  "Paulo Roberto Gaefke",
  "Sêneca",
  "Vladimir Maiakóvski",
  "John Dryden",
  "Rui Barbosa",
  "Oswaldo Montenegro",
  "Oliver Goldsmith",
  "Maurice Switzer",
  "Voltaire",
  "Sigmund Freud",
  "Mahatma Gandhi",
  "William James",
  "Leon Tolstói",
  "Jo. Cooke",
  "Henry Ford",
  "Khalil Gibran",
  "John Ruskin",
  "Benjamin Franklin",
  "Victor Hugo",
  "Cynthia Kersey"]

const termo = autores[Math.floor(Math.random()*autores.length)];

const url = `https://pensador-api.vercel.app/?term=${termo}`
fetch(url)
    .then(response => response.json())
    .then(result => {
      autor.innerText = result.frases[randonPhrase].autor
      frase.innerText = result.frases[randonPhrase].texto

      if(frase.innerText.length > 500){
        throw new Error
      } 
    })
    .catch(error => {
      console.log('error', error);
      window.location.reload();
    });

//button copy
const copy = document.querySelector(".copy_reT");

            $(copy).click(function (e) {
              var clickedCell = $(e.target).closest(".div-text_reT");
              navigator.clipboard.writeText(clickedCell.text());
          });

//button info 
const infoBtn = document.querySelector(".info_reT");
const search = `https://www.google.com/search?q=${termo}`

infoBtn.addEventListener("click", function(){
  window.open(search, "_blank")
});

//button refresh 
const refreshBtn = document.querySelector(".refresh_reT");

$(document).ready(function() {
  $(refreshBtn).click(function() {
      $('.refresh-img_reT').addClass('active');
      $('.refresh-img_reT').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass('active');
      location.reload();
      });
  });
});

// erros ortograficos 
const text = frase.textContent; // texto dentro do elemento
const lang = "pt-BR"; // idioma
const apiUrl = `https://api.languagetool.org/v2/check?text=${encodeURIComponent(text)}&language=${lang}`; // URL da API

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if (data.matches.length > 0) { // verifica se há erros
      let newText = text; // nova string corrigida
      data.matches.forEach(match => {
        newText = newText.replace(match.context.text, match.replacements[0].value); // substitui o texto original pelo texto corrigido
      });
      frase.textContent = newText; // atualiza o texto no elemento HTML
      console.log(`Texto original: ${text}`);
      console.log(`Texto corrigido: ${newText}`);
    } else {
      console.log('Não há erros de ortografia.');
    }
  })
  .catch(error => console.error(error));

