document.addEventListener("DOMContentLoaded", () => {
    fetch("https://khalid-zein.github.io/flatdango/db.json")
    .then((res) => res.json())
    .then((data) => {
      movieList(data.films);
    });
    
    function movieList(data){
      data.forEach(movie => {
        const markUp = `<li id ="listing">${movie.title}</>`;
        
        document.querySelector('ul').insertAdjacentHTML('beforeend', markUp);
        
        
        // display first movie details
        displayMovie(movie);
        
        
        // display movie details on click of the movie titles
        const moviesAvailable = document.querySelector("ul#moviesTitle");
        moviesAvailable.addEventListener("click", function() {
          displayMovie(movie);
        });
      });
    };

    const movieName = document.getElementById("name");
    const movieImage = document.getElementById("poster");
    const description = document.getElementById("description");
    const runTime = document.getElementById("runtime");
    const showTime = document.getElementById("showtime");
    const capacity = document.getElementById("capacity");
    const sold = document.getElementById("sold");
    const available = document.getElementById("available");

  function displayMovie(movie){
        movieName.innerHTML = movie.title;
        movieImage.src = movie.poster;
        description.innerHTML = movie.description;
        runTime.innerHTML = movie.runtime + " min";
        showTime.innerHTML = movie.showtime;
        capacity.innerHTML = movie.capacity + " seats";
        sold.innerHTML = movie.tickets_sold + " tickets";
        available.innerHTML = movie.capacity - movie.tickets_sold + " tickets";
  };
});