window.onload = () => {
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
};

// FAVOURITE HEART ICON TOGGLE
const icon = document.getElementById("toggle");
icon.addEventListener("click", (event) => {
  icon.querySelector(":last-child").classList.toggle("fa-heart");
});
