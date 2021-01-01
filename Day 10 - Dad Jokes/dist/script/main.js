const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

window.addEventListener('load',generateJoke)
jokeBtn.addEventListener('click',generateJoke)
function generateJoke () {

    
    fetch('https://icanhazdadjoke.com/', {
        headers:  {
            'Accept' : 'application/json'
        }
    }).then(res => res.json()).then(data => {
        
        jokeEl.innerText = data.joke
    })
}