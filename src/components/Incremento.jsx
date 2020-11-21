import React,{ useState, useEffect } from 'react'
import CountUp from 'react-countup';

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
            <CountUp start={0} end={34} duration={6} delay={1} />
        </h3>
    )
}

export default Incremento
