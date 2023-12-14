/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import usePokemons from "../hooks/usePokemons";

function Pokemon({ id, nombre, imagen }) {
  return (
    <div className="max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg capitalize hover:shadow-lg hover:bg-yellow-100 hover:cursor-pointer">
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

  return (
    <>
      <section className="justify-items-center flex-wrap grid grid-cols-5 gap-10 p-10 mx-0 my-auto">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} {...pokemon} />
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
