// Cible le contenu de l'input et son bouton de recherche
const movieSearchBox = document.getElementById('movie-search-box');
const movieSearchButton = document.getElementById('movie-search-button');

const moviesData = `https://omdbapi.com/?s=_titre_&page=1&apikey=e7a85a`;

function displayMovieList() {
    // Construction de l'URL pour la requête vers OMDb avec la recherche de l'utilisateur
    const URL = moviesData.replace("_titre_", movieSearchBox.value);

    let http = new XMLHttpRequest();

    http.open('GET', URL, true);
    http.send();
    http.onload = function () {
        if (this.readyState == 4 && this.status == 200);

        let movies = JSON.parse(this.responseText).Search;

        let output = "";

        // Création des cards à partir des résultats de recherche de la 1ère page d'OMDb
        for (let movie of movies) {
            output += `
                <div class="col">
                    <div class="card bg-dark text-white">
                    <img src="${movie.Poster}" class="card-img-top" alt="Affiche du film ${movie.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text text-muted">Année : ${movie.Year}</p>
                        <a href="movie.html?id=${movie.imdbID}" class="btn btn-primary btn-lg px-4 gap-3">En savoir plus</a>
                    </div>
                    </div>
                </div>
            `;
        }

        document.querySelector("#movies-cards").innerHTML = output;
    }
}

// Permet de déclencher l'affichage des films au clique du bouton de recherche
movieSearchButton.addEventListener("click", function () {
    displayMovieList();
})