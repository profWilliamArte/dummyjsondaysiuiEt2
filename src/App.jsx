
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Tienda from './pages/Tienda';
import Laptop from './pages/Laptop';
import Movil from './pages/Movil';
import Categorias from './pages/Categorias';
import Footer from './components/Footer';
import Busquedas from './pages/Busquedas';



import Carrito from './contexts/Carrito'

function App() {
  

  return (
    <Carrito>
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="/tienda" element={<Tienda /> } />
              <Route path="/laptop" element={<Laptop />} />
              <Route path="/movil" element={<Movil  />} />
              <Route path="/busquedas" element={<Busquedas  />} />
              <Route path="/categorias/:id" element={<Categorias />} />
              <Route path="*" element={<Inicio/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </Carrito>
  );
}

export default App;
