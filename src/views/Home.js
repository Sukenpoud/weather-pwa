import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Home</h1>
      <h2>Prévisions météo</h2>
      <Cards></Cards>
    </div>
  );
};

export default Home;