import '../index.css'

function PokemonDetails({show, pokemon, close}) {
  
  return (
    <div className="modal-container" onClick={close} style={{ display: show ? 'grid' : 'none' }}>
      <section className="modal-body">
        <div className="imagen-container">
          <img src={pokemon.imagen} alt={pokemon.nombre} className=" " />
          <section>
            {pokemon.types?.map(type => <span className='tag'>{type}</span>)}
          </section>
        </div>
        <div className="data">
          <h2 className="titulo">{pokemon.nombre} ({pokemon.id})</h2>

          <h3 className="titulo-seccion">Abilidades</h3>
          {pokemon.abilities?.map(ability => <span className='tag'>{ability}</span>)}

          <h3 className="titulo-seccion">Stats</h3>
          <div className='stats'>
            {pokemon.stats?.map(stat =>
              <section key={stat.id}>
                <span className='puntos'>{stat.base}</span>
                <span>{stat.name}</span>
              </section>
            )}
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default PokemonDetails