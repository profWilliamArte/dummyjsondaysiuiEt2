import { useEffect, useState } from "react"
// para el contexto
import { useContext } from "react";
import { carritoContext } from "../contexts/carritoContext";

const Card = ({item}) => {
    const [cantidad, setCantidad] = useState(0)
    const { carrito, agregarCarrito } = useContext(carritoContext)
    

  useEffect(()=>{
        setCantidad(0) 
       
  },[])


  return (
    
       

        
        <div className="card bg-base-900 shadow-xl border hover:bg-base-300">
        <div className="indicator ">
            {cantidad > 0 && (
                <span className="indicator-item indicator-center badge badge-error  badge-grande">
                    {cantidad}
                </span>
            )}
                    
           
        
        </div>
          <figure className="px-5 pt-5">
                    <img src={item.thumbnail} alt="Shoes" className=" bg-[#f5f5f5] mask mask-circle p-10" />
                </figure>
        <div className="card-body items-center text-center">

              
                <div className="flex flex-col  items-center gap-5" >
                    <div className="flex flex-col  items-center gap-3">
                        <h1 className="card-title">{item.title}</h1>
                        <h2 className="badge badge-info badge-outline gap-2">Stock: {item.stock}</h2>
                        <p className="font-bold text-xl text-error">{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</p>
                        <div className="my-4">
                        <input type="range" min={1} max={item.stock} value={cantidad} className="range range-error" onChange={(e) => setCantidad(e.target.value)} />
                        <button className='btn btn-error btn-sm' onClick={() => agregarCarrito(item, cantidad)}>  Ok</button>
                           </div> 
                        
                     </div>
                     <div className="divider "></div>
                        <div className="card-actions ">
                            <button className="btn btn-secondary btn-sm" onClick={()=>document.getElementById(item.id).showModal()}>Detalle</button>
                        </div>
                    
                </div>
          
                <dialog id={item.id} className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="card lg:card-side bg-base-100 ">
                            <figure className="image-full">
                                <img src={item.thumbnail} alt="Album" className="card-img-top w-full"/>
                            </figure>
                            <div className="card-body text-start">
                                <h1 className="text-4xl">{item.title}</h1>
                                <h1 className="text-2xl">Categoria: {item.category}</h1>
                                <h3>Marca: {item.brand}</h3>
                                
                                <h2>Stock: {item.stock}</h2>
                                <p>
                                    Dimensiones: {item.dimensions.height} x {item.dimensions.width} x {item.dimensions.depth}
                                </p>
                                <p>Garantia: {item.warrantyInformation}</p>
                                <p>{item.description}</p>
                               
                                <div className="text-start">
                                        <p className="font-bold text-xl text-error">Precio: {item.price.toFixed(2).toLocaleString()}$</p>
                                        <p className="font-bold text-xl text-error">Descuento: {item.price}$</p>
                                        <p className="font-bold text-xl text-error">Precio Actual: {item.price}$</p>
                                </div>
                            </div>
                        </div>
                            
                         
                               
                           
                        </div>
                       <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>   
                        </dialog>
        </div>
        </div>
  )
}

export default Card




