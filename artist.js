let Albums=[]
const artistCoverDiv=document.getElementById("artist-cover")
window.onload=()=>{

    loadAlbums()
}

const loadAlbums=()=>{
    fetch( "https://striveschool-api.herokuapp.com/api/deezer/artist/2108/albums")
    .then(res=>res.json())
    .then(_Albums=>{
        /* console.log(_Albums.data) */
        Albums=_Albums.data
        console.log(Albums)
        displayArtists()
    })
    .catch(err=>console.error(err.message))
}
const displayArtists=()=>{
    /* for(let i; i<albums.length; i++){ */
        Albums.forEach(album=>
     artistCoverDiv.innerHTML += 
     `<div class="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
     <div class="tile-card">
        <a href="AlbumPage.html"> <img src="${album.cover_big}" class="img-fluid rounded"
             alt="" /></a>
         <div class="card-HomePage-title">${album.title}</div>
     </div>
 </div>`)
    }





 /*  function displayAlbums(){
    albums.forEach(
      album=>trackList.innerHTML += 
      <li><span class="fa-li"><i class="fas fa-music"></i></span></i>${album.title} You</li>
        <li>${album.artist.name}</li>
    )
  } */