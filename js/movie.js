// Récupération de l'id dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

const movieData = `http://www.omdbapi.com/?i=_movie_id_&apikey=e7a85a`;

function displayMovieDetail() {
    // Construction de l'URL pour la requête vers OMDb avec l'id du film
    const URL = movieData.replace("_movie_id_", movieId);

    let http = new XMLHttpRequest();

    http.open("GET", URL, true);
    http.send();
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200);

        let movie = JSON.parse(this.responseText);

        let output = `
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="${movie.Poster}" class="d-block mx-lg-auto img-fluid" alt="Affiche du film ${movie.Title}" width="350" loading="lazy">
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">${movie.Title}</h1>
                    <p class="card-text text-muted">Année : ${movie.Year}</p>
                    <p class="card-text text-muted">Directeur : ${movie.Director}</p>
                    <p class="lead">Synopsis : ${movie.Plot}</p>
                </div>
            </div>
        `;

        document.querySelector("#movie-detail").innerHTML = output;
    };
}

displayMovieDetail();
