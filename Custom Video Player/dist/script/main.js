const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
    // play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  } else {
    video.pause();
    // play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
  }
}

function updateProgress() {
  return true;
}

function setVideoProgress() {
  return true;
}

function StopVideo() {
  video.currentTime = 0;
  video.pause();
}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", StopVideo);
progress.addEventListener("change", setVideoProgress);
