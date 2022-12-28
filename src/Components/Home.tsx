import React from "react";
import { MovieProvider } from "./Context/MovieContext";
import { MovieList } from "./MovieList";

export const Home: React.FC = () => {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
};
