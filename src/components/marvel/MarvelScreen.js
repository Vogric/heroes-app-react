import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
  return (
    <div className="container mt-4">
      <h1>MarvelScreen</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
