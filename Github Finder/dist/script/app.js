const github = new Github();
const ui = new UI();
// Search input

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText != "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found" || userText === "alert") {
        // Show Alert
        ui.showAlert();
      } else {
        // Show Profile
        console.log(data.profile);
        ui.showProfile(data.profile);
        ui.deleteAlert();
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
