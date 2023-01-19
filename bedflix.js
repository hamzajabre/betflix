function getMovie(movieTitle) {
    return fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=3861f60e`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }
  

  class Movie {
    constructor(data){
      Object.assign(this, data);
      }
      
      renderMovie() {
        return ` 
        <div class="movie-container">
        <div class="image-container">
               <img src='${this.Poster}'/>
        </div>
        <div class="movie-content-container">
          <div class="title">
            <h4>${this.Title}</h4>
            <p>${this.imdbRating}</p>
          </div>
          <div class="movie-details">
            <p>${this.Runtime}</p>
            <p>${this.Genre}</p>
            <button class="add-watchlist-btn">Watchlist</button>
          </div>
          <div class="movie-desc">
            <p>${this.Plot}</p>
          </div>
        </div>
        </div>
      `;
      }
    }
    

    const container = document.querySelector(".container");
    const searchPage = document.querySelector(".search-page-container");
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".input-search-bar");
    
    
    
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault();
      getMovie(searchInput.value).then((res) => {
        
        container.innerHTML += new Movie(res).renderMovie();
        let btn = document.querySelector(".add-watchlist-btn");
        btn.addEventListener("click", () => {
          console.log("button clicked");
        });
      });
      searchInput.value = "";
    });
