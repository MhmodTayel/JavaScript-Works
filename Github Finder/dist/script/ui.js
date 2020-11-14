class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    let createdAt = new Date (user.created_at);
    createdAt = createdAt.toLocaleDateString("en-US");
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class = "row"> 
    <div class="col-md-3">
    <img class="img-fluid mb-2 rounded-circle" src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
<span class="badge badge-success"
  >Public Folowers: ${user.followers}</span
>
<span class="badge badge-info"
  >Public Following: ${user.following}</span
>
<br><br>
<ul class="list-group">
  <li class="list-group-item">Username: ${user.login}</li>
  <li class="list-group-item">Blog: ${user.blog}</li>
  <li class="list-group-item">Location: ${user.location}</li>
  <li class="list-group-item">Member Since: ${createdAt}</li>
</ul>
    </div>
    </div>
    </div>
    
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6"><a href="${repo.html_url}" target="_blank"></a> ${repo.name}</div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
<span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
<span class="badge badge-success">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </div>
    
      `;
    });
    document.getElementById("repos").innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert() {
    searchUser.className = "form-control alertUI";
  }
  deleteAlert() {
    searchUser.className = "form-control ";
  }
}
