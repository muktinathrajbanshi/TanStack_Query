import React from 'react';

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
        element: <fetchOld />,
      },
      {
        path: "/rq",
        element: <fetchRQ />,
      },
    ],
  },
]);


const App = () => {
  return <h1>Hello, TanStack Query!!!</h1>
}

export default App;
