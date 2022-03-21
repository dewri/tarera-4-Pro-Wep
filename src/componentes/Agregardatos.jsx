import { useState } from "react"

const Agregardatos = ({agregardatos}) => {
    const [nombre,setnombre] = useState('')
    const [apellido,setapellido] = useState('')
    const [telefono,settelefono] = useState('')

    const onsumit = (e) =>{
        e.preventDefault()
        ////
        if(!nombre){
            alert("Dato vacio")
            return
        }if(!apellido){
            alert("Dato vacio")
            return
        }if(!telefono){
            alert("Dato vacio")
            return
        }
        //////
        agregardatos({nombre,apellido,telefono})

        ///
        setnombre('')
        setapellido('')
        settelefono('')
    }
  return (
    <div className="inputs" onSubmit={onsumit}>
         <input type="text" className="nombre" placeholder="Nombre" value={nombre}
         onChange={(e) => setnombre(e.target.value)}/>
         <input type="text" className="apellido" placeholder="Apellido" value={apellido}
         onChange={(e) => setapellido(e.target.value)}/>
         <input type="text" className="telefono" placeholder="Telefono" value={telefono}
         onChange={(e) => settelefono(e.target.value)}/>
         <button className="boton" type="submit"
         onClick={() =>{
             const envia ={
                 nombre: nombre,
                 apellido: apellido,
                 telefono: telefono
             }
             fetch("http://www.raydelto.org/agenda.php",{
             method: 'POST',
             body: JSON.stringify(envia)
        
             }).then(res => res.json())
             .then(data =>{
             console.log(data);
             }).catch(err =>console.error(err));
             //console.log(envia);
         }}>Agregar</button>
    </div>
  )
}

export default Agregardatos