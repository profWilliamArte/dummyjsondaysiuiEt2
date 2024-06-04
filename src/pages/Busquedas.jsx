import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/search?q=';
import Card from "../components/Card";
import { useLocation } from 'react-router-dom';


const Busquedas = () => {
    const location = useLocation();
    const valueSearch = location.state;
    
    const [datos, setDatos] = useState([])
    const getDatos = async (valueSearch) =>{
        try {
        const URI=API+valueSearch;
          const response = await fetch(URI);
          const data = await response.json();
          //console.log(data)
          setDatos(data.products);
        } catch (error) {
          console.error(error)
        }
    };
    useEffect(()=>{
      getDatos(valueSearch);
    },[valueSearch]);
  return (
    <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center py-10">{valueSearch} ({datos.length})</h3>
   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {datos && datos.map((item)=>(
              <Card key={item.id} item={item}  />
            ))}
        </div>
    </div>
  )
}

export default Busquedas