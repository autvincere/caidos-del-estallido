import React, { Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { ReactBasicScroll } from "react-basic-scroll";
import scrollConfig from "../basicScrollConfig";

const GlobalStyle = createGlobalStyle`

.normal{  flex-direction: row; }
.reverse{ flex-direction: row-reverse; }

.margin_left{
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
const ContentImage = styled.div`
     display: block;
     width: 100%;
     max-width: 460px;
     background-color: red;
	height: 340px;
	position: relative;
     overflow: hidden;
     img{
          max-width: 590px;
     }
`
const ContentPerson = styled.article`
     display: flex;
     max-width: 750px;
     position: relative;
     margin: 54px auto 72px auto;
     z-index: 1;
     h4{
          font-size: 5.4em;
          font-family: 'Open Sans',Helvetica,Arial,sans-serif;
          font-weight: 600;
          color: #ffffff57;
          position: absolute;
          top: 10%;
          -webkit-text-stroke: 1.5px #000000ad;
          text-transform: uppercase;
          letter-spacing: -1px;

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

     return (
          <Fragment>
               <GlobalStyle />
               {    usersInfo.map(user => {
                    let speed = user.speed ? user.speed : '1';
                    let config = user.config ? user.config : scrollConfig;
                    return (
                         <ContentPerson className={user.direction} key={user.name}>
                              <div>
                                   <ReactBasicScroll config={config}>
                                        <ContentImage >
                                             <img src={user.image} alt={user.name} className={`o-anim-ty o-apply-ty--x-1`}/>
                                        </ContentImage>
                                        
                                   </ReactBasicScroll>
                                   <h3>{user.name}</h3>
                              </div>
                                   {/* <ImageZoom usersImage={user.image} /> */}
          
                              <p className={user.margin}>{user.descrip}</p>
                              
                              <ReactBasicScroll config={config}>
                                   <h4 className={`${user.causaMuertePosition} o-anim-ty o-apply-ty--x${speed}`}>{user.causaMuerte}</h4>
                              </ReactBasicScroll>

                         </ContentPerson>
                    )
               })
               }
          </Fragment>
     )
}

export default Person
