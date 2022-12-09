import React from 'react';
import './App.css';
import Home from "./views/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {

  return (
    <div className="App" id="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
