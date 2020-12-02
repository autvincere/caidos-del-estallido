import React,{useRef} from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactBasicScroll } from "react-basic-scroll";
import LazyLoad from "react-lazyload";
import { media } from '../utils/constants'
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
import IntroText from './IntroText';
import Sources from './Sources';
import bkgFooter from '../assets/img/bkg_footer.png'


const Parallax = styled.section`
display: flex;
`
const BkgImage = styled.div`
    width: 100vw;
    height: auto;
    background-repeat: repeat-y;
    background-size: contain;
    background-image: url(${require(`../assets/img/bkg_mapav2_opt.jpg`)});
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
const Footer = styled.div`
     display: flex;
     flex-direction: column;
     max-width: 1150px;
     position: relative;
     margin: 0 auto;
    padding-bottom: 50px;
     z-index: 1;
     font-family: 'Open Sans',Helvetica,Arial,sans-serif;
     line-height: 24px;
     a{
          color: #222222;
          text-decoration: none;
          font-weight: 600;
     }
     h3{
          font-family: 'Special Elite',Helvetica,Arial,cursive;
          font-size: 3em;
          margin-bottom: 10px;
     }
     .listaref{
          column-count: 3;
          column-gap: 30px;
          background-color: #ffffff42;
          padding-top: 17px;
          ${ media('xs') }{
               column-count: 1;
    }
     }
     li{
          margin-bottom: 15px;
          ${ media('xs') }{
               width: 90%;
               margin: 0 auto;
    }
     }

`
const ContentImage = styled.div`
     display: block;
    /* width: 100%; */
    width: 84vw;
    height: 90vh;
    position: relative;
    overflow: hidden;
    ${ media('xs') }{
          width: 104vw;
          height: 43vh;
    }
    `
    const loadingAnimation = keyframes`
    0% {
      background-color: #fff;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #fff;
    }
  `;
  const Placeholder = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    animation: ${loadingAnimation} 1s infinite;
  `;
  const StyledImage = styled.img`
  width: 84vw;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  ${ media('xs') }{
     width: 97vw;
}
`;

const ScrollSection = ({ downRef }) => {
     const refPlaceholder = useRef();
     const removePlaceholder = () => {
          refPlaceholder.current.remove();
        };

     const configFooter = {
          from: 'top-top',
          to: 'bottom-bottom',
          direct: true,
          props: {
              '--ty': {
                  from: '0px',
                  to: '80px',
              }
          }
      }
     return (
          <Parallax>

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

                         <Footer>
                         <ReactBasicScroll config={configFooter}>

                         <ContentImage>
                                           
                                           <Placeholder ref={refPlaceholder} />
                                           <LazyLoad>
                                                <StyledImage 
                                                     src={bkgFooter} 
                                                     onLoad={removePlaceholder}
                                                     onError={removePlaceholder}
                                                     className={`o-anim-ty o-apply-ty--x1`}
                                                     />
                                           </LazyLoad>
                         </ContentImage>
{/* 
                              <BkgImageFooter className={`o-anim-ty o-apply-ty--x1`}/> */}
                         </ReactBasicScroll>

                         

                              <Sources classes="o-anim-ty o-apply-ty--x1"/>
                              
                         </Footer>

                    </BkgImage>

               </ContentInfo>
          </Parallax>
     )
}

export default ScrollSection
