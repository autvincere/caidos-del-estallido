import styled, {
     css
} from 'styled-components'

export const Reset = css `
  *{
     /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap');   */
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -ms-font-smoothing: antialiased;
      -o-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      box-sizing: border-box;
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
      
  }
`
const breakpointsDictionary = [{
          id: 'cero',
          breakpoint: '0px'
     },
     {
          id: 'xss',
          breakpoint: '320px'
     },
     {
          id: 'xs',
          breakpoint: '480px'
     },
     {
          id: 'md',
          breakpoint: '767px'
     },
     {
          id: 'lg',
          breakpoint: '1370px'
     },
     {
          id: 'full',
          breakpoint: '1920px'
     },
     {
          id: 'doblefull',
          breakpoint: '3840px'
     }
]

const searchInObj = (obj, key) => obj.find(y => y.id === key).breakpoint

export const media = (x) => {
     const result = searchInObj(breakpointsDictionary, x)
     return `@media (max-width: ${result})`
}

export const totalCenter = css ` 
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Grid = styled.div `
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    
    ${media('xs')}{
      width: auto;
      display: flex;
    flex-direction: column;
  }
`