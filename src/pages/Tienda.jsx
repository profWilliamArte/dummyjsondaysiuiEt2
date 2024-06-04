import Card from "../components/Card";
import { useEffect, useState } from "react";
import Paginador from "../components/Paginador";
const API='https://dummyjson.com/products?limit=20&skip=';

const Tienda = ({carrito, setCarrito}) => {
    const [datos, setDatos] = useState([])
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);

  const getDatos = async () =>{
    const URI=API+skip
      try {
        const response = await fetch(URI);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
        setTotal(data.total)
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[skip]);
  return (
    <div className="container mx-auto ">
    <h3 className="text-2xl font-bold text-center py-10">Tienda </h3>
    <div className="flex justify-end mb-5 bg-base-200">
         <Paginador total={total} skip={skip} setSkip={setSkip}/>
    </div>
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                {datos && datos.map((item)=>(
                <Card key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />
                ))}
            </div>
            </div>
  )
}

export default Tienda