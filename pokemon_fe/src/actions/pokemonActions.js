import axios from 'axios';
import { toast } from 'react-toastify';

// Action Types
export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
export const EDIT_POKEMON = 'EDIT_POKEMON';
export const SET_POKEMONS = 'SET_POKEMONS';

// Action Creators
export const setPokemons = (pokemons) => ({
  type: SET_POKEMONS,
  payload: pokemons,
});

export const fetchPokemons = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/get/pokemonlist');
    dispatch(setPokemons(response.data));
    // toast.success(response.data.message);
  } catch (error) {
    console.error('Error fetching pokemons', error);
    toast.error('Error fetching pokemons');
  }
};

export const addPokemon = (pokemon,navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/add/pokemon', pokemon);
    dispatch(fetchPokemons());
  

    if (response.status === 200) {
      navigate('/list');
      toast.success(response.data.message);
    }
  
    // toast.success(response.data.message);
  } catch (error) {
    console.error('Error adding pokemon', error);
    toast.error(error.response?.data?.message || 'Error adding pokemon');
  }
};

export const removePokemon = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/delete/pokemon/${id}`);
    dispatch(fetchPokemons());
    toast.error(response.data.message);
  } catch (error) {
    console.error('Error removing pokemon', error);
    toast.error(error.response?.data?.message || 'Error removing pokemon');
  }
};

export const editPokemon = (pokemon) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5000/update/pokemon/${pokemon.id}`, pokemon);
    dispatch(fetchPokemons());
    toast.success(response.data.message );
  } catch (error) {
    console.error('Error editing pokemon', error);
    toast.error(error.response?.data?.message || 'Error editing pokemon');
  }
};
