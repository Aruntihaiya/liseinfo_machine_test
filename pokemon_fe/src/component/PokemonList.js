import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons, removePokemon } from '../actions/pokemonActions';
import EditPokemon from './EditPokemon';
import './PokemonList.css';

const PokemonList = () => {
  const pokemons = useSelector(state => state.pokemon.pokemons);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(removePokemon(id));
  };

  const toggleEdit = (id) => {
    setEditingId(editingId === id ? null : id);
  };

  return (
    <div className="pokemon-list">
      <h2>List of Pokémon</h2>
      <table className="pokemon-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pokemons && pokemons.data.map(pokemon => (
            <tr key={pokemon.id}>
              {editingId === pokemon.id ? (
                <td colSpan="4">
                  <EditPokemon pokemon={pokemon} toggleEdit={() => toggleEdit(pokemon.id)} />
                </td>
              ) : (
                <>
                  <td>{pokemon.name}</td>
                  <td>{pokemon.breed}</td>
                  <td>{pokemon.description}</td>
                  <td>
                    <button className="edit-button" onClick={() => toggleEdit(pokemon.id)}>Edit</button>
                    <button className="remove-button" onClick={() => handleRemove(pokemon.id)}>Remove</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonList;
