import React, { useState, useEffect} from "react";

export const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=200"
        );
   const data = await response.json();

   setPokemons(data.results);
    };

    fetchData();
}, []);

return (
    <ul>
        {pokemons.map(({ name, url }) => (
            <li key={url}>{name}</li>
        ))}
    </ul>
);
        };



