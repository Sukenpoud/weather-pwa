import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Prévisions météo</h1>
      <p>Recherchez la ville de votre choix</p>
      <Cards></Cards>
    </div>
  );
};

export default Home;