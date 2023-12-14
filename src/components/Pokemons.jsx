/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import usePokemons from "../hooks/usePokemons";
import { useState } from "react";
import PokemonDetails from "./PokemonDetails";

function Pokemon({ id, nombre, imagen, seePokemon }) {
  return (
    <div className="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg capitalize hover:shadow-lg hover:bg-yellow-100 hover:cursor-pointer"
    onClick={seePokemon}>
      <img
        src={imagen}
        alt={nombre}
        className="flex justify-center items-center w-[150px] h-[150px] mx-[5px] my-5"
      />
      <p className="flex space-between items-center bg-gray-400 text-white font-bold px-[10px] py-[8px] rounded-lg w-full">
        <span>#{id}&nbsp;</span>
        <span>{nombre}</span>
      </p>
    </div>
  );
}

function Pokemons() {
  const { pokemons, morePokemons } = usePokemons();
  const [show, setShow] = useState({ show: false, pokemon: {} });
  const seePokemon = (pokemon) => setShow({ show: true, pokemon });

  const noSeePokemon = () => {
    setShow({ show: false, pokemon: {} });
    setBusqueda("");
  };

  return (
    <>
      <PokemonDetails {...show} close={noSeePokemon} />

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-4 md:p-8 lg:p-10 xl:p-12 mx-auto my-auto">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} seePokemon={() => seePokemon(pokemon)}/>
        ))}
      </section>
      <div className="flex justify-center pb-10 mx-0">
        <button
          className="border border-yellow-300 bg-gray-800 rounded-[7px] py-2 px-4 text-yellow-300 text-center font-bold uppercase"
          onClick={morePokemons}
        >
          Más pokemons
        </button>
      </div>
    </>
  );
}

export default Pokemons;
