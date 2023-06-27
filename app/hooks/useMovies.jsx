import films from '../mooks/when-found.json'
export default async function useMovies(query) {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=8d3a571b&s=${query}`).then(
    res => res.json()
  )
  const moviesList = await movies.Search
  return moviesList?.map((film) => ({
    id: film.imdbID,
    title: film.Title,
    year: film.Year,
    poster: film.Poster,
    type: film.Type
  }))
}
