const quranContainer = document.getElementById("quran-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const getSurahBtn = document.getElementById("get-surah");

let surahAudio = [];
let verseIdx = 1;

playBtn.addEventListener("click", () => {
  const isPlaying = quranContainer.classList.contains("play");
  if (isPlaying) {
    pauseSurah();
  } else {
    playSurah();
  }
});

// prevBtn.addEventListener("click", prevSurah);
// nextBtn.addEventListener("click", nextSurah);
// audio.addEventListener("ended", nextSurah);
audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

function playSurah() {
  quranContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSurah() {
  quranContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

// function prevSurah() {
//   surahIdx--;
//   if (surahIdx < 0) {
//     songIdx = songs.length - 1;
//   }
//   loadSong(songs[songIdx]);
//   playSong();
// }

// function nextSong() {
//   songIdx++;
//   if (songIdx > songs.length - 1) {
//     songIdx = 0;
//   }
//   loadSong(songs[songIdx]);
//   playSong();
// }

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

async function getSura(number) {
  let res = await fetch(
    `https://api.quran.sutanlab.id/surah/${number ? number : 1}`
  );
  let output = await res.json();
  //  console.log(output)
  showSura(output);
}

getSurahBtn.addEventListener("click", () => {
  const surahNumber = surah.value;
  if (surahNumber < 115 && surahNumber > 0) {
    getSura(surahNumber);
  }
});

function showSura(API_Output) {
  const verses = API_Output.data.verses;
  verses.forEach((verse) => {
    surahAudio.push(verse.audio.primary);
  });
  console.log(surahAudio);
  audio.src = surahAudio[0];
  
  audio.addEventListener("timeupdate", updateSurah);
}

// loadSurah(surahAudio[verseIdx]);
function updateSurah(e) {
  const { duration, currentTime } = e.srcElement;
  console.log(duration, currentTime);
  if (duration === currentTime ) {
    console.log('object');
    audio.src = surahAudio[verseIdx++]
    audio.play();
  }
}
function loadSurah(surah) {
  // title.innerText = surah;
  audio.src = surah;
}