function fetchApi(){
fetch("https://pensador-api.vercel.app/?term=Jesus+Cristo&max=7")
.then((response) => response.json())
.then(data => { 
    const div = document.querySelector('.div-text_reT');
    data.map((item)=>{
        const author = document.createElement('h1');
        const text = document.createElement('h1');

        author.setAttribute('class', 'h-author');
        text.setAttribute('class', 'h-article');

        author.innerHTML = item.autor;
        text.innerHTML = item.texto;

        div.appendChild(text);
        div.appendChild(author);
    })
});
}