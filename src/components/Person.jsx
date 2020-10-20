import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import ImageZoom from './ImageZoom'

const GlobalStyle = createGlobalStyle`

.normal{
     flex-direction: row;
}
.reverse{flex-direction: row-reverse;}

.margin_left{
     /* margin: 0px 0px 0px -42px; */
     right: -180px;
}
.margin_right{
     /* margin: 0px -42px 0px 0px; */
     left: -180px;
}

`
const ContentPerson = styled.article`
     display: flex;
     max-width: 750px;
     position: relative;
     margin: 54px auto 72px auto;
     figure{ 
          margin-top: 60px;  
          img{
           max-width: 350px;
          }
          figcaption{
               text-align: center;
               font-family: 'Special Elite', Helvetica, Arial, cursive;
               font-size: 1.5em;
               margin-top: 15px;
          }
     }
                    p{
                         font-family: 'Open Sans Condensed', Helvetica, Arial, sans-serif;
                         align-self: center;
                         background-color: #ffffffd6;
                         padding: 8px 10px;
                         margin-left: -44px;
                         line-height: 25px;
                         font-size: 1.3em;
                         position: absolute;
                         max-width: 460px;
                    }
`


const Person = ({ usersInfo }) => {

     return (
          <Fragment>
               <GlobalStyle />
               {    usersInfo.map( user => {
                         return (
                                   <ContentPerson className={user.direction} key={user.name}>

                                        <ImageZoom usersImage ={user.image}/>
                                        <p className={user.margin}>{user.descrip}</p>

                                   </ContentPerson> 
                         )})
               }
          </Fragment> 
     )
}

export default Person
