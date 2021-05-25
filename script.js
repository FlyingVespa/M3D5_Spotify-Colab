window.onload = () => {
  console.log("page is fully loaded");
  fetchAlbums();
  fetch("./navbar.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("navbar").innerHTML = data;
    });
};

const artistCoverDiv = document.querySelector(".card");
const thisIsRow = document.querySelector(".HomePage-body>.row>.col>.row");
let albumsData = [];

function fetchAlbums() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=usher")
    .then((res) => res.json())
    .then((_Albums) => {
      albumsData = _Albums.data;
      console.log(albumsData);
      displayArtists();
    })
    .catch((err) => console.error(err.message));
}

const displayArtists = () => {
  albumsData.slice(0, 6).forEach(
    (album) =>
      (artistCoverDiv.innerHTML += `
      <div id="this_card" class="card">
  <img src="${album.artist.picture_big}" />
  <div class="card-body">
    <h5>${album.title}</h5>
    <h6 class="text-muted">${album.artist.name}</h6>
  </div>
</div>`)
  );
  thisIsRow.appendChild(artistCoverDiv);
};

const searchButtonFun = () => {
  const divRow = document.querySelector(".row.thisrow");
  divRow.innerHTML = "";
  const searchInput = document.getElementById("search-input").value;
  const myfetch = fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`
  )
    .then((res) => res.json())
    .then((data) => loadAlbums(data.data))
    .catch((error) => alert(error));
};

const loadAlbums = (newData) => {
  const divRow = document.querySelector(".row.thisrow");
  newData.forEach((element) => {
    divRow.innerHTML += `
    <div id="this_card" class="card" style="width: 14rem">
      <img src="${element.album.cover}" />
      <div class="card-body">
            <h5><a href='${location.href.replace(
              "SearchPage.html",
              ""
            )}AlbumPage.html?id=${element.artist.id}'>${element.album.title}</a>
            </h5>
            <h6><a href='${location.href.replace(
              "SearchPage.html",
              ""
            )}ArtistPage.html?id=${element.artist.id}'>${
      element.artist.name
    }</a></h6>
          </div>
    </div>
    `;
  });
};
