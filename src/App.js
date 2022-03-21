import Header from "./componentes/header";
import Datos from "./componentes/Datos";
import { useEffect, useState } from "react";
import Agregardatos from "./componentes/Agregardatos";
import "./App.css";

function App() {
  const [datos,setdatos] = useState([])
  useEffect(() =>{
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(contactos){
      return contactos.json();
    })
    .then((res) =>{
      setdatos(res)
     var i =0
     /*for(i in res){
       const registro = res[i]
       setdatos(registro)
       i++;
     }*/
    });
  },[]);
  const agregardatos = (resgistro)=>{
    console.log(resgistro)
  }
  return (
   <div className="contactos">
     <div className="lista">
       <Header/>
       <Agregardatos agregardatos={agregardatos}/>
       <Datos datos={datos}/>
     </div>
   </div>
  )
}

export default App;
