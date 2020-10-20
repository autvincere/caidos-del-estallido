import React, { useState, useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Section from './Section'
import mateus from '../assets/img/fallecidos/mateus.jpg'
import paula from '../assets/img/fallecidos/paula_lorca.jpg'
import renzo from '../assets/img/fallecidos/renzo.jpg'
// import { Reset, media, Grid, totalCenter } from '../utils/constants'

const GlobalStyle = createGlobalStyle`
.sticky-wrapper {
  position: relative;
  height: 3rem; /* We need to change this value */
}

.sticky-inner {
  position: fixed;
  top: 20px;
  right: 0;
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

@keyframes dissappear {
  0% {
   /* transform: translateY(50px);  */
   opacity: 1;
    }

  100% {
     /* transform: translateY(0); */
     opacity: 0;  
    } 
}

.appear{
     animation: appear 4s cubic-bezier(0.390, 0.575, 0.565, 1.000);  
}
`

const Parallax = styled.section`
display: flex;
`
const ContentImage = styled.div`

    width: 100vw;
    height: 300vh;
    background-repeat: repeat-y;
    background-size: cover;
    position: absolute;
    animation: ${ props => props.animation};
    /* animation: appear 4s cubic-bezier(0.390, 0.575, 0.565, 1.000);   */
    background-image: url(${require(`../assets/img/bkg_mapav2_opt.jpg`)});
`
const ContentInfo = styled.div`
     position: relative;
     width: 100%;
     margin-top: 86px;
     z-index: 2;
     h4{
          font-size: 8em;
          font-family: 'Open Sans', Helvetica, Arial, sans-serif;
          font-weight: 600;
          color: #5050503d;
          position: absolute;

     }
     .patch{
          display: flex;
          justify-content: flex-end;

          h3{
               font-size: 1em;
               width:300px;
               padding: 4px;
               background: gray;
               border: 1px solid black;
          }
     }
          
`
const sectionOne=[
     {
    
          image: mateus,
          fecha: '19 de octubre',
          direction: 'reverse',
          margin: 'margin_right',
          name:'Mateusz Maj',
          descrip: 'Un profesor polaco, en medio de un forcejeo con su suegro, un exmilitar, con manifestantes a este se le escapa un tiro de su arma de fuego. Los hechos ocurrieron durante un saqueo a un supermercado de Maipú que Miguel Ángel Rojas, suegro de la víctima, pretendía defender.'
      
     }
]
const sectionTwo=[
          {
               image: paula,
               fecha: '20 de octubre',
               direction: 'normal',
               margin: 'margin_left',
               name:'Paula Lorca - Alicia Cofré',
               descrip: 'Ambas víctimas fueron encontradas dentro de un supermercado Líder incendiado en la comuna de San Bernardo.'
          }
          ,{
               image: renzo,
               fecha: '18 de octubre',
               direction: 'reverse',
               margin: 'margin_right',
               name:'Renzo Barboza',
               descrip: 'Encontrado dentro de un supermercado Líder incendiado en la comuna de Santiago (Matucana con Mapocho).​'
               }
     ]
     // const sectionThree=[
     //      {
     //      image: renzo,
     //      fecha: '18 de octubre',
     //      direction: 'normal',
     //      margin: 'margin',
     //      name:'Paula Lorca - Alicia Cofré ',
     //      descrip: 'Ambas víctimas fueron encontradas dentro de un supermercado Líder incendiado en la comuna de San Bernardo.'
     //      }
     // ]

const ScrollSection = ({downRef}) => {

     const [offsetY, setOffsetY] = useState(0);
     const [animationEnter, setAnimationEnter ] = useState('')
  
     const mapRef = useRef()
     // const downRef = useRef()

     const handleScroll = () => {
          // console.log(window.pageYOffset)
          return setOffsetY(window.pageYOffset);
     }

     // const handleDownButton = () =>{
     //      console.log(downRef.getBoundingClientRect());
     // } 
     const handleScrollMap = () => {
          const map = mapRef.current;
          const { y } = map.getBoundingClientRect();

          const animationAppear = y >= 0 ? 'appear' : 'appear';
          // console.log(animationAppear);
          setAnimationEnter(animationAppear)
     }

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          window.addEventListener("scroll", handleScrollMap);

          return () => {
               window.removeEventListener("scroll", handleScroll);
               window.removeEventListener("scroll", handleScrollMap);
          }
     }, [])

     return (
          <Parallax>
               <GlobalStyle/>
               <ContentImage ref={mapRef} className={animationEnter} style={{ transform: `translateY(-${offsetY * 0.5}px)` }} />
               <ContentInfo ref={downRef}>

                    <Section
                         usersInfo ={sectionOne}
                    />
                   
                    <h4 style={{ transform: `translateY(-${offsetY * 0.25}px)` }}>Victima</h4>

                    <Section
                         usersInfo ={sectionTwo}
                    />
                   
                    <h4 style={{ transform: `translateY(-${offsetY * 0.25}px)` }}>Victima</h4>


                    {/* <Section 
                         usersInfo ={sectionTwo}
                    />
                    
                    <h4 style={{ transform: `translateY(-${offsetY * 0.25}px)` }}>Asesinados</h4>
                 
                    <Section 
                         usersInfo ={sectionTwo}
                    />
                          */}
               </ContentInfo>
          </Parallax>
     )
}

export default ScrollSection
