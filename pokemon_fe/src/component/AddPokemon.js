import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../actions/pokemonActions";
import Pokeball from "./Pokeball";
import { Modal, Button } from "react-bootstrap";
import "./Form.css"; // Import CSS file for Form component
import { useNavigate } from "react-router-dom";

const AddPokemon = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModalClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPokemon = {
      name,
      breed,
      description,
    };
    dispatch(addPokemon(newPokemon,navigate));
    setName("");
    setBreed("");
    setDescription("");
    // navigate('/list')
  };

  return (
    <div>
      <h2>Add a Pokémon</h2>
      <p>Click on Pokéball</p>
      <>
        <button onClick={() => setShowModal(true)} className="pokeball"></button>
        <Modal show={showModal} className="modal-main" onHide={handleModalClose}>
          <Modal.Header>
            <Modal.Title className="modal-main-header">
              Enter Pokémon Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Breed:</label>
                <input
                  type="text"
                  name="breed"
                  onChange={(e) => setBreed(e.target.value)}
                  value={breed}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Description:</label>
                <textarea
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <Button
                variant="primary"
                type="submit"
                className="btn-primary"
                // onClick={handleModalClose}
              >
                Save
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleModalClose}
              className="btn-secondary"
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddPokemon;
