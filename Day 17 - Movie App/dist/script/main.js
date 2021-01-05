const api_key = "8006703c3b13fe2888b2b4c0bfcce205";

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query="`;

const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
