import mateus from './assets/img/fallecidos/mateus.jpg'
import paula from './assets/img/fallecidos/paula_lorca.jpg'
import renzo from './assets/img/fallecidos/renzo.jpg'
import kaiser from './assets/img/fallecidos/kaiser.jpg'
import romario from './assets/img/fallecidos/romario.jpg'
import kevin from './assets/img/fallecidos/kevin.jpg'
import jose from './assets/img/fallecidos/jose.jpg'
import manuel from './assets/img/fallecidos/manuel.jpg'
import joseU from './assets/img/fallecidos/joseU.jpg'
import noImage from './assets/img/fallecidos/noImage.jpg'
import alex from './assets/img/fallecidos/alex.jpg'
import mariana from './assets/img/fallecidos/mariana.jpg'
import maicol from './assets/img/fallecidos/maicol.jpg'
import joel from './assets/img/fallecidos/joel.jpg'
import agustin from './assets/img/fallecidos/agustin.jpg'
import hector from './assets/img/fallecidos/hector.jpg'
import robinson from './assets/img/fallecidos/robinson.jpg'
import abel from './assets/img/fallecidos/abel.jpg'
import mauricio from './assets/img/fallecidos/mauricio.jpg'
import jorge from './assets/img/fallecidos/jorge.jpg'
import ariel from './assets/img/fallecidos/ariel.jpg'
import cristian from './assets/img/fallecidos/cristian.jpg'



export const sectionOne = [
     {
          image: mateus,
          fecha: '19 de octubre',
          causaMuerte:'Disparo',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Mateusz Maj',
          speed: '2',
          config: {
            from: 'top-top',
            to: 'bottom-bottom',
            direct: true,
            props: {
                '--ty': {
                    from: '0px',
                    to: '70px',
                }
            }
        },
        descrip: 'Un profesor polaco, en medio de un forcejeo con su suegro, un exmilitar, con manifestantes a este se le escapa un tiro de su arma de fuego. Los hechos ocurrieron durante un saqueo a un supermercado de Maipú que Miguel Ángel Rojas, suegro de la víctima, pretendía defender.'
            
     }
]


export const sectionTwo = [
     {
          image: paula,
          fecha: '20 de octubre',
          causaMuerte:'Calcinada',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Paula Lorca - Alicia Cofré',
          speed: '3',
          descrip: 'Ambas víctimas fueron encontradas dentro de un supermercado Líder incendiado en la comuna de San Bernardo.'
     }
     , {
          image: renzo,
          fecha: '18 de octubre',
          causaMuerte:'Calcinado',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Renzo Barboza',
          speed: '2',
          descrip: 'Encontrado dentro de un supermercado Líder incendiado en la comuna de Santiago (Matucana con Mapocho).​'
     }
     , {
          image: kaiser,
          fecha: '18 de octubre',
          causaMuerte:'Calcinados',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Manuel Muga(59) - Andrés Ponce(38) - Yoshua Osorio(17) - Julián Pérez(51) - Luis Salas(47)',
          descrip: 'Encontrados calcinados en la bodega incendiada de la empresa Kayser en Renca. Las autopsias de los cuerpos han determinado la existencia de heridas de bala en algunos casos.​'
     }
     , {
          image: romario,
          fecha: '18 de octubre',
          causaMuerte:'Disparo',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Romario Veloz (26)',
          descrip: 'Fallecido por disparos realizados por militares en las cercanías del terminal de buses de La Serena.​'
     }
     , {
          image: kevin,
          fecha: '18 de octubre',
          causaMuerte:'Acribillado',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Kevin Gómez (23)',
          descrip: 'Fallecido por disparos realizados por militares fuera de una tienda La Polar en Coquimbo.'
     }
]
export const sectionThree =[
     {
     image: jose,
     fecha: '21 de octubre de 2019',
     causaMuerte:'Accidente',
     causaMuertePosition:'text_right',
     direction: 'reverse',
     margin: 'margin_right',
     name:'José Arancibia (74) - Eduardo Caro del Pino (44)',
     descrip: 'Encontrados en una tienda Construmart incendiada en la comuna de La Pintana (Santa Rosa con El Observatorio).'
     }
   , {
        image: manuel,
        fecha: '18 de octubre',
        causaMuerte:'atropellado',
        causaMuertePosition:'text_left',
        direction: 'normal',
        margin: 'margin_left',
        name: 'Manuel Rebolledo (22)',
        descrip: 'En una manifestación en Talcahuano es atropellado por un camión de infantería de marina.'
     }
     , {
          image: joseU,
          fecha: '18 de octubre',
          causaMuerte:'Accidente',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'José Uribe (25)',
          descrip: 'Fallecido por disparos en Curicó, fuera de la zona de emergencia. Inicialmente la hipótesis de investigación era una muerte producto de disparos de militares, pero posteriores pesquisas señalaron cómo culpable al empresario de Lontué, Francisco José Fuenzalida Calvo. Según la fiscalía, solo minutos antes del asesinato el empresario había dejado 3 personas heridas de bala en la alameda de Curicó'
       }
       , {
          image: noImage,
          fecha: '18 de octubre',
          causaMuerte:'Electrocutado',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Sin identificar',
          descrip: 'Fallecido por electrocutación en un supermercado en la comuna de Santiago (Barrio Franklin)'
       }
       , {
          image: alex,
          fecha: '18 de octubre',
          causaMuerte:'Golpiza',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Alex Núñez (39)',
          descrip: 'Fallecido por una golpiza realizada por carabineros en la comuna de Maipú, (estación Del Sol). Inicialmente no fue incluido por el gobierno de Chile en la nómina oficial de fallecidos,​ siendo reconocido por el subsecretario de Interior el día 23.'
       }
       , {
          image: mariana,
          fecha: '18 de octubre',
          causaMuerte:'Bala',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Mariana Díaz (34)',
          descrip: 'Fallecida por el impacto de una bala perdida en su casa de la comuna de Lo Prado.'
       }
  ]
  export const sectionFour = [
     {

          image: joel,
          fecha: '22 de octubre de 2019',
          causaMuerte:'Atropello',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Joel Triviño (4) - Cardenio Prado (37)',
          descrip: 'Producto del atropello, a un grupo de manifestantes que estaban haciendo un cacerolazo en San Pedro de la Paz. El conductor estaba en estado de ebriedad.'

     }
]
export const sectionFive = [
     {

          image: agustin,
          fecha: '24 de octubre de 2019',
          causaMuerte:'Disparos',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Agustín Coro (52)',
          descrip: 'Fallecido por disparos realizados el día 22 por un comerciante en la comuna de Puente Alto que temía un asalto; la víctima no habría estado involucrado en el conflicto, pero habría recibido el balazo a distancia.'

     }
]
export const sectionSix = [
     {

          image: maicol,
          fecha: '25 de octubre de 2019',
          causaMuerte:'Calcinado',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Maicol Yagual (22)',
          descrip: 'Encontrado calcinado en un supermercado Alvi en la comuna de Maipú.'

     }
]
export const sectionSeven = [
     {

          image: hector,
          fecha: '1 de noviembre de 2019',
          causaMuerte:'Acuchillado',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Héctor Martínez (57)',
          descrip: 'Locatario de una tienda de muebles en el Barrio Franklin, recibió un ataque con cuchillo por parte de un grupo de saqueadores, en el contexto del estallido social, al tratar de defender su local comercial durante la madrugada de ese día.'

     }
]
export const sectionEight = [
     {

          image: robinson,
          fecha: '12 de noviembre de 2019',
          causaMuerte:'Atropellado',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Robinson Gómez (27)',
          descrip: 'Atropellado por un camión en la madrugada de aquel día, momento en que un grupo de personas realizaban una barricada para cortar la ruta 23-CH en Calama.'

     }
]
export const sectionNine = [
     {

          image: noImage,
          fecha: '13 de noviembre de 2019',
          causaMuerte:'Calcinada',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Sin identificar',
          descrip: 'Encontrada dentro de un supermercado Líder incendiado en la ciudad de Arica.'

     }
]
export const sectionTen = [
     {

          image: abel,
          fecha: '15 de noviembre de 2019',
          causaMuerte:'Paro cardiaco',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Abel Acuña (27)',
          descrip: 'Fallecido por paro cardiorrespiratorio mientras estaba en una manifestación masiva en Plaza Baquedano (Plaza Italia), Santiago. Testigos denunciaron que Carabineros dificultó el trabajo de los equipos de primeros auxilios, haciendo uso de perdigones, carros lanza-aguas y gases lacrimógenos contra dicho personal.'

     }
]

export const sectionEleven = [
     {

          image: noImage,
          fecha: '21 de diciembre de 2019',
          causaMuerte:'Calcinados',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Sin identificar, Sin identificar',
          descrip: 'Fueron encontrados en el Hites de Valparaíso. La tienda fue quemada y saqueada el 18 de octubre, sin embargo los cuerpos no fueron encontrados hasta el 21 de diciembre. De acuerdo al Servicio Médico Legal de Valparaíso, los cuerpos corresponden a dos hombres, de entre 25 y 30 años y no presentan señales de quemaduras. La hipótesis oficial es que al declarar el incendio las personas quedan atrapados supuestamente cuando estaban saqueando y luego fallecen por inhalación de gases.47​'

     }
]
export const sectionTwelve= [
     {

          image: mauricio,
          fecha: '27 de diciembre de 2019',
          causaMuerte:'Asfixia por sumersión',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Mauricio Fredes (33)',
          descrip: 'Fallecido por asfixia por sumersión al caer dentro de un foso con cables electrificados y agua mientras escapaba de un carro lanzaaguas de carabineros durante una manifestación masiva en Plaza Dignidad, Santiago.48​49​50​'

     }
]
export const sectionThirteen = [
     {

          image: jorge,
          fecha: '29 de enero de 2020',
          causaMuerte:'Atropello',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Jorge Mora (37)',
          descrip: 'Fallecido por el atropello de un camión de Carabineros. El hecho ocurrió en las afueras del Estadio Monumental en un enfrentamiento entre manifestantes y Carabineros tras un partido de fútbol.'

     }
]
export const sectionFourteen = [
     {

          image: noImage,
          fecha: '30 de enero de 2020',
          causaMuerte:'Atropello',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Sergio Bustos (22)',
          descrip: 'Fue atropellado en medio de una protesta en la intersección de Américo Vespucio y Santa Rosa. La víctima fue arrollada por un bus del transporte público que minutos antes había sido robado por manifestantes.52​'

     },
     {

          image: noImage,
          fecha: '30 de enero de 2020',
          causaMuerte:'Incendio',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Sin identificar',
          descrip: 'Fue hallado en un supermercado Alvi incendiado en la comuna de San Ramón.53​'

     }
]
export const sectionFiveteen = [
     {

          image: ariel,
          fecha: '31 de enero de 2020',
          causaMuerte:'Balazo',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Ariel Moreno (24)',
          descrip: 'Fallecido por un impacto de bala en su cabeza durante un enfrentamiento con carabineros, la madrugada del jueves 30 de enero. El hecho se produjo en medio de una protesta en el exterior de la Subcomisaría de Carabineros de Padre Hurtado. La familia de Ariel favoreció a siete familias con la donación de sus órganos.​'

     }
]
export const sectionSixteen = [
     {

          image: noImage,
          fecha: '7 de febrero de 2020',
          causaMuerte:'Golpe en la cabeza',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Irma Gutiérrez',
          descrip: 'Manifestante feminista muere al caerle un poste en su cabeza derribado por otros manifestantes.'

     }
]
export const sectionSeventeen = [
     {

          image: noImage,
          fecha: '31 de enero de 2020',
          causaMuerte:'Atropello',
          causaMuertePosition:'text_right',
          direction: 'reverse',
          margin: 'margin_right',
          name: 'Sin identificar',
          descrip: 'Fallecido en medio de manifestaciones en la comuna de Maipú. Los hechos ocurrieron cuando el conductor de un bus del transporte público intentaba esquivar una barricada.​'

     }
]
export const sectionEightteen = [
     {

          image: cristian,
          fecha: '7 de marzo de 2020',
          causaMuerte:'Traumatismo encéfalo craneano',
          causaMuertePosition:'text_left',
          direction: 'normal',
          margin: 'margin_left',
          name: 'Cristián Valdebenito (44)',
          descrip: 'Fallecido a causa de un traumatismo encéfalo craneano debido a impacto de elemento contundente. El hecho se produjo durante manifestaciones en la intersección de Alameda con Ramón Corvalán el 6 de marzo. El 7 de marzo se constató la muerte cerebral falleciendo más tarde. Testigos aseguran que fue alcanzado por una bomba lacrimógena, aunque aquello es materia de investigación.'

     }
]