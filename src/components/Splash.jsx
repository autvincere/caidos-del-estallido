import React from 'react'
import DownHand from './DownHand'
import styled from 'styled-components'
import { media } from '../utils/constants'
import Incremento from './Incremento'
import { ReactBasicScroll } from "react-basic-scroll";

const Section = styled.section`
height: 100vh;
position: relative;
z-index: 3;
background: linear-gradient(180deg, #CCCCCC -17%, #FFFFFF 64%);
${ media('xs') }{
     background: transparent;
    }
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
article{
     max-width: 316px;
    position: absolute;
    right: 6%;
    top: 37%;
    z-index: 1;
    ${ media('xs') }{
          right: 1%;
          top: 50%;
          }
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
          font-family: 'Open Sans',Helvetica,Arial,sans-serif;
          font-weight: 600;
          color: #000000;
          margin-top: -28px;
          text-align: right;
          font-size: 1.2em;
          line-height: 24px;
          text-shadow: 1px 0px 3px #ffffff;
          width: 355px;
          margin-left: -36px;
          ${ media('xs') }{
               margin-top: -28px;
               text-align: left;
               font-size: 1.2em;
               width: 340px;
               margin-left: 17px;
          }
     }
   
}
.down_icon{
     position: absolute;
    left: 49%;
    margin-left: -74px;
    bottom: 4%;
    margin-bottom: -4px;
    z-index: 2;
    bottom: 0%;
    /* animation: appear 1s cubic-bezier(0.390, 0.575, 0.565, 1.000);   */
    animation: down_arrow 2.5s ease-out 0s infinite;
    ${ media('xs') }{
     bottom: -10%;
     left: 58%;
          }   

    svg{
     border: 2px dashed black;
    border-radius: 60px;
    background-color: #ffffffbf;
    padding: 6px;
    display: block;
    cursor: pointer;
    }
     }
img{
    margin: 0 auto;
    margin-top: 0px;
    width: 80vw;
    position: absolute;
    left: 11%;

    ${ media('xs') }{
          left: -2%;
          position: relative;
          display: flex;
          margin: 0px auto;
          width: 125vw;
    }
}
`
const Splash = ({ handleDown }) => {

     const config = {
          from: 'top-top',
          to: 'bottom-bottom',
          direct: true,
          props: {
              '--ty': {
                  from: '0px',
                  to: '40px',
              }
          }
      }
     return (
          <Section>
              
               <article>
                    <div>
                         {/* <input type="text" name="" value={increment}/> */}
                         <Incremento />
                         <p>Fallecidos</p>
                    </div>
                    <ReactBasicScroll config={ config }>
                        <p className={`o-anim-ty o-apply-ty--x1`} >
                         Durante las protestas ocurridas en chile, a fines del 2019, murieron 34 personas, en contextos que no han sido esclarecidos totalmente a la fecha de hoy...
                    </p>
                    </ReactBasicScroll>
                   
               </article>
               {/* <div className="down_icon" onClick={()=> console.log('hice click')} */}
               <div className="down_icon" >
                    <DownHand width={60} height={60} onClick={handleDown} />
               </div>

               <img src={require('../assets/img/splash.png')} alt="bandera_chile" />
          </Section>
     )
}

export default Splash
