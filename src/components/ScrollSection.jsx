/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Section from './Section'
// import * as All from '../data'
import{ 
     sectionOne,
     sectionTwo,
     sectionThree,
     sectionFour,
     sectionFive,
     sectionSix,
     sectionSeven,
     sectionEight,
     sectionNine,
     sectionTen,
     sectionEleven,
     sectionTwelve,
     sectionThirteen,
     sectionFourteen,
     sectionFiveteen,
     sectionSixteen,
     sectionSeventeen,
     sectionEightteen
} from '../data'

// bibliotecas de biblioteca parallax
import { ReactBasicScroll } from "react-basic-scroll";
import scrollConfig from "../basicScrollConfig";
import IntroText from './IntroText';
import Sources from './Sources';

const GlobalStyle = createGlobalStyle`
.sticky-wrapper {
  position: relative;
  height: 3rem; /* We need to change this value */
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
const BkgImage = styled.div`
    width: 100vw;
    height: auto;
    background-repeat: repeat-y;
    background-size: contain;
    background-image: url(${require(`../assets/img/bkg_mapav2_opt.jpg`)});
    /* &::before{
          content:'';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(255, 255, 255, 0.466); 
    } */

`
const ContentInfo = styled.div`
     position: relative;
     width: 100%;
     margin-top: 86px;
     z-index: 2;
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

const ScrollSection = ({ downRef }) => {

     const [offsetY, setOffsetY] = useState(0);
     const [animationEnter, setAnimationEnter] = useState('')

     const mapRef = useRef()
     // const downRef = useRef()

     const handleScroll = () => {
          // console.log(window.pageYOffset)
          return setOffsetY(window.pageYOffset);
     }

     // const handleDownButton = () =>{
     //      console.log(downRef.getBoundingClientRect());
     // } 
     // eslint-disable-next-line no-unused-vars
     const handleScrollMap = () => {
          const map = mapRef.current;
          const { y } = map.getBoundingClientRect();

          const animationAppear = y >= 0 ? 'appear' : 'appear';
          // console.log(animationAppear);
          setAnimationEnter(animationAppear)
     }

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          // window.addEventListener("scroll", handleScrollMap);

          return () => {
               window.removeEventListener("scroll", handleScroll);
               // window.removeEventListener("scroll", handleScrollMap);
          }
     }, [])



     return (
          <Parallax>
               <GlobalStyle />

               <ContentInfo ref={downRef}>
                    <IntroText />
                    <BkgImage>

                         <Section usersInfo={sectionOne} />
                         <Section usersInfo={sectionTwo} />
                         <Section usersInfo={sectionThree} />
                         <Section usersInfo={sectionFour} /> 
                         <Section usersInfo={sectionFive} /> 
                         <Section usersInfo={sectionSix} />   
                         <Section usersInfo={sectionSeven} />  
                         <Section usersInfo={sectionEight} />
                         <Section usersInfo={sectionNine} />
                         <Section usersInfo={sectionTen} />
                         <Section usersInfo={sectionEleven} />
                         <Section usersInfo={sectionTwelve} />
                         <Section usersInfo={sectionThirteen} />
                         <Section usersInfo={sectionFourteen} />
                         <Section usersInfo={sectionFiveteen} />
                         <Section usersInfo={sectionSixteen} />
                         <Section usersInfo={sectionSeventeen} />
                         <Section usersInfo={sectionEightteen} />

                         <Sources />
                    </BkgImage>

               </ContentInfo>
          </Parallax>
     )
}

export default ScrollSection
