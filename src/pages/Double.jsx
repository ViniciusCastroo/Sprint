import { useState, useEffect, useMemo } from 'react';
import './Double.css';

const Double = () => {
  const [escolhaJogador, setEscolhaJogador] = useState(null);
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [mensagemResultado, setMensagemResultado] = useState('');
  const [, setPosicaoFinal] = useState();

  const cores = useMemo(() => ['Preto', 'Vermelho', 'Branco', 'Preto', 'Vermelho', 'Branco', 'Preto', 'Vermelho', 'Branco'], []);

  useEffect(() => {
    const verificarResultado = () => {
      if (resultado !== null) {
        if (cores[resultado] === escolhaJogador) {
          setMensagemResultado('Você ganhou!');
        } else {
          setMensagemResultado('Você perdeu!');
        }
      }
    };

    if (resultado !== null) {
      verificarResultado();
    }
  }, [resultado, escolhaJogador, cores]);

  const iniciarRodada = () => {
    if (!girando) {
      setGirando(true);
      setMensagemResultado('');

      const rodadas = 5; // Número de rodadas completas antes de parar
      const totalQuadrados = cores.length;
      const quadradoVisivelNoCentro = 1; // Índice que representa o quadrado que ficará no centro

      const resultadoFinal = Math.floor(Math.random() * totalQuadrados);

      // Calcula a posição final de forma que o quadrado "resultadoFinal" caia no centro da tela
      const posicaoFinalCalculada = (rodadas * totalQuadrados + resultadoFinal) - quadradoVisivelNoCentro;

      setPosicaoFinal(posicaoFinalCalculada); // Define a posição final da animação

      setTimeout(() => {
        setResultado(resultadoFinal); // Define o resultado final
        setGirando(false);
      }, 5000); // Duração da animação
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
          className={`botao-escolha ${escolhaJogador === 'Branco' ? 'selecionado' : ''}`}
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
              transform: girando ? `translateX(-${Math.random() * 2000}px)` : 'translateX(0)',
              transition: 'transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}
            onTransitionEnd={() => {
              
              const totalQuadrados = cores.length;
              const resultadoFinal = Math.floor(Math.random() * totalQuadrados);
              setResultado(resultadoFinal);
              if (cores[resultadoFinal] === escolhaJogador) {
                setMensagemResultado('Você ganhou!');
              } else {
                setMensagemResultado('Você perdeu!');
              }
              setGirando(false);
            }}
          >
            {Array(3).fill(cores).flat().map((cor, index) => (
              <div key={index} className={`quadrado ${cor.toLowerCase()}`}>
                {cor}
              </div>
            ))}
          </div>
        </div>

        {/* Linha central para mostrar o quadrado selecionado */}
        <div className="linha-central"></div>
      </div>

      <h2 className="resultado">{mensagemResultado}</h2>
    </div>
  );
};

export default Double;
