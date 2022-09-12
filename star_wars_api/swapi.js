let char_name = '',
    species = '',
    planet = '',
    movie = '',
    films = [],
    filmNames = ''
let greet = ''

const url = 'https://swapi.dev/api/people/3/'

fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        char_name = data.name
        species = data.species
        planet = data.homeworld
        films = data.films
    })
    .then(() => {
        fetch(species)
            .then(response => {
                return response.json()
            })
            .then(data => {
                species = data.name
            })
    })
    .then(() => {
        fetch(planet)
            .then(response => {
                return response.json()
            })
            .then(data => {
                planet = data.name
            })
    })
    .then(() => {
        let counter = 0
        films.forEach(film => {
            fetch(film)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    movie = data.title
                    filmNames += movie +', '
                    counter++

                    if (counter === films.length) {
                        greet = `Hello! My name is ${char_name} and I'm a ${species}. I come from ${planet} and I've been in ${filmNames} movies.`
                        document.getElementById('content').innerText = greet
                    }
                })
        })
    })