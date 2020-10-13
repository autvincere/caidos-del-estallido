import React,{Fragment} from 'react';
import reset from 'react-style-reset';
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';
import { Reset, media, Grid, totalCenter} from './utils/constants'
import Logo from './components/Logo';
import Splash from './components/Splash';
import ScrollSection from './components/ScrollSection';

const GlobalStyle = createGlobalStyle`
${reset};
/* ${Reset}; */
a{color: #ffffff; text-decoration: none;}
h1{
  font-size: 3em;
  font-family: 'Special Elite', Helvetica, Arial, cursive;
  text-transform: uppercase;
}

`
const ContentLogo = styled(Logo)`
    position: fixed;
    z-index: 2;
    margin: 10px 0 0 10px;
`
// const CenterContent= styled.div`

// `
function App() {
  return (
    <Fragment>
       <Helmet>
        <title>Ellos son || Estudio Jurídico</title
        >
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap" rel="stylesheet"></link>

        <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
        </link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>

        <meta name="description" content="Estudio jurídico conformado por un equipo multidisciplinario de abogados y asesores, cuyo desempeño y asesoría integral está abocada a la representación de nuestros patrocinados en litigios, la prevención y solución alternativa de conflictos" />
      </Helmet>

      <GlobalStyle />
      {/* <Grid> */}
        <ContentLogo />
        <Splash />
        <ScrollSection />
      {/* </Grid> */}

    </Fragment>
  );
}

export default App;
