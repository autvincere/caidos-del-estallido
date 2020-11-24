import React,{Fragment, useRef} from 'react';
import reset from 'react-style-reset';
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';
import Logo from './components/Logo';
import Splash from './components/Splash';
import ScrollSection from './components/ScrollSection';

const GlobalStyle = createGlobalStyle`
${reset};
body{
  /* background: linear-gradient(0deg, #CCCCCC 12%, #FFFFFF 64%); */
}
a{color: #ffffff; text-decoration: none;}
h1{
  font-size: 3em;
  font-family: 'Special Elite', Helvetica, Arial, cursive;
  text-transform: uppercase;
}
h2{
     /* font-family: 'Open Sans', Helvetica, Arial, sans-serif; */
     /* font-family: 'Special Elite', Helvetica, Arial, cursive; */
     /* font-size: 2em; */
     font-family: 'Open Sans Condensed', Helvetica, Arial, sans-serif;
     font-size: 1.7em;
     line-height: 39px;
     font-weight: 300;
     color: black;
}
`
const ContentLogo = styled(Logo)`
    position: fixed;
    z-index: 4;
    margin: 10px 0 0 10px;
`
function App() {
  const downRef = useRef()
  const scrollToRef = (ref) => window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop })
  

  const handleDown = () => {
   return scrollToRef(downRef)
    // console.log(downRef.current.getBoundingClientRect());
  }

  return (
    <Fragment>
       <Helmet>
        <title>Ellos son || Estallido social en Chile</title>
        <meta name="description" content="Este anexo indica las personas fallecidas durante las protestas ocurridas en Chile durante fines de 2019. Las protestas en Chile son una serie de manifestaciones en contra de la desigualdad, el modelo económico, el alto costo de vida, entre otros, que surgieron en la sociedad chilena como forma de expresar el malestar hacia las autoridades." />

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>

      </Helmet>

      <GlobalStyle />
        <ContentLogo />
        <Splash handleDown = { handleDown }/>
        <ScrollSection downRef={ downRef }/>
    </Fragment>
  );
}

export default App;
