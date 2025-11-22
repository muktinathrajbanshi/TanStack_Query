import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from './components/Layout/MainLayout';
import { Home } from './Pages/Home';
import { FetchOld } from './Pages/FetchOld';
import { FetchRQ } from './Pages/FetchRQ';

// Creating a Router 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);


const App = () => {
  return <h1>Hello, TanStack Query!!!</h1>
}

export default App;
