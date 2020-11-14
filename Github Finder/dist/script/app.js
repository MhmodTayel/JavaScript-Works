const github = new Github();
const ui = new UI();
// Search input

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText != "") {
    ui.deleteAlert();
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found" || userText === "alert") {
        // Show Alert
        ui.showAlert();
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        ui.deleteAlert();
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
    ui.deleteAlert();
  }
});
