import React from "react";
import './Home.css';
import ForecastWeather from "../components/ForecastWeather";
import CurrentWeather from "../components/CurrentWeather";
import { IconSearch } from '@tabler/icons';
import { useState, useEffect } from "react";
import { Button, Box, TextInput } from '@mantine/core';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_WEATHERAPI_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const Home = () => {
  const [ city, setCity ] = useState('Nantes');
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);

  const fetchWeatherApi = (city) => {
    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q='+city+'&days=3', options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      console.log(actualData);
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  const handleSubmit = (event) => {
    // Requête API au submit de la recherche
    event.preventDefault();
    let cityupdate=document.getElementById("city").value;
    setCity(cityupdate);
    fetchWeatherApi(cityupdate);
  };

  useEffect(() => {
    // Requête API à l'initialisation de la page
    fetchWeatherApi(city);
  }, []);

  return (
    <div>
      <h1>Ta Météo</h1>
      <Box sx={{ maxWidth: 400 }} mx="auto" id="search_weather">
        <form >
          <TextInput
              placeholder="Rechercher ma ville"
              size="sm"
              icon={<IconSearch size={12} stroke={1.5} />}
              name="city"
              id="city"
          />
          <Button type="submit" onClick={handleSubmit}>
            Rechercher
          </Button>
        </form>
      </Box>
      {
        // Chargement en attendant les résultats de l'API
        loading && <div>Chargement des résulats...</div>
      }
      {
        // Message si erreur de l'API
        error && (
          <div>{`There is a problem fetching the weather data - ${error}`}</div>
        )
      }
      {
        // Affichage des components quand les résultats ont chargé
        data &&
        <div>
          <CurrentWeather data={data} loading={loading} error={error}></CurrentWeather>
          <ForecastWeather data={data} loading={loading} error={error}></ForecastWeather>
        </div>
      }
    </div>
  );
};

export default Home;