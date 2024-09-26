import React, { useState } from 'react';

const cores = ['Preto', 'Vermelho', 'Branco'];

export default function Roleta() {
  const [resultado, setResultado] = useState(null);
  const [girando, setGirando] = useState(false);

  const girarRoleta = () => {
    setGirando(true);
    setResultado(null);

    setTimeout(() => {
      const resultadoAleatorio = cores[Math.floor(Math.random() * cores.length)];
      setResultado(resultadoAleatorio);
      setGirando(false);
    }, 3000); // Simula uma espera de 3 segundos para girar a roleta
  };

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-5">Roleta de Cores</h1>
      <button
        onClick={girarRoleta}
        className="bg-red-600 text-white py-3 px-6 rounded-full text-xl mb-5"
        disabled={girando}
      >
        {girando ? 'Girando...' : 'Girar Roleta'}
      </button>

      {resultado && (
        <div className="text-3xl font-bold">
          <p>Resultado: <span className="text-red-500">{resultado}</span></p>
        </div>
      )}
    </main>
  );
}