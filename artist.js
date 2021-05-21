let Albums=[]
const artistCoverDiv=document.getElementById("artist-cover")
window.onload=()=>{

    loadAlbums()
}

const loadAlbums=()=>{
    fetch( "https://striveschool-api.herokuapp.com/api/deezer/artist/1234/albums")
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



    let searchedArtist = []

const  searchedArtistDisplay=function(Albums) {
    
    artistCoverDiv.innerHTML=""
    artistCoverDiv.innerHTML = Albums.map(Album => `<div class="col-12 col-sm-6 col-md-4 col-lg-2 px-2">
    <div class="tile-card">
       <a href="AlbumPage.html"> <img src="${album.cover_big}" class="img-fluid rounded"
            alt="" /></a>
        <div class="card-HomePage-title">${album.title}</div>
    </div>
</div>`)
          .join("")
  }


  
const Search=function () {
  
    const searchInput = document.querySelector("#search-input")
    console.log(searchInput)
    const searchQuery = searchInput.value
    console.log(searchInput.value)
   console.log(searchedArtist)
    const searchedArtistToBeDisplayed = searchedArtist.filter(Album => Album.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    console.log(searchedArtistToBeDisplayed)
    
    searchedArtistDisplay(searchedArtistToBeDisplayed)
}





 