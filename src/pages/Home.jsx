import React from 'react';
import Slide from '../components/Slide'; // Importando o Slide

export default function Home() {
    return (
        <main className="bg-black text-white">
          

            {/* Hero Section */}
            <section className="font-unbounded hero flex flex-col items-center justify-center text-center py-12 bg-gradient-to-b from-black via-black to-red-600 min-h-screen relative overflow-hidden">
                <div className="content relative z-10 max-w-2xl mt-[-200px]">
                    <h1 className="text-6xl mb-5 font-Unbounded">Tem sempre um <br />Prêmio para você</h1>
                    <p className="mb-6 text-lg line-heigth-normal font-montserrat">Diversos prêmios à sua disposição</p>
                    <a href="#" className="button bg-red-600 text-white py-3 px-6 rounded-full text-sm font-light inline-flex items-center">
                        COMEÇAR AGORA
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="ml-2">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                        </svg>
                    </a>
                </div>
                <img src="carro site.png" alt="Carro de Corrida" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-0" />
            </section>

            {/* Jogos Section */}
            <section className="jogos text-center py-5" id="jogos">
                <div className="title-container1 flex items-center justify-center mb-5 px-36">
                    <h1 className="font-unbounded text-3xl font-light">Jogos</h1>
                </div>
                <div className="font-poppins cards-container flex flex-wrap justify-center gap-8">
                    {/* Card Roleta */}
                    <div className="card bg-customGray rounded-lg p-5 text-left flex flex-col justify-between max-w-sm">
                        <div className="icon bg-black rounded-full w-12 h-12 flex items-center justify-center mb-5">
                            <span className="text-red-600 text-2xl">R</span>
                        </div>
                        <h2 className="text-xl font-unbounded mb-2">Roleta</h2>
                        <p className="font-poppins text-sm">A roleta de cores oferece pontos ao escolher a cor certa: Preto e Vermelho pagam 2x, enquanto Branco paga 14x. A roleta gira, escolha sua cor e boa sorte!</p>
                        <a href="#" className="learn-more text-red-600 mt-3 text-sm font-unbounded">LEARN MORE</a>
                    </div>

                    {/* Card Quiz */}
                    <div className="card bg-customGray rounded-lg p-5 text-left flex flex-col justify-between max-w-sm">
                        <div className="icon bg-black rounded-full w-12 h-12 flex items-center justify-center mb-5">
                            <img src="quiz logo site.svg" alt="Quiz Logo" className="h-9" />
                        </div>
                        <h2 className="text-xl font-light font-unbounded mb-2">Quiz</h2>
                        <p className="text-sm font-poppins">Desafie seus conhecimentos sobre Fórmula 1 neste quiz emocionante! Responda perguntas rápidas e acumule pontos para se tornar um verdadeiro especialista.</p>
                        <a href="#" className="learn-more text-red-600 mt-3 text-sm font-unbounded">LEARN MORE</a>
                    </div>

                    {/* Card Bet */}
                    <div className="card bg-customGray rounded-lg p-5 text-left flex flex-col justify-between max-w-sm">
                        <div className="icon bg-black rounded-full w-12 h-12 flex items-center justify-center mb-5">
                            <img src="bet logo site.svg" alt="Bet Logo" className="h-9" />
                        </div>
                        <h2 className="text-xl font-light font-unbounded mb-2">Bet</h2>
                        <p className="text-sm font-poppins">Escolha o piloto vencedor da próxima corrida de Fórmula E e ganhe pontos para se destacar no ranking!</p>
                        <a href="#" className="learn-more text-red-600 mt-3 text-sm font-unbounded">LEARN MORE</a>
                    </div>
                </div>
            </section>

            {/* Loja Section */}
            <section className="loja text-center py-5" id="loja">
                <div className="title-container mb-5 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-unbounded mb-4">Loja</h1>
                    <a href="loja.html" className="ver-todos bg-red-600 text-white py-3 px-6 rounded-full text-sm font-light inline-flex items-center mb-6">
                        VER TODA A LOJA
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="ml-2">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                        </svg>
                    </a>
                </div>
                <div className="products-container grid grid-cols-1 sm:grid-cols-2 gap-1 justify-items-center">
                    {/* Produto Camiseta */}
                    <div className="product bg-black rounded-lg p-12 text-center flex flex-col justify-between max-w-sm">
                        <img src="Camiseta Loja C.png" alt="Camiseta" className="mb-5 rounded-lg w-full h-64 object-cover" />
                        <div className="product-info text-left">
                            <span className="category bg-red-600 text-white px-3 py-1 rounded-full text-sm">Loja</span>
                            <h2 className="text-2xl font-light font-unbounded mt-2">Camiseta</h2>
                            <p className="text-sm font-poppins">Camiseta, Formula E 2024</p>
                        </div>
                    </div>

                    {/* Produto PS5 */}
                    <div className="product bg-black rounded-lg p-12 text-center flex flex-col justify-between max-w-sm">
                        <img src="Ps5 Loja C.png" alt="PS5" className="mb-5 rounded-lg w-full h-64 object-cover" />
                        <div className="product-info text-left">
                            <span className="category bg-red-600 text-white px-3 py-1 rounded-full text-sm">Loja</span>
                            <h2 className="text-2xl font-light font-unbounded mt-2">PS5</h2>
                            <p className="text-sm font-poppins">Console Sony Playstation 5, PS5 825gb</p>
                        </div>
                    </div>

                    {/* Produto Ingresso */}
                    <div className="product bg-black rounded-lg p-12 text-center flex flex-col justify-between max-w-sm">
                        <img src="Ingresso Loja C.png" alt="Ingresso Formula E" className="mb-5 rounded-lg w-full h-64 object-cover" />
                        <div className="product-info text-left">
                            <span className="category bg-red-600 text-white px-3 py-1 rounded-full text-sm">Loja</span>
                            <h2 className="text-2xl font-light font-unbounded mt-2">Ingresso Formula E</h2>
                            <p className="text-sm font-poppins">Ingresso para Formula E, Corrida 2024</p>
                        </div>
                    </div>

                    {/* Produto Boné */}
                    <div className="product bg-black rounded-lg p-12 text-center flex flex-col justify-between max-w-sm">
                        <img src="Bone Loja C.png" alt="Boné Mahindra" className="mb-5 rounded-lg w-full h-64 object-cover" />
                        <div className="product-info text-left">
                            <span className="category bg-red-600 text-white px-3 py-1 rounded-full text-sm">Loja</span>
                            <h2 className="text-2xl font-light font-unbounded mt-2">Boné Mahindra</h2>
                            <p className="text-sm font-poppins">Boné de equipe Mahindra 2024</p>
                        </div>
                    </div>
                </div>
            </section>

              {/* Slide Section */}
              <section className="slide-section">
                <Slide /> {/* Slide inserido aqui, apenas na página Home */}
            </section>
            
        </main>
    );
}
