import { createContext, useState, useEffect } from "react";
import axios from "axios";

type Props = {
  children: React.ReactNode;
};

export const MovieContext = createContext({});

export const MovieProvider: React.FC<Props> = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://omdbapi.com/?s=Star%20Wars&apikey=9bfc98c6"
      );
      const data = await response.json();
      setMovies(data.Search);
    };
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>
  );
};
