const API_URL = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    showUser(data);
  } catch (error) {
    createErrorCard("No profile with this username");
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos');
    showUser(data);
  } catch (error) {
    createErrorCard("Proplem Fetching Repos");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

function showUser(data) {
  main.innerHTML = `
  <div class="card">
  <div >
    <img src="${data.avatar_url}" class="avatar" />
  </div>
  <div class="user-info">
    <h2>${data.login}</h2>
    <p>${
      data.bio
        ? data.bio
        : `Active since: ${new Date(data.created_at).toGMTString()} <br> Full name: ${data.name}`
    }</p>
    <ul>
      <li>${data.followers} <strong>Followers</strong></li>
      <li>${data.following} <strong>Following</strong></li>
      <li>${data.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
      <a href="#" class="repo">Repo 1</a>
      <a href="#" class="repo">Repo 2</a>
      <a href="#" class="repo">Repo 3</a>
    </div>
  </div>
</div>
  `;
  console.log(data);
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
  <h1>${msg}</h1>
  </div>
  `;
  main.innerHTML = cardHTML;
}
