
const Datos = ({datos}) => {
    //console.log(datos);
    const convertidor = [Object.keys(datos).map(key =>{
       return {[key]:datos[key]};
    })]
    //console.log(convertidor);
  return (
     <> 
     {
       datos.map((datos) =>(
          <div className="registros">
             <div className="datos">
                <div>
                  Nombre: {datos.nombre}
                </div>
                <div>
                   Apellido: {datos.apellido}
                </div>
                <div>
                   Telefono: {datos.telefono}
                </div>
             </div>
             
          </div>
       )) 
     }
     </>
  )
}

export default Datos