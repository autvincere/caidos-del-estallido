import React, {Fragment} from 'react'
import styled from 'styled-components'
import { media } from '../utils/constants'

const Texto = styled.div`
     position: sticky;
     top: 0;
     display: flex;
     flex-direction: row-reverse;
     transition: all .7s ease-in;
     ${ media('xs') }{
          /* width: 396px; */
    }
          h3{
               font-family: 'Special Elite', Helvetica, Arial, cursive;
               font-size: 1.5em;
               width:300px;
               padding: 10px 4px 3px 8px;
               background: #eaeaea;
               border: 2px solid black;
          }
          `
const Stiky = (props) => {
     // console.log(props.fecha[0].fecha);
     return (
          <Fragment>
                    <Texto>
                         <h3>{props.fecha[0].fecha}</h3>
                    </Texto>
          </Fragment>
     )
}

export default Stiky
