import Swal from "sweetalert2";
// para el contexto
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";

const CarritoModal = () => {
  const {carrito, deleteItem3,vaciarCarrito} = useContext(carritoContext)




  return (
    <>
  
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">

        <h3 className="font-bold text-lg text-center uppercase py-3 divider">Lista de Compra!</h3>
     

        <div className="overflow-x-auto">
        <table className="table table-zebra table-pin-cols">
          {/* head */}
          <thead>
            <tr className="text-center text-warning text-lg">
              <th>#</th>
              <th>sku</th>
              <th>Img</th>
              <th className="text-start">Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
          {carrito && carrito.map((item,index)=>(
            
            <tr key={index} className="text-center">
              <td>{index+1}</td>
              <td>{item.sku}</td>
              <td><img src={item.thumbnail} alt="" width={50}/></td>
              <td className="text-start">{item.title}</td>
              <td>{item.cant}</td>
              <td>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</td>
              <td>{(item.price * item.cant).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</td>
              <td>
              <button className="text-error" onClick={()=>deleteItem3(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2M10 11v9M14 11v9M21 6v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6h18z" />
                  </svg>
              </button>
            
              </td>
            </tr>

            ))}  
          </tbody>
          <tfoot>
              <tr className="text-center text-sm text-warning">
                <th colSpan={4} className="text-right">Total</th>
                <th  className="text-center">{carrito.reduce((total, item) => total + item.cant, 0)}</th>
                <th></th>
                <th>{carrito.reduce((total, item) => total + item.price * item.cant, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</th>
              </tr>
          </tfoot>

        </table>
      </div>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          
          <button className="btn btn-error btn-sm me-2" onClick={vaciarCarrito}>Vaciar Carrito</button>

          <button className="btn btn-info btn-sm ">Cerrar</button>
        </form>
      </div>
    </div>
    </dialog>




 
  </>

  )
}

export default CarritoModal