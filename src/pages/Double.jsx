import { useState, useEffect } from 'react';
import './Double.css'; // Certifique-se de ter o CSS correto
const Double = () => {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [mensagemResultado, setMensagemResultado] = useState('');
  const cores = ['Preto', 'Vermelho', 'Branco', 'Preto', 'Vermelho', 'Branco', 'Preto', 'Vermelho', 'Branco', 'Preto', 'Vermelho', 'Branco']; // Sequência de cores
  
    const verificarResultado = () => {
      if (resultado !== null) {
        if (cores[resultado] === escolhaJogador) {
          setMensagemResultado('Você ganhou!');
        } else {
          setMensagemResultado('Você perdeu!');
        }
      }
    };

  useEffect(() => {
    if (resultado !== null) {
      verificarResultado();
    }
  }, [resultado, verificarResultado]);

  const iniciarRodada = () => {
    if (!girando) {
      setGirando(true);
      setMensagemResultado('');

      setTimeout(() => {
        const resultadoFinal = Math.floor(Math.random() * cores.length);
        setResultado(resultadoFinal);
        setGirando(false);
      }, 4000); // Tempo de rotação
    }
  };

  return (
    <div className="double-container">
      <h1 className="titulo">Double - Escolha sua Cor!</h1>

      <div className="escolha-jogador">
        <button
          className={`botao-escolha ${escolhaJogador === 'Preto' ? 'selecionado' : ''}`}
          onClick={() => setEscolhaJogador('Preto')}
          disabled={girando}
        >
          Preto
        </button>
        <button
          className={`botao-escolha ${escolhaJogador === 'Vermelho' ? 'selecionado' : ''}`}
          onClick={() => setEscolhaJogador('Vermelho')}
          disabled={girando}
          style={{ backgroundColor: 'red' }}
        >
          Vermelho
        </button>
        <button
          className={`botao-escolha  ${escolhaJogador === 'Branco' ? 'selecionado' : ''}`}
          onClick={() => setEscolhaJogador('Branco')}
          disabled={girando}
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          Branco
        </button>
      </div>

      <button onClick={iniciarRodada} disabled={girando || escolhaJogador === null} className="botao-girar">
        Girar
      </button>

      <div className="quadrados-cores">
        <div className="container-animacao">
          <div
            className={`cores ${girando ? 'girando' : ''}`}
            style={{
              transform: resultado !== null ? `translateX(-${resultado * 100}px)` : 'translateX(0)',
            }}
          >
            {cores.map((cor, index) => (
              <div key={index} className={`quadrado ${cor.toLowerCase()}`}>
                {cor}
              </div>
            ))}
          </div>
        </div>
        <div className="quadrado-contorno"></div>
      </div>

      <h2 className="resultado">{mensagemResultado}</h2>
    </div>
  );
};

export default Double;
