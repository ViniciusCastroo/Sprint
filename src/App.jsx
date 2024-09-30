import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      {/* O Outlet serve como placeholder para as páginas que serão renderizadas dependendo da rota */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
