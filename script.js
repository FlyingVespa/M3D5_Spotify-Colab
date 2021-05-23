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
