import { ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON, SET_POKEMONS } from '../actions/pokemonActions';

const initialState = {
  pokemons: [],
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    case REMOVE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter(pokemon => pokemon.id !== action.payload),
      };
    case EDIT_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.map(pokemon =>
          pokemon.id === action.payload.id ? action.payload : pokemon
        ),
      };
    default:
      return state;
  }
};
