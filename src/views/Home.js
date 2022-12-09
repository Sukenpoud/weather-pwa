import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cards from "../components/Cards";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Ta Météo</h1>
      <Cards></Cards>
    </div>
  );
};

export default Home;