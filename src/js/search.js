import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchParams = DOMSelectors.searchArea.value;
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=1fd276ec57b4baedacae00246e5cf4b7&language=en-US&query=${searchParams}&page=1&include_adult=false`
        );
        const results = await response.json();
        const data = results.results;
        DOMSelectors.grid.innerHTML = "";
        data.forEach((movie) => {
          let genreArr = [];
          const addGenre = function () {
            genres.forEach((element) => {
              if (movie.genre_ids.includes(element.id)) {
                genreArr.push(element.name);
                return genreArr;
              }
            });
          };
          addGenre();

          DOMSelectors.grid.insertAdjacentHTML(
            "beforeend",
            `<div class="movie-card">
              <div class="movie-card-front">
              <img
              src="https://image.tmdb.org/t/p/w300/${movie.poster_path}"
              alt=""
              class="poster"
            />
              </div>
              <div class="movie-card-back">
                <h3 class="movie-card-header">${movie.original_title}</h3>
                <div class="score-box">
                  <p class="user-score">Community Score</p>
                  <p class="user-score">${movie.vote_average}</p>
                </div>
      
                <div class="release-box">
                  <p class="release-date">Released</p>
                  <p class="release-date">${movie.release_date}</p>
                </div>
      
                <div class="movie-genres">
                <div>${genreArr}</div>
                </div>
              </div>
            </div> `
          );
        });
      } catch (error) {
        console.log(error);
      }
    };
    searchQuery();
    DOMSelectors.searchArea.value = "";
  });
};

listen();
