import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import pokemonBallImage from '../assets/images/pokeball-5128709_1280.jpg';

import './Pokemon.css' 
// Assuming you have a Pokemon ball image

const Pokeball = ({ showModal, toggleModal }) => {
  return (
    // <div className="Pokeball" onClick={() => toggleModal(!showModal)}>
    //   <img src={pokemonBallImage} alt="Pokemon Ball" className="PokeballImage" />
    //   {/* dfsdfsdf */}
    // </div>


    <div className="Pokeball" onClick={() => toggleModal(!showModal)}>
    <div className="PokeballTop"></div>
    <div className="PokeballBottom"></div>
    <div className="PokeballCenter"></div>
  </div>
  
  );
};

export default Pokeball;
