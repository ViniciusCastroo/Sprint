import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Loja from './pages/Loja';
import FAQ from './components/Faq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Página inicial
      { path: 'loja', element: <Loja /> }, // Rota da loja
      { path: 'faq', element: <FAQ /> },  // Rota FAQ
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
