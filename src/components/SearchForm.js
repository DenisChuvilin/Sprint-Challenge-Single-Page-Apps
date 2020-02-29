import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
        );

        setData(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <>
      <h1>Search Characters</h1>
      <Link to="/">Home</Link>
      <section className="search-form">
        <div className="character">
          <form className="search">
            <input
              type="text"
              onChange={handleInputChange}
              value={query}
              name="name"
              tabIndex="0"
              className="prompt search-name"
              placeholder="search by name"
              autoComplete="off"
            />
          </form>

          <div className="character">
          {data.map( data => {
            return (
              <div className="character-list " key={data.id}>
                <h2>I am {data.name}</h2>
               <img src= {data.image} />
              <h5>
                I am an {data.status} {data.gender} {data.species}. I live on the planet "{data.origin.name}". Why did you come looking for me?
                
              {/* I have starred in the following episodes 
              {function Episode(input){
              input.map(episode => {return (episode) })
              }
              <ul>
              {Episode({data.episode})}
              </ul>
              }; */}

              </h5> 
              
              
            </div>
            )
          })}
          </div>

        </div>
      </section>
    </>
  );
}
