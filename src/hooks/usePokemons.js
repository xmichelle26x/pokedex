/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

function usePokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState('');

  const fetchPokemon = async (url) => {
    const response = await fetch(url)
    const poke = await response.json()

    return {
      id: poke.id,
      nombre: poke.name,
      imagen: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,
    }
  }

  const getPokemon = async (url = URL_DEFAULT) => {
    //recover pokemons list
    const response = await fetch(url);
    const pokemonsList = await response.json();
    const { next, results } = pokemonsList;

    const pokemons = await Promise.all(
      results.map(async (pokemon) =>  fetchPokemon(pokemon.url))
      );
      
      return { next, pokemons };
};
 
  const getPokemons = async () => {
    const { next, pokemons } = await getPokemon()
    setPokemons(pokemons)
    setNextUrl(next)
  }

  const morePokemons = async () => { 
    const { next, pokemons } = await getPokemon(nextUrl)
    setPokemons(prev => [...prev, ...pokemons]) 
    setNextUrl(next)
  }

  useEffect(() => { getPokemons() }, [])

  return { pokemons, morePokemons }
}

export default usePokemons;
