import React from "react";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../hooks/useForm";

export const SearchScreen = () => {
  const heroesFiltered = heroes;
  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className="container mt-4">
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
          </form>
          <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
          >
            Search
          </button>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
