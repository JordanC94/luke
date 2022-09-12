import React from "react";
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Character from "./components/Character";
import Planet from "./components/Planet";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path="/character/:id" element={<Character />} />
        <Route path="/planet/:id" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
