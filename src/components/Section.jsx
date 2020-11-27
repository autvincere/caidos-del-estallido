import React, { Fragment, useState, useEffect, useRef } from 'react'
import Stiky from './Sticky'
import Person from './Person'

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
