import axios from 'axios'

export const getPokemons = () => {
    return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(response => response)
        .catch(error => console.log(error))
}
export const getPokemonData = (pokemon) => {
    return axios.get(pokemon.url)
    .then(response => response)
    .catch(err => console.log(err))
}