import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate} from 'react-router-dom';
import FiltroCategorias from "./Filtrocategorias";
import CarritoModal from "./CarritoModal";

// para el contexto
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";
const Header = () => {
 const { carrito, total } = useContext(carritoContext)

 



  





    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };


    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/busquedas', {
        state: inputValue,
      });	
      
    };


  return (
    
    <div className="navbar bg-black">

          <div className="navbar-start">
              <img src="logo.jpg" alt="" width={100} />
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/movil">Movil</Link></li>
              <li><Link to="/laptop">Laptops</Link></li>
              <li><Link to="/tienda">Tienda</Link></li>
              <li>
                  <details>
                  <summary>Categorias</summary>
                  <ul className="p-2">
                      <FiltroCategorias/>
                  </ul>
                  </details>
              </li>
              <li><a>Contactos</a></li>
              </ul>
          </div>
          <div className="navbar-end">
      <div className="flex gap-2">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            {carrito.length > 0 && (
            <span className="badge badge-error badge-sm indicator-item ">{carrito.length}</span>
            )}

          </div>
        </div>
        {carrito.length > 0 && (

        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{carrito.length} Items</span>
            <span className="text-info">Subtotal: {total.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</span>
            <div className="card-actions">
         
              <button className="btn btn-primary btn-block" onClick={()=>document.getElementById('my_modal_4').showModal()}>View cart</button>
            </div>
          </div>
        </div>
    )}

      </div>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="input-group">
              <input value={inputValue} onChange={handleChange}  type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              <button className="btn btn-secondary">Ok</button>
          </div>
      </form>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
          </div>


      <CarritoModal  />      
    </div>
  )
}

export default Header