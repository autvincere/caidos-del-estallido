import React, { Fragment, useState, useEffect } from 'react'
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
.text_right{
     right: -30%; 
}
.text_left{
     left: -30%; 
}
`
const ContentPerson = styled.article`
     display: flex;
     max-width: 750px;
     position: relative;
     margin: 54px auto 72px auto;
     z-index: 1;
     h4{
          font-size: 7em;
          font-family: 'Open Sans', Helvetica, Arial, sans-serif;
          font-weight: 600;
          color: #5050503d;
          position: absolute;
          bottom: 0;
          -webkit-text-stroke: 1px #ffffff66;

     }
     h3{
               text-align: center;
               font-family: 'Special Elite', Helvetica, Arial, cursive;
               font-size: 1.5em;
               margin-top: 15px;
               max-width: 440px;
          }
     figure{ 
          margin-top: 60px;  
          img{
           max-width: 350px;
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
     // console.log(usersInfo);
     const [ offsetY, setOffsetY ] = useState(0);
     
     const handleScroll = () => {
          // console.log(window.pageYOffset)
          return setOffsetY(window.pageYOffset);
     }

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll);
          }
     }, [])
     return (
          <Fragment>
               <GlobalStyle />
               {    usersInfo.map( user => {
                         return (
                                   <ContentPerson className={user.direction} key={user.name}>
                                        
                                        <div>
                                             <ImageZoom usersImage ={user.image}/>
                                             <h3>{user.name}</h3>
                                        </div>    
                                        <p className={user.margin}>{user.descrip}</p>
                                        <h4 className={user.causaMuertePosition} style={{ transform: `translateY(-${offsetY * 0.09}px)` }}>{user.causaMuerte}</h4>
                                        
                                   </ContentPerson> 
                         )})
               }
          </Fragment> 
     )
}

export default Person
