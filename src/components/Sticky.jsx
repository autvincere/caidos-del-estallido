import React, {Fragment} from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

.normal{
     flex-direction: row;
}
`
const Texto = styled.div`
               position: absolute;
               right: 0;
          h3{
                    font-family: 'Special Elite', Helvetica, Arial, cursive;
                    font-size: 1.5em;
                    width:300px;
                    padding: 10px 4px 3px 8px;
                    background: #eaeaea;
                    border-top: 2px solid black;
                    border-left: 2px solid black;
                    border-bottom: 2px solid black;
          }
          `
const Stiky = (props) => {
     console.log(props.fecha[0].fecha);
     return (
          <Fragment>
               <GlobalStyle />
                    <Texto>
                         <h3>{props.fecha[0].fecha}</h3>
                    </Texto>
          </Fragment>
     )
}

export default Stiky
