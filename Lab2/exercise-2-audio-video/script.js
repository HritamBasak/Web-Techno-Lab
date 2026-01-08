const audio = document.getElementById("audioPlayer");
const audioTime = document.getElementById("audioTime");

audio.addEventListener("timeupdate", function () {
    audioTime.textContent = Math.floor(audio.currentTime);
});

const video = document.getElementById("videoPlayer");
const videoTime = document.getElementById("videoTime");

video.addEventListener("timeupdate", function () {
    videoTime.textContent = Math.floor(video.currentTime);
});
