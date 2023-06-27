import useMovies from "../hooks/useMovies"
import styles from './FilmComponent.module.css'
export default async function FilmsComponent({ query }) {
  const movies = await useMovies(query)
  console.log(typeof movies === 'undefined' ? 'Sisa' : 'nona');
  console.log(movies === 'undefined' ? 'Sisa' : 'nona');
  if (typeof movies !== 'undefined') {
    return (
      <div>
        <ul className={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieComponent
                poster={movie.poster}
                title={movie.title}
                year={movie.year}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <>Error</>
    )
  }

}

function MovieComponent({ poster, title, year }) {
  return (
    <a href={`https://www.google.com/search?q=${title}`} target="_blank">
      <div className={styles.movie}>
        <img src={poster} />
        <h2>{title}</h2>
        <h4>{year}</h4>
      </div>
    </a>
  )
}


