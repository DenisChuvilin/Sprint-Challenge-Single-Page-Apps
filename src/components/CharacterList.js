import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';




export default function CharacterList() {

  // TODO: Add useState to track data from useEffect

  const [api, setApi] = useState();

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response);
        setApi(response.data.results)
      })
      .catch(error => {
        console.error(error);
      });
    }, []);
    console.log(api)
    if (!api) {
      return <div>Loading character information...</div>;
    }
    
    return (
      <section className="character-list">

    
     

      {api.map(character => {
          return (
            <div className='character' key={character.id}>
                <CharacterCard  character={character} />
            </div>
          
            )
        }
        )}
  
    </section>
  );

}


