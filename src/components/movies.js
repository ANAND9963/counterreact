import { useState } from "react";
import AddMovie from "./AddMovie";

export default function Movies() {
  let [movies, setMovies] = useState(["Swathi", "Swathi1", "Swath2"]);
  let [newMovie, newSetMovie] = useState("");

  const handleChange = (e) => {
    newMovie = e.target.value;
    newSetMovie(newMovie)
  };
const addNewMovie = ()=>{
    // movies.push(newMovie);
    let latestMovies =[...movies,newMovie]
    setMovies(latestMovies);
    newSetMovie("");
}

  return (
    <>
      <ul>Movies</ul>
      {movies.map((movie ,i) => {
        return <li key={i}>{movie}</li>;
      })}
      <AddMovie newMovie={newMovie} handleChange={handleChange} addNewMovie={addNewMovie}/>
    </>
  );
}
