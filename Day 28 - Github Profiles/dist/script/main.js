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
    const { data } = await axios(API_URL + username + "/repos");
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Proplem Fetching Repos");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    getRepos(user);
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
        : `Active since: ${new Date(
            data.created_at
          ).toGMTString()} <br> Full name: ${data.name}`
    }</p>
    <ul>
      <li>${data.followers} <strong>Followers</strong></li>
      <li>${data.following} <strong>Following</strong></li>
      <li>${data.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
  </div>
</div>
  `;
  console.log(data);
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card">
  <h1>${msg}</h1>
  </div>
  `;
  main.innerHTML = cardHTML;
}
