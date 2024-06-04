import { useEffect, useState } from "react";
import { carritoContext } from "./carritoContext";
import Swal from 'sweetalert2'

const Carrito = ({children}) => {

    const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Guardar el estado cart en el localStorage
        localStorage.setItem("cart", JSON.stringify(carrito));
        setTotal(totalCompra);
        console.log("Total", total)
        console.log("estrabndo al use efect")
      }, [carrito]);

    function mostrarMensage(titulo,  texto){
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "success",
            showConfirmButton: false,
            timer: 800
          });
    }   
    function agregarCarrito(item,cantidad){
        if(cantidad>0){
    
        cantidad=parseInt(cantidad)
        const prod = item;
    
        // Verificar si el producto ya está en el carrito
        const productoExistenteIndex = carrito.findIndex((item) => item.id === prod.id);
        if (productoExistenteIndex !== -1) {
          // Si el producto ya existe, reemplazarlo en el carrito
          const carritoActualizado = [...carrito];
          carritoActualizado[productoExistenteIndex] = { ...prod, cant: cantidad }; 
          setCarrito(carritoActualizado);
          mostrarMensage("¡Actualizado!",`${cantidad} Producto(s) al carrito`);
        } else {
          // Si el producto no existe, agregarlo al carrito
          setCarrito([...carrito, { ...prod, cant: cantidad }]); // Agregar la 
          mostrarMensage("¡Agregado! ",`  ${cantidad} Producto(s) al carrito`);
        }
      
     
        }else{
            mostrarMensage("¡Error!",`La cantidad no puede ser 0`);
        }
    }
    const vaciarCarrito = () =>{
        const confirmarEliminar = window.confirm("¿Estás seguro de que deseas vaciar  carrito?");
        
        if (confirmarEliminar) {
            setCarrito([])
        }
    }
    function deleteItem(id){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                const newArray = carrito.filter((item)=> item.id !== id)
                setCarrito(newArray)  
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });   
    }
    function deleteItem2(id) {
        const modal = document.getElementById("my_modal_1");
        modal.showModal();
      
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const newArray = carrito.filter((item) => item.id !== id);
            setCarrito(newArray);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          modal.close();
        });
    }
    function deleteItem3(id) {

      
        const confirmed = window.confirm("Seguro de querer borrar este elemento?");
      
        if (confirmed) {
          const newArray = carrito.filter((item) => item.id !== id);
          setCarrito(newArray);
          
        }
      
        
    }
    const totalCompra = carrito.reduce((totalComp, producto) => {
        const subtotalProducto = producto.cant * producto.price;
        const totalParcial = totalComp + subtotalProducto;
        return totalParcial;
    }, 0);


  return (
    <carritoContext.Provider 
        value={{carrito, agregarCarrito, vaciarCarrito,  mostrarMensage, deleteItem3, total}}>
        {children}
    </carritoContext.Provider>
  )
}

export default Carrito