import React, { useMemo } from "react";
import { Redirect } from "react-router-dom";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  if (!publisher) {
    return <Redirect to="/" />;
  }

  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
