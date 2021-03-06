window.onload = () => {
  console.log("page is fully loaded");
  // fetchAlbums();
  fetch("./navbar.html")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector("navbar").innerHTML = data;
    });
};

/*---------------------------------------------------------------------------*/
/*----HomePage----*/

const homePageLink = document.querySelector(".navbar-page>div>ul>li>a");
const selectAlbumCard = document.querySelector("#card_homepage");
const thisIsRow = document.querySelector("#row_homepage");

let dataHomePage = [];

function fetchHomePageAlbums() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=usher")
    .then((res) => res.json())
    .then((albumsDataHomePage) => {
      dataHomePage = albumsDataHomePage.data;
      console.log(albumsDataHomePage);
      loadHomePageAlbums();
    })
    .catch((err) => console.error(err.message));
}

const loadHomePageAlbums = () => {
  dataHomePage.slice(0, 6).forEach(
    (album) =>
      (selectAlbumCard.innerHTML += `
      <img src="${album.artist.picture_big}" />
      <div class="card-body">
        <h5>${album.title}</h5>
        <h6 class="text-muted">${album.artist.name}</h6>
      </div>
`)
  );
  thisIsRow.appendChild(selectAlbumCard);
};

/*-----------------------------------------------------------------------------------*/
/* SEARCH FUNCTION */

const spinnerS = document.querySelector("spinner-border");

let query = localStorage.getItem("query")
  ? localStorage.getItem("query")
  : "daft punk";
/*^^^^ WORKS ^^^*/

const handleSearchQuery = (event) => {
  query = event.target.value.toLowerCase();
  if (event.key === "Enter" && event.target.value.length > 3) {
    searchButtonFun();
  }
  localStorage.setItem("query", query);
};

const searchButtonFun = (q = query) => {
  const divRow = document.querySelector(".row.thisrow");
  searchPageRow2.innerHTML = "";
  searchPageRow.innerHTML = "";
  // spinnerS.classList.add("d-none");
  // const q = document.getElementById("input-SearchPage").value;
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${q}`)
    .then((res) => res.json())
    .then((data) => loadSearchResults(data.data))
    .catch((error) => alert(error));
};

const searchPageRow2 = document.querySelector(".SearchPage-body>.row.thisrow2");
const searchPageRow = document.querySelector(".SearchPage-body>.row.thisrow");
const loadSearchResults = (newData) => {
  newData.forEach((element) => {
    searchPageRow.innerHTML += `
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

/*------------------------------------------------------------------------------------*/
/*--------------AlbumPage*/

// const trackList = document.getElementById("tracks");
// const imageContainer = document.getElementById("album-image-container");

// let dataAlbumPage = [];
// let albumstest = [];
// const endpoint =
//   "https://striveschool-api.herokuapp.com/api/deezer/album/7766062";

// function fetchAlbumData() {
//   fetch(endpoint) //address endpoint
//     .then((response) => response.json()) //
//     .then((jsonData) => {
//       dataAlbumPage = jsonData.tracks.data;
//       albumstest = jsonData;
//       console.log(jsonData);
//       loadAlbums();
//       // displayAlbumImage();
//     })
//     // .then( countSongs())

//     .catch((err) => console.log(err));
// }

// // function displayAlbums() {}
// function loadAlbums() {
//   const getImg = document.querySelector("album-image-container>img");
//   // getImg.i
//   dataAlbumPage.forEach(
//     (album) =>
//       (trackList.innerHTML += `
//       <li><span class="fa-li"><i class="fas fa-music"></i></span></i>${album.title} You</li>
//         <li>${album.artist.name}</li>`)
//   );

//   console.log(albumstest.cover_big);
//   imageContainer.innerHTML = "";
//   imageContainer.innerHTML += `<div id="album-image-container" class="container m-0 p-1">
//       <img src="${albumstest.cover_big}" id="img-album-index" alt="" />
//       <h4>Greatest Hits Collection (First Edition)</h4>
//       <p>${albumstest.artist.name}</p>
//       <button class="btn btn-success btn-n">PLAY</button>
//       <p>1970 &#8226 16 SONGS</p>
//       <div>
//         <span class="fa-stack mb-2" id="toggle">
//           <i class="far fa-heart fa-stack-1x"></i>
//           <i class="fas fa-heart fa-stack-1x"></i>
//         </span>
//         <span><i class="fa fa-ellipsis-h mb-2"></i></span>
//       </div>
//     </div>`;
// }

// let Albums = [];
// const artistCoverDiv = document.getElementById("artist-cover");

// const loadAlbums = () => {
//   fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/1234/albums")
//     .then((res) => res.json())
//     .then((_Albums) => {
//       /* console.log(_Albums.data) */
//       Albums = _Albums.data;
//       console.log(Albums);
//       displayArtists();
//     })
//     .catch((err) => console.error(err.message));
// };
// const displayArtists = () => {
//   /* for(let i; i<albums.length; i++){ */
//   Albums.forEach(
//     (album) =>
//       (artistCoverDiv.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
//      <div class="tile-card">
//         <a href="AlbumPage.html"> <img src="${album.cover_big}" class="img-fluid rounded"
//              alt="" /></a>
//          <div class="card-HomePage-title">${album.title}</div>
//      </div>
//  </div>`)
//   );
// };

// let searchedArtist = [];

// const searchedArtistDisplay = function (Albums) {
//   artistCoverDiv.innerHTML = "";
//   artistCoverDiv.innerHTML = Albums.map(
//     (Album) => `<div class="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
//     <div class="tile-card">
//        <a href="AlbumPage.html"> <img src="${album.cover_big}" class="img-fluid rounded"
//             alt="" /></a>
//         <div class="card-HomePage-title">${album.title}</div>
//     </div>
// </div>`
//   ).join("");
// };

// const Search = function () {
//   const searchInput = document.querySelector("#search-input");
//   console.log(searchInput);
//   const searchQuery = searchInput.value;
//   console.log(searchInput.value);
//   console.log(searchedArtist);
//   const searchedArtistToBeDisplayed = searchedArtist.filter((Album) =>
//     Album.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   console.log(searchedArtistToBeDisplayed);

//   searchedArtistDisplay(searchedArtistToBeDisplayed);
// };
