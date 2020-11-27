import reset from 'react-style-reset';
import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${reset};

a{color: #ffffff; text-decoration: none;}
h1{
  font-size: 3em;
  font-family: 'Special Elite', Helvetica, Arial, cursive;
  text-transform: uppercase;
}
h2{
     font-family: 'Open Sans Condensed', Helvetica, Arial, sans-serif;
     font-size: 1.7em;
     line-height: 39px;
     font-weight: 300;
     color: black;
}
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
.max_width{
     font-size: 4.5em !important;
    width: 465px !important;
}
.sticky-wrapper {
  position: relative;
  height: 3rem; /* We need to change this value */
}
.sticky-inner {
    position: sticky;
    top: 0;
    z-index: 2;
    transition: all .7s ease-in;
}
.align{
     max-width: 1100px;
     margin: 138px auto;
     }

 @keyframes appear {
  0% {
   /* transform: translateY(50px);  */
   opacity: 0;
    }

  100% {
     /* transform: translateY(0); */
     opacity: 1;  
    } 
}

@keyframes dissappear {
  0% {
   /* transform: translateY(50px);  */
   opacity: 1;
    }

  100% {
     /* transform: translateY(0); */
     opacity: 0;  
    } 
}

.appear{
     animation: appear 4s cubic-bezier(0.390, 0.575, 0.565, 1.000);  
}

/* Auxiliaries class from parallax effect */

.o-anim-ty{
	/*
        * The will-change CSS property provides a way for authors to hint browsers about the kind of changes
        * to be expected on an element, so that the browser can setup appropriate optimizations ahead of time
        * before the element is actually changed.
    */
	will-change: transform;
	transition: transform 0.1s linear;
}
.o-apply-ty{
    transform: translateY( calc( ( var(--ty) * 1) ) );
}
.o-apply-ty--x1{
    transform: translateY( calc( ( var(--ty) * 1) ) );
}
.o-apply-ty--x2{
    transform: translateY( calc( ( var(--ty) * 2) ) );
}
.o-apply-ty--x3{
    transform: translateY( calc( ( var(--ty) * 3) ) );
}
.o-apply-ty--x-1{
    transform: translateY( calc( ( var(--ty) * -1) ) );
}
.o-apply-ty--x-2{
    transform: translateY( calc( ( var(--ty) * -2) ) );
}
.o-apply-ty--x-3{
    transform: translateY( calc( ( var(--ty) * -3) ) );
}
`
export default GlobalStyle;