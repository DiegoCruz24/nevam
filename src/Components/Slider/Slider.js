import React from "react";
import '../../Styles/Slider/SliderStyles.css';
import Image1 from '../../Assets/Images/Slider/Gimnasio1-fondo.jpg';
import Image2 from '../../Assets/Images/Slider/Gimnasio2-fondo.jpg';
import Image3 from '../../Assets/Images/Slider/Sala-de-espera-fondo.jpg';
import Image4 from '../../Assets/Images/Slider/Torniqueres-fondo.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
    }

   render() {
       const responsive = {
           tabletTwo: {
               breakpoint: { max: 1400, min: 1186 },
               items: 4,
           },
           tabletTwoone: {
               breakpoint: { max: 3000, min: 1401 },
               items: 4,
           },

           tabletOne: {
               breakpoint: { max: 1185, min: 1025 },
               items: 3,
           },
           tablet: {
               breakpoint: { max: 1024, min: 768 },
               items: 3,
           },
           mobileTwo: {
               breakpoint: { max: 767, min: 589 },
               items: 2,
           },
           mobileOne: {
               breakpoint: { max: 588, min: 465 },
               items: 1,
           },
           mobile: {
               breakpoint: { max: 464, min: 0 },
               items: 1,
           },
       };
       return(
           <Carousel
               responsive = {responsive}
               showStatus={false}
               showIndicators={true}
               showThumbs={false}
               infiniteLoop={true}
               autoPlay={true}
               stopOnHover={true}
               width={"100%"}
           >
               <div>
                   <img src={Image1} />
                   <div className={"legends"}>
                       <p className={"legends-title"}><span>Gimnasios</span> a la medida</p>
                       <p className={"legends-text"}>Aplicación innovadora y creativa desarrollada para iOS y
                           Android orientados al cliente final, además de su sistema web de gestión, que en
                           conjunto integrar una serie de módulos para la administración de todas las actividades
                           que se realizan en los gimnasios: enrolamiento de clientes; gestión de clases, de
                           horarios, de coaches, de clubes, de inventario; ventas de productos y paquetes; envío de
                           notificaciones; visualización de vídeos; facturación; entre otras funcionalidades de
                           alto impacto que genera muchísimo valor agregado para los clubes deportivos. Intuitivo y
                           fácil de usar. Una solución única y exclusiva que garantiza el interés de nuevos
                           clientes.
                       </p>
                   </div>
               </div>
               <div>
                   <img src={Image2} />
                   <div className={"legends"}>
                       <p className={"legends-title"}><span>Gimnasios</span> VIP</p>
                       <p className={"legends-text"}>Aplicación moderna y fácil de usar, creada para un sector
                           exclusivo de clientes que frecuentan gimnasios selectos y que les fascina sentirse
                           únicos y especiales. El proyecto consiste en una serie de módulos: registro; formulario
                           médicos; seguimiento de rutinas, nutricional y de dietas; selección de vídeos; compra de
                           productos, paquetes y membresías; facturación; entre otros. Esta aplicación móvil y web
                           te ayuda a mejorar la atención al cliente, generando a su vez mayores recursos
                           económicos. Brinda la mejor la mejor experiencia al cliente, garantizado mayor
                           satisfacción. Automatiza procesos y soluciona muchos de los problemas de un gimnasio,
                           tanto a nivel administrativo, como para el cliente. Una innovadora oportunidad, con
                           grandes resultados.</p>
                   </div>
               </div>
               <div>
                   <img src={Image3} />
                   <div className={"legends"}>
                       <p className={"legends-title"}><span>Salas de espera</span> innovadoras</p>
                       <p className={"legends-text"}>Exclusiva plataforma web amigable y creativa que viene a
                           revolucionar el concepto de sala de espera. En esta solución se facilita la comunicación
                           entre banco y cliente, generando a su vez una comunidad más humana y orgánica, ya que
                           ambos pueden interactuar rápidamente a través de los distintos módulos: reservar salas
                           de trabajo, asistir o dar ponencias, agendar citas con gerentes, anunciar o buscar
                           servicios profesionales, ver vídeos de charlas pasadas, entre otros. También posee un
                           módulo de gestión y un dashboard con indicadores claves para la banca. Una solución
                           única que resulta interesante para todos los bancos que desean adaptarse, evolucionar y
                           obtener mejores resultados en cualquier tiempo.</p>
                   </div>
               </div>
               <div>
                   <img src={Image4} />
                   <div className={"legends"}>
                       <p className={"legends-title"}><span>Torniquetes</span> Inteligentes</p>
                       <p className={"legends-text"}>Solución desarrollada e implementada que facilita el control de
                           acceso autónomo mediante hardware y software de última generación, con el soporte
                           interno de un motor biométrico de reconocimiento facial inteligente, que a su vez cuenta
                           con un sistema web para la gestión de la información, al mismo tiempo que brinda
                           seguridad, confidencialidad, integridad y alta disponibilidad sobre los datos
                           almacenados. Una oportunidad única para las empresas con las que podrá garantizar el
                           control de entradas de forma rápida, confiable e ingeniosa.</p>
                   </div>
               </div>
           </Carousel>
       )
   }
}