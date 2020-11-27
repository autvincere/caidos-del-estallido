import React from 'react'
import styled from 'styled-components'
import { ReactBasicScroll } from "react-basic-scroll";
import scrollConfig from "../basicScrollConfig";
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
const BkgImageFooter = styled.div`
    width: 100%;
    height: 626px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${require(`../assets/img/bkg_footer.jpg`)});
    margin-bottom: -160px;
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
     }
     li{
          margin-bottom: 15px;
     }

`
const ScrollSection = ({ downRef }) => {

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
                         <ReactBasicScroll config={scrollConfig}>
                              <BkgImageFooter className={`o-anim-ty o-apply-ty--x2`}/>
                         </ReactBasicScroll>
                              <Sources />
                              {/* <h1>
                                   Indignate - involúcrate y participa
                              </h1> */}
                         </Footer>

                    </BkgImage>

               </ContentInfo>
          </Parallax>
     )
}

export default ScrollSection
