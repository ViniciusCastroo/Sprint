import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import DetalhesFilmes from './pages/MovieDetailPage';
import ListaFilmes from './pages/MovieListPage';
import Genero from './pages/GenreListPage';
import GeneroFilmes from './pages/MoviesByGenrePage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'detalhes/:id', element: <DetalhesFilmes /> },
      { path: 'filmes', element: <ListaFilmes /> },
      { path: 'generofilme/:id', element: <GeneroFilmes /> },
      { path: 'generos', element: <Genero /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
