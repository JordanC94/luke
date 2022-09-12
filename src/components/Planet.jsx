import React from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const Planet = () => {
  const[planet, setPlanet] = useState(null);
  const {id} = useParams();
  useEffect(()=> {
    axios
    .get(`https://swapi.dev/api/planets/${id}`)
    .then((res)=> setPlanet(res.data))
    .catch((error) => console.log(error, "These aren't the droids youre looking for."));
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {planet && <div className="card">
            <div className="card-header">
              <h2>{planet.name}</h2>
              <div className="card-body">
                <h3>Climate:</h3>
                <p>{planet.climate}</p>
                <h3>Terrain:</h3>
                <p>{planet.terrain}</p>
                <h3>Surface Water:</h3>
                <p>{planet.surface_water}</p>
                <h3>Population:</h3>
                <p>{planet.population}</p>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Planet
