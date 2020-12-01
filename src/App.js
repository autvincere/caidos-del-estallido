import React,{Fragment, useRef} from 'react';
import { Helmet } from 'react-helmet';
// import Logo from './components/Logo';
import Splash from './components/Splash';
import ScrollSection from './components/ScrollSection';
import GlobalStyle from './globalStyles'

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
        {/* <Logo /> */}
        <Splash handleDown = { handleDown }/>
        <ScrollSection downRef={ downRef }/>

    </Fragment>
  );
}

export default App;
