window.onload = () => {
  console.log("page is fully loaded");

  fetch("./navbar.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("navbar").innerHTML = data;
      load_default_albums();
    });
};
function insertPlayIcon() {
  let albumImages = document.getElementsByClassName("rounded");
  for (let i = 0; i < albumImages.length; i++) {
    let iconDiv = document.createElement("div");
    iconDiv.className.add("newPlay");
    iconDiv.innerHTML = `<i class="fas fa-play-circle"></i>`;
    albumImages[i].after(iconDiv);
  }
}
insertPlayIcon();

// FAVOURITE HEART ICON TOGGLE
// const icon = document.getElementById("toggle");
// icon.addEventListener("click", (event) => {
//   icon.querySelector(":last-child").classList.toggle("fa-heart");
// });
const row_select_homepage = document.querySelectorAll(".row-title-HomePage");

const load_default_albums = () => {
  for (let i = 0; i < row_select_homepage.length; i++) {
    const album_row_div = `
  <div class="row mt-4 mb-4">
  <div class="col-xs-4 col-md-3 col-lg-2 col-sm-4">
    <div class="card-HomePage">
      <i class="fab fa-spotify logoStyle"></i>
      <img
        src="../assets/images/album-images/ColdabankFreedo-album.jpg"
        class="img-fluid rounded"
        alt="album-image"
      />
      <i class="fas fa-play-circle newPlay"></i>
    </div>
    <div class="card-HomePage-title">Cold & Freedo</div>
  </div>
  <div class="col-xs-4 col-md-3 col-lg-2 col-sm-4">
    <div class="card-HomePage">
      <i class="fab fa-spotify logoStyle"></i>
      <img
        src="../assets/images/album-images/ColdabankFreedo-album.jpg"
        class="img-fluid rounded"
        alt="album-image"
      />
      <i class="fas fa-play-circle newPlay"></i>
    </div>
    <div class="card-HomePage-title">Cold & Freedo</div>
  </div>
  <div class="col-xs-4 col-md-3 col-lg-2 col-sm-4">
    <div class="card-HomePage">
      <i class="fab fa-spotify logoStyle"></i>
      <img
        src="../assets/images/album-images/ColdabankFreedo-album.jpg"
        class="img-fluid rounded"
        alt="album-image"
      />
      <i class="fas fa-play-circle newPlay"></i>
    </div>
    <div class="card-HomePage-title">Cold & Freedo</div>
  </div>
  <div class="col-xs-4 col-md-3 col-lg-2 col-sm-4">
    <div class="card-HomePage">
      <i class="fab fa-spotify logoStyle"></i>
      <img
        src="../assets/images/album-images/ColdabankFreedo-album.jpg"
        class="img-fluid rounded"
        alt="album-image"
      />
      <i class="fas fa-play-circle newPlay"></i>
    </div>
    <div class="card-HomePage-title">Cold & Freedo</div>
  </div>
  <div class="col-xs-4 col-md-3 col-lg-2 col-sm-4">
    <div class="card-HomePage">
      <i class="fab fa-spotify logoStyle"></i>
      <img
        src="../assets/images/album-images/ColdabankFreedo-album.jpg"
        class="img-fluid rounded"
        alt="album-image"
      />
      <i class="fas fa-play-circle newPlay"></i>
    </div>
    <div class="card-HomePage-title">Cold & Freedo</div>
  </div>
  <div class="col-xs-4 col-md-3 col-lg-2 col-sm-4">
    <div class="card-HomePage">
      <i class="fab fa-spotify logoStyle"></i>
      <img
        src="../assets/images/album-images/ColdabankFreedo-album.jpg"
        class="img-fluid rounded"
        alt="album-image"
      />
      <i class="fas fa-play-circle newPlay"></i>
    </div>
    <div class="card-HomePage-title">Cold & Freedo</div>
  </div>
</div>
  `;
    row_select_homepage[i].appendChild(album_row_div);
  }
};

console.clear();

// instigate our audio context

// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// load some sound
const audioElement = document.querySelector("audio");
const track = audioCtx.createMediaElementSource(audioElement);

const playButton = document.querySelector(".tape-controls-play");

// play pause audio
playButton.addEventListener(
  "click",
  function () {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (this.dataset.playing === "false") {
      audioElement.play();
      this.dataset.playing = "true";
      // if track is playing pause it
    } else if (this.dataset.playing === "true") {
      audioElement.pause();
      this.dataset.playing = "false";
    }

    let state = this.getAttribute("aria-checked") === "true" ? true : false;
    this.setAttribute("aria-checked", state ? "false" : "true");
  },
  false
);

// if track ends
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
    playButton.setAttribute("aria-checked", "false");
  },
  false
);

// volume
const gainNode = audioCtx.createGain();

const volumeControl = document.querySelector('[data-action="volume"]');
volumeControl.addEventListener(
  "input",
  function () {
    gainNode.gain.value = this.value;
  },
  false
);

// panning
const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioCtx, pannerOptions);

const pannerControl = document.querySelector('[data-action="panner"]');
pannerControl.addEventListener(
  "input",
  function () {
    panner.pan.value = this.value;
  },
  false
);

// connect our graph
track.connect(gainNode).connect(panner).connect(audioCtx.destination);

const powerButton = document.querySelector(".control-power");

powerButton.addEventListener(
  "click",
  function () {
    if (this.dataset.power === "on") {
      audioCtx.suspend();
      this.dataset.power = "off";
    } else if (this.dataset.power === "off") {
      audioCtx.resume();
      this.dataset.power = "on";
    }
    this.setAttribute("aria-checked", state ? "false" : "true");
    console.log(audioCtx.state);
  },
  false
);

// Track credit: Outfoxing the Fox by Kevin MacLeod under Creative Commons
