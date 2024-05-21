import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editPokemon } from '../actions/pokemonActions';
import './EditPokemon.css';

const EditPokemon = ({ pokemon, toggleEdit }) => {
  const [name, setName] = useState(pokemon.name);
  const [breed, setBreed] = useState(pokemon.breed);
  const [description, setDescription] = useState(pokemon.description);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPokemon = {
      ...pokemon,
      name,
      breed,
      description
    };
    dispatch(editPokemon(updatedPokemon));
    toggleEdit();
  };

  return (
    <form className="edit-pokemon-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Breed"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={toggleEdit}>Cancel</button>
      </div>
    </form>
  );
};

export default EditPokemon;
