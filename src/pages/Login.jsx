import React from 'react';


const Login = () => {
  const cadastrar = (event) => {
    event.preventDefault();
    //  cadastro
  };

  const entrar = (event) => {
    event.preventDefault();
    //  login
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center flex-col h-screen">
      <header className="backdrop-blur-md mb-5 p-6">
        <div className="flex justify-between items-center py-12 px-6 rounded-lg">
          <div className="logo">
            <img src="Assets/Turbo Game logo.png" alt="Logo" className="h-16 px-24" />
          </div>
          <nav>
            <ul className="flex justify-end list-none border border-gray-700 rounded-full p-5 bg-gray-900">
              <li className="ml-5">
                <a className="text-white text-sm px-3 py-2 font-unbounded font-normal" href="index.html">Menu</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className="bg-gray-800 rounded-3xl shadow-lg relative overflow-hidden w-full max-w-xl min-h-[480px] text-white p-10">
          <div className="absolute top-0 h-full transition-all duration-600 ease-in-out">
            <div className="absolute left-0 w-1/2 z-20">
              <form onSubmit={cadastrar} className="flex items-center justify-center flex-col h-full">
                <h1 className="text-xl">Crie a sua conta</h1>
                <span className="text-xs">Use o seu melhor e-mail e uma senha segura</span>
                <input type="text" id="register-username" placeholder="Nome de usuario" required className="bg-gray-200 border-none my-2 py-2 px-4 text-sm rounded-lg w-full outline-none" />
                <input type="email" id="register-email" placeholder="Email" required className="bg-gray-200 border-none my-2 py-2 px-4 text-sm rounded-lg w-full outline-none" />
                <input type="password" id="register-password" placeholder="Senha" required className="bg-gray-200 border-none my-2 py-2 px-4 text-sm rounded-lg w-full outline-none" />
                <button type="submit" className="bg-red-700 text-white text-xs py-2 px-8 border border-transparent rounded-lg font-semibold uppercase mt-2 cursor-pointer">Cadastre-se</button>
              </form>
            </div>
            <div className="absolute left-0 w-1/2 opacity-0 z-10">
              <form onSubmit={entrar} className="flex items-center justify-center flex-col h-full">
                <h1 className="text-xl">Faça login</h1>
                <span className="text-xs">Coloque o e-mail e sua senha nos campos abaixo:</span>
                <input type="email" id="login-email" placeholder="Email" name="email" required className="bg-gray-200 border-none my-2 py-2 px-4 text-sm rounded-lg w-full outline-none" />
                <input type="password" id="login-password" placeholder="Senha" name="password" required className="bg-gray-200 border-none my-2 py-2 px-4 text-sm rounded-lg w-full outline-none" />
                <a href="#" className="text-gray-300 text-xs my-4">Esqueceu sua senha?</a>
                <button type="submit" className="bg-red-700 text-white text-xs py-2 px-8 border border-transparent rounded-lg font-semibold uppercase mt-2 cursor-pointer">Entrar</button>
              </form>
            </div>
          </div>
          <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 ease-in-out rounded-l-[150px] z-[1000]">
            <div className="bg-red-700 h-full bg-gradient-to-r from-red-500 to-red-600 relative left-[-100%] w-[200%] transition-all duration-600 ease-in-out">
              <div className="absolute w-1/2 h-full flex items-center justify-center flex-col p-6 text-center top-0 transition-all duration-600 ease-in-out">
                <h1 className="text-xl">Bem-vindo de volta!</h1>
                <p className="text-sm">Entre com os seus dados pessoais para conseguir utilizar todos os recursos do nosso site</p>
                <button className="hidden">Entrar</button>
              </div>
              <div className="absolute right-0 w-1/2 h-full flex items-center justify-center flex-col p-6 text-center top-0 transition-all duration-600 ease-in-out">
                <h1 className="text-xl">Olá, corredor!</h1>
                <p className="text-sm">Registre-se com seus dados pessoais para usar todos os recursos do nosso site</p>
                <button className="hidden">Cadastre-se</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
