import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Header />
    <Outlet /> {/* Este componente renderiza os elementos das rotas filhas */}
    <Footer />
  </>
);
}



export default App
