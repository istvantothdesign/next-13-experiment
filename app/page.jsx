import Movie from "./Movie";
import styles from "./page.module.css";

export default async function Home() {
  // Api route: https://api.themoviedb.org/3 + routes (popular movies: https://api.themoviedb.org/3/movie/popular)

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();
  // console.log(res);
  return (
    <main className={styles.main}>
      <h1 className="text-4xl pb-16">Popular movies</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
