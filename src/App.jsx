import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* Este é o local onde as rotas aninhadas serão renderizadas */}
      <Footer />
    </>
  );
}

export default App;
