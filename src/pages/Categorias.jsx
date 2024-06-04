import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/category/';

const Categorias = () => {
  const params = useParams()
  const [datos, setDatos] = useState([])

  const getDatos = async () =>{

  const URI=API+params.id

    try {
      const response = await fetch(URI);
      const data = await response.json();
      console.log(data)
      setDatos(data.products);

    } catch (error) {
      console.error(error)
    }
  };
  useEffect(()=>{
    getDatos();
  },[params.id]);
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold text-center py-10">{params.id.toUpperCase()} ({datos.length})</h3>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 ">
              {datos && datos.map((item)=>(
                <Card key={item.id} item={item}  />
              ))}
          </div>
        </div>
    </div>
  )
}

export default Categorias