import React from 'react'
import styled from 'styled-components'
// bibliotecas de biblioteca parallax
import { ReactBasicScroll } from "react-basic-scroll";
import scrollConfig from "../basicScrollConfig";

const Box = styled.div`
    max-width: 1160px;
    margin: 0 auto;
`

const IntroText = () => {
     return (
          <div>
                <ReactBasicScroll config={scrollConfig}>
                         <Box>
                              <h2 className={`o-anim-ty o-apply-ty--x1`} >
                              Dentro de las manifestaciones ocurridas en el país se cuenta más de una treintena de muertes. Estas ocurrieron en diferentes contextos y circunstancias.
                              Durante los primeros días, el gobierno indicó que los fallecidos estaban «todos asociados a quemas ysaqueos».1​ El 22 de octubre de 2019, el general Iturriaga señaló que eran siete las personasfallecidas en la Región Metropolitana, agregando que «no los quiero acusar pero murieron calcinadospor haber estado en el lugar donde se produjeron los actos vandálicos»
                              </h2>
                        </Box>
                    </ReactBasicScroll>

                    <ReactBasicScroll config={scrollConfig}>
                         <Box>
                              <h2 className={`o-anim-ty o-apply-ty--x2`} >
                              El presidente Piñera, en tanto, se refirió recién una semana después de los primeros fallecimientos, señalando que los incidentes y disturbios «han significado una pérdida de vidas inocentes, algunas, pero todas son lamentables», lo que le valió críticas por cuestionar las circunstancias de algunas de los muertes.3​4​
                              </h2>
                        </Box>
                    </ReactBasicScroll>

                    <ReactBasicScroll config={scrollConfig}>
                         <Box>
                              <h2 className={`o-anim-ty o-apply-ty--x2`} >
                              El Instituto Nacional de Derechos Humanos indicó que 5 personas habrían fallecido producto de la presunta acción del Estado y algunos casos ya fueron presentados en tribunales. Un militar quedó en prisión preventiva,5​ mientras un infante de marina quedó en libertad con firma quincenal y fue reincorporado a la Armada al día siguiente.6​7​ Ante las consultas por el uso de fuerza letal por parte de militares, el contraalmirante a cargo de la seguridad en la Región de Valparaíso aclaró que, si bien carabineros y policía cuentan con elementos disuasivos, las Fuerzas Armadas ocupan munición de guerra, no «armamento de juguete».8​
                              </h2>
                        </Box>
                    </ReactBasicScroll>

          </div>
     )
}

export default IntroText
