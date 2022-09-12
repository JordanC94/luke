import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Character = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((res) => setCharacter(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {character && (
            <div className="card">
              <div className="card-header">
                <h2>{character.name}</h2>
                <div className="card-body">
                  <h3>Height:</h3>
                  <p>{character.height}</p>
                  <h3>Mass:</h3>
                  <p>{character.mass}</p>
                  <h3>Hair Color:</h3>
                  <p>{character.hair_color}</p>
                  <h3>Skin Color:</h3>
                  <p>{character.skin_color}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
