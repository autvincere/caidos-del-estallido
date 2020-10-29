import React, { Fragment, useState, useEffect, useRef } from 'react'
import { createGlobalStyle } from 'styled-components'
import Stiky from './Sticky'
import Person from './Person'

const GlobalStyle = createGlobalStyle`
.sticky-wrapper {
  position: relative;
  height: 3rem; /* We need to change this value */
}

.sticky-inner {
  position: fixed;
  top: 20px;
  right: 0;
}
.normal{
     flex-direction: row;
}
.reverse{flex-direction: row-reverse;}

.margin_left{
     margin: 0px 0px 0px -42px;
}
.margin_right{
     margin: 0px -42px 0px 0px;
}
.align{
     max-width: 1100px;
     margin: 138px auto;
     }
`

const Section = ({ usersInfo }) => {
// console.log(usersInfo);
     
     // console.log(typeof(direction));
     const [isSticky, setSticky] = useState('nada');
     const stickyRef = useRef(null)

     const handleScrollMap = () => {

          const sticky = stickyRef.current;
          // console.log(sticky);
          const stickyY = sticky.getBoundingClientRect().y;
          const stickyYPositive = Math.abs(stickyY)

          const stickyH = sticky.getBoundingClientRect().height

          // console.log('alto div: ' + stickyH);
          // console.log('parte superior div: ' + stickyY);


          const stickyAppear = () => {
               let clase
                    if(stickyY < 0 ) {   
                         clase = 'sticky-inner'
                    }
                         
                   if ( stickyYPositive > stickyH ) {
                         clase = ''
                    }
               return clase

          }
          setSticky(stickyAppear())
         
     }
     useEffect(() => {
          window.addEventListener("scroll", handleScrollMap);

          return () => {
               window.removeEventListener("scroll", handleScrollMap);
          }
     }, [])

     return (
          <Fragment>
               <GlobalStyle />
               <div ref={stickyRef} className="align">

                    <div className={isSticky}>
                         <Stiky fecha={usersInfo}/>
                    </div>

                    <Person usersInfo ={usersInfo}/>
                   
               </div>
          </Fragment>
     )
}

export default Section
