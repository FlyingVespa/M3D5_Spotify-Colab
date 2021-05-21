window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  fetch("../Navbar/navbar.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("navbar").innerHTML = data;
    });

  function insertPlayIcon() {
    let albumImages = document.getElementsByClassName("rounded");
    for (let i = 0; i < albumImages.length; i++) {
      let iconDiv = document.createElement("div");
      iconDiv.className = "newPlay";
      iconDiv.innerHTML = `<i class="fas fa-play-circle"></i>`;
      albumImages[i].after(iconDiv);
    }
  }
  insertPlayIcon();

  function HomePage() {
    location.replace("HomePage.html");
  }

  function Podcast() {
    location.replace("Podcast.html");
  }

  function Genres() {
    location.replace("Genres.html");
  }

  function Newreleases() {
    location.replace("NewReleases.html");
  }

  function Discover() {
    location.replace("Discover.html");
  }

  async function getData() {
    const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": "f63820576cmshd99ae1c2eec0cfap1f5daajsne468be2e59ef",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  }
  getData();
});

function displayCode() {}

// FAVOURITE HEART ICON TOGGLE
const icon = document.getElementById("toggle");
icon.addEventListener("click", (event) => {
  icon.querySelector(":last-child").classList.toggle("fa-heart");
});
