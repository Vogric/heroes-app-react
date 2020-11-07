import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);
  console.log(hero);

  if (!heroId) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div>
      <h1>HeroScreen WIP</h1>
    </div>
  );
};
