import React,{ useState, useEffect } from 'react'

const Incremento = () => {
const [ numero, setNumero ] = useState(0)

     // const increment = () => {
     //      let contador = 0;
     
     //              const saludo = () => {
     //                   contador++
     //                   setNumero(contador)
     //                   console.log(contador); 
     //                   if (contador === 30 ) {
     //                        clearInterval(intervalo)
     //                   }  
     //              }
     //              let intervalo = setInterval(saludo, 100) 
     //           }
               // increment ();
     useEffect(()=>{
          const timer = numero < 34 && setInterval(() => setNumero( numero + 1), 100);
          return () => clearInterval(timer)
     },[numero])
     return (
          <h3>
               {numero}
          </h3>
     )
}

export default Incremento
