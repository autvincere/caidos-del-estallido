import React from 'react'
import DownHand from './DownHand'
import styled from 'styled-components'
import Incremento from './Incremento'

const Section = styled.section`
height: 100vh;
position: relative;
z-index: 1;
/* margin-top: 30px; */

/**
 * ----------------------------------------
 * animation down_arrow
 * ----------------------------------------
 */
@keyframes down_arrow {
  0% {
    /*                    @include transform(translateY(-1px));*/
    transform: translate(0px, 0px); }
  50% {
    /*                    @include transform(translateY(15px));*/
    transform: translate(0px, -45px); }
  100% {
    /*                     @include transform(translateY(0px));*/
    transform: translate(0px, 0px); } 
}
@keyframes appear {
  0% {
   /* transform: translateY(50px);  */
   opacity: 0;
    }

  100% {
     /* transform: translateY(0); */
     opacity: 1;  
    } 
}
/**
 * ----------------------------------------
 * close animation down_arrow
 * ----------------------------------------
 */

h1{
     text-align: center;
     padding-top: 30px;
}
h3{

}
article{
     max-width: 316px;
    position: absolute;
    right: 6%;
    top: 37%;
    z-index: 1;
     div{
          display: flex;
          h3{
               font-family: 'Special Elite', Helvetica, Arial, cursive;
               font-size: 5em;
          }
          p{
               font-family: 'Special Elite', Helvetica, Arial, cursive;
               font-size: 2.3em;
               align-self: center;
               margin-left: 4px;
               color: #ffffff;
               background-color: black;
               padding: 15px 5px 5px 5px;
          }
     }
     p{
          font-family: 'Open Sans', Helvetica, Arial, sans-serif;
          font-weight: 500;
    color: #000000;
    margin-top: -10px;
    text-align: right;
    font-size: 1.1em;
    line-height: 20px;

     }
   
}
.down_icon{
     position: absolute;
    left: 49%;
    margin-left: -74px;
    bottom: 4%;
    margin-bottom: -4px;
    z-index: 2;
    /* animation: appear 1s cubic-bezier(0.390, 0.575, 0.565, 1.000);   */
    animation: down_arrow 2.5s ease-out 0s infinite;   

    svg{
     border: 2px dashed black;
    border-radius: 60px;
    background-color: #ffffffbf;
    padding: 6px;
    }
     }
img{
    margin: 0 auto;
    margin-top: -100px;
    /* width: 100vw; */

    width: 80vw;
    position: absolute;
    left: 11%;
}
`

const Splash = () => {


     // const increment = () => {
     // let contador = 0;

     //         const saludo = () => {
     //              contador++
     //              console.log(contador); 
     //              if (contador === 30 ) {
     //                   clearInterval(intervalo)
     //              }  
     //         }
     //         let intervalo = setInterval(saludo, 100)
     //         return intervalo;
     //      }
     //      increment()    





     return (
          <Section>
               <h1>#ellosson</h1>
               <article>
                    <div>
                         {/* <input type="text" name="" value={increment}/> */}
                         <Incremento />
                         <p>Fallecidos</p>
                    </div>
                    <p>
                         Durante las protestas ocurridas en chile, a fines del 2019, murieron 34 personas, en contextos que no han sido esclarecidos totalmente a la fecha de hoy...
                    </p>
               </article>

               <div className="down_icon" onClick={()=> console.log('hice click')}>
                    <DownHand width={60} height={60} />
               </div>

               <img src={require('../assets/img/splash.png')} alt="bandera_chile" />
          </Section>
     )
}

export default Splash
