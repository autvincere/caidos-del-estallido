import React, {Fragment} from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

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

`
const ContentPerson = styled.article`
     display: flex;
     max-width: 750px;
     margin: 54px auto 72px auto;
     figure{   
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
                    }
`


const Person = ({ usersInfo }) => {
     // console.log(usersInfo);
     return (
          
          usersInfo.map(( user )=>{
            return (
               <Fragment>
                    <GlobalStyle />

                    <ContentPerson className={user.direction}>
                         <figure>
                              <img src={user.image}  alt={user.name} />
                              {/* <img src={require(`${user.image}`)} alt={user.name} /> */}
                              <figcaption>
                              {user.name}
                              </figcaption>
                         </figure>
          
                         <p  className={user.margin}>
                              {user.descrip}
                         </p>

                    </ContentPerson>

               </Fragment>
            )   
          })
 
     )
}

export default Person
