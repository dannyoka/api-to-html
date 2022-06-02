// var API_KEY = ""
var API_KEY = prompt('Please enter your API Key')
var cardContainerEl = document.querySelector('#card-container')
var movieInputEl = document.querySelector('#movie-input')
var submitButtonEl = document.querySelector('#submit-button')

var API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`

function getApiURL(movieTitle){
    return API_URL + movieTitle
}

function getMovies(event){
    event.preventDefault()
    var movieInput = movieInputEl.value
    var url = getApiURL(movieInput)
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        var movies = data.Search
        for (let i = 0; i < movies.length; i++) {
            renderCard(movies[i])
        }
    })
}

submitButtonEl.addEventListener('click', getMovies)

var renderCard = (movie) =>{
    var cardEl = document.createElement('div')
    cardEl.setAttribute('class','card')
    cardContainerEl.appendChild(cardEl)
    var cardImageEl = document.createElement('div')
    cardImageEl.setAttribute('class','card-image')
    cardEl.appendChild(cardImageEl)
    var figureElement = document.createElement('figure')
    figureElement.setAttribute('class','image is-4by3')
    cardImageEl.appendChild(figureElement)
    var imageElement = document.createElement('img')
    imageElement.setAttribute('src', movie.Poster)
    imageElement.setAttribute('alt', "Movie poster")
    figureElement.appendChild(imageElement)
    var cardContentEl = document.createElement('div')
    cardContentEl.setAttribute('class','card-content')
    cardEl.appendChild(cardContentEl)
    var mediaEl = document.createElement('div')
    mediaEl.setAttribute('class','media')
    cardContentEl.appendChild(mediaEl)
    var mediaContentEl = document.createElement('div')
    mediaContentEl.setAttribute('class','media-content')
    mediaEl.appendChild(mediaContentEl)
    var titleEl = document.createElement('p')
    var subtitleEl = document.createElement('p')
    titleEl.setAttribute('class', 'is-4')
    subtitleEl.setAttribute('class', 'is-6')
    titleEl.textContent = movie.Title
    subtitleEl.textContent = movie.Year
    mediaContentEl.appendChild(titleEl)
    mediaContentEl.appendChild(subtitleEl)
}
