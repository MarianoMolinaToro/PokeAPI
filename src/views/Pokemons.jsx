import { useContext } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Pokemons = () => {

    const {pokemons, selectedPokemon, setSelectedPokemon} = useContext(PokemonsContext);
    const navigate = useNavigate()

    const goToDetails = () => {
        if(selectedPokemon){
            navigate(`/pokemons/${selectedPokemon}`)
        }else {
            Swal.fire("Selecciona un pokemons")
        }
    } 

  return (
    <div className="pokemons d-flex  justify-content-center mt-3">
      <div className="text-center p-4 ">
        <h1>Select a Pokemon</h1>
        <section className="mt-3">
          <select
            className="pokemonsSelect form-select me-2"
            value={selectedPokemon}
            onChange={({ target }) => setSelectedPokemon(target.value)}>
            <option value="" disabled>
              Select a Pokemon
            </option>
            {pokemons.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button className="btn btn-secondary mt-3" onClick={goToDetails}>
            View Details
          </button>
        </section>
      </div>
    </div>
  );
};

export default Pokemons