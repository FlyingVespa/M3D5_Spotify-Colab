let searchData = [];
let searchInput = document.querySelector("#search-input");

// const urlParams = new URLSearchParams(window.location.search);

// let params = new URL(document.location).searchParams;

// let age = parseInt(params.get("age")); // is the number 18

const searchButtonFun = (e) => {
  console.log(e);
  const searchField = e.target.parentElement.previousSibling.value;
  // const divRow = document.querySelector(".albums");
  console.log(searchField);
  // fetch(
  //   `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchField}`
  // )
  //   .then((res) => res.json())
  //   .then((data) => {
  //     searchData = data.data;
  //     // loadAlbums(data.data);
  //     console.log(searchData);
  //   })
  //   .catch((error) => alert(error));
  // };

  // const loadAlbums = (newData) => {
  //   const divRow = document.querySelector(".albums");
  //   newData.forEach((element) => {
  //     divRow.innerHTML += `
  //           <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
  //             <div class="card mb-4">
  //             <a href="${location.href.replace(
  //               "HomePage.html",
  //               ""
  //             )}album_page.html?id=${element.album.id}" class="text-center">
  //               <img
  //                 src="${element.album.cover}"
  //                 alt="${element.album.id}"
  //               />
  //               </a>
  //               <div class="card-body">
  //                 <p class="card-text text-center">
  //                 ${element.album.title}
  //                 </p>
  //                 <p class="card-text text-center card-artist"><a href="${location.href.replace(
  //                   "search.html",
  //                   ""
  //                 )}artist.html?id=${element.artist.id}">${
  //       element.artist.name
  //     }</a></p>
  //               </div>
  //             </div>
  //           </div>
  //         `;
  //   });
};

// window.onload = () => {
//   // let rootLink = location.href.replace('search.html', '');
//   // console.log('rootLink:', rootLink)
//   // console.log('location:', location)
//   // console.log('location.href:', location.href)
//   document
//     .getElementById("search-input")
//     .addEventListener("keypress", function (e) {
//       searchButtonFun(e);
//     });
// };

// const loadSongs = (songs) => {
//     console.log('songs:', songs)
//     const divRow = document.querySelector(".songs");
//     songs.forEach((element) => {
//         divRow.innerHTML += `
//         <div class="song row mb-5">
//           <img src="${element.album.cover}" class="song-image mr-3 img-fluid ml-2" alt="..." />
//         <div class="song-title col-8 text-left">
//         ${element.album.title}
//           <div class="song-artists"><a href="">${element.artist.name}</a></div>
//         </div>
//         <div class="song-length col-1">${element.duration}:00</div>
//       </div>
//         `;
//     });
// }