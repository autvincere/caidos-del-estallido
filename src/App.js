import React,{Fragment, useRef} from 'react';
import reset from 'react-style-reset';
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';
import Logo from './components/Logo';
import Splash from './components/Splash';
import ScrollSection from './components/ScrollSection';

const GlobalStyle = createGlobalStyle`
${reset};
a{color: #ffffff; text-decoration: none;}
h1{
  font-size: 3em;
  font-family: 'Special Elite', Helvetica, Arial, cursive;
  text-transform: uppercase;
}

`
const ContentLogo = styled(Logo)`
    position: fixed;
    z-index: 3;
    margin: 10px 0 0 10px;
`
// const CenterContent= styled.div`

// `
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
        <title>Ellos son || Estudio Jurídico</title>
        <meta name="description" content="Estudio jurídico conformado por un equipo multidisciplinario de abogados y asesores, cuyo desempeño y asesoría integral está abocada a la representación de nuestros patrocinados en litigios, la prevención y solución alternativa de conflictos" />

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>

      </Helmet>

      <GlobalStyle />
      {/* <Grid> */}
        <ContentLogo />
        <Splash handleDown = {handleDown}/>
        <ScrollSection downRef={downRef}/>
      {/* </Grid> */}

    </Fragment>
  );
}

export default App;
