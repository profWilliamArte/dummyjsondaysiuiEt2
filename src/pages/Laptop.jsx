import Card from "../components/Card";
import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/category/laptops';

const Laptop = () => {

  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);
  return (
    <div className="container mx-auto ">
      
        <h3 className="text-2xl font-bold text-center py-10">Laptops ({datos.length})</h3>
         <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {datos && datos.map((item)=>(
                <Card key={item.id} item={item}  />
              ))}
          </div>
      </div>
    </div>
    )
}

export default Laptop