const api_key = "8006703c3b13fe2888b2b4c0bfcce205";

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query="`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
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

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = movie.original_title;
    const movieRating = document.createElement("span");

    if (movie.vote_average >= 7.5) {
      movieRating.className = "green";
    } else if (movie.vote_average < 7.5 && movie.vote_average >= 5) {
      movieRating.className = "orange";
    } else {
      movieRating.className = "red";
    }
    movieRating.innerText = movie.vote_average;

    const movieOverview = document.createElement("div");
    movieOverview.className = "overview";
    const overview = document.createElement("h3");
    overview.innerText = "Overview";

    let movieOverviewText = movie.overview;
    if (movieOverviewText.length > 200) {
      movieOverviewText = movieOverviewText.substring(0, 200);
      movieOverviewText+=' ...'
      console.log(movieOverviewText.length);
    }

    const movieImg = document.createElement("img");
    movieImg.src = `${IMG_PATH}/${movie.poster_path}`;
    main.appendChild(movieEl);
    movieEl.appendChild(movieImg);
    movieEl.appendChild(movieInfo);
    movieInfo.appendChild(movieTitle);
    movieInfo.appendChild(movieRating);
    movieOverview.appendChild(overview);
    movieOverview.innerHTML += movieOverviewText;
    movieEl.appendChild(movieOverview);
  });
}
