import React,{useRef, useEffect, useState} from 'react'
import styled from 'styled-components'

const ContImage = styled.div`
     width: 33vw;
     height: 46vh;
     margin-top: 60px;
     overflow: hidden;
`
const Images = styled.div`
     width: 33vw;
     height: 340px;
     background-repeat: no-repeat;
     background-size: cover;
     transition: all .1s ease;
`

const ImageZoom = ( {usersImage} ) => {

     //Hooks
     const [valueImage, setValueImage] = useState();
     const imgRef= useRef();

     const imageScroll = () => {

          const { top } = imgRef.current.getBoundingClientRect();
          // console.log(parseInt(Math.abs(top)));
          // console.log(top);
     
          const getValue = () => {
               let value = 1

               if ( top  < -80) value = value + 0.001 * Math.abs(top);
               if( top < -500 ) value = 1

               return value
          }
          setValueImage(getValue())
     }

     useEffect(() => {
          window.addEventListener("scroll", imageScroll);
     
          return () => {
               window.removeEventListener("scroll", imageScroll);
          }
     }, [])

     return (
               <ContImage ref={imgRef}>
                              <Images style={{backgroundImage:`url(${usersImage})`,transform:`scale(${valueImage})` }} />
               </ContImage>
     )
}   

export default ImageZoom
