import React from "react";
import '../../Styles/Slider/SliderStyles.css';
import Image1 from '../../Assets/Images/Slider/Gimnasio1-fondo.jpg';
import Image2 from '../../Assets/Images/Slider/Gimnasio2-fondo.jpg';
import Image3 from '../../Assets/Images/Slider/Sala-de-espera-fondo.jpg';
import Image4 from '../../Assets/Images/Slider/Torniqueres-fondo.jpg';

export default class Slider extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"container-slider"}>
                <div className="container-slider-slide">
                    <div className={"container-slider-slide-unique"}>
                        <img src={Image1} alt=""/>
                        <div className={"legend"}>
                            <p className={"legend-title"}><span>Gimnasios</span> a la medida</p>
                            <p className={"legend-text"}>Aplicación innovadora y creativa desarrollada para iOS y
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
                </div>
                <div className="container-slider-slide">
                    <div className={"container-slider-slide-unique"}>
                        <img src={Image2} alt=""/>
                        <p className={"legend"}>
                            <p className={"legend-title"}><span>Gimnasios</span> VIP</p>
                            <p className={"legend-text"}>Aplicación moderna y fácil de usar, creada para un sector
                                exclusivo de clientes que frecuentan gimnasios selectos y que les fascina sentirse
                                únicos y especiales. El proyecto consiste en una serie de módulos: registro; formulario
                                médicos; seguimiento de rutinas, nutricional y de dietas; selección de vídeos; compra de
                                productos, paquetes y membresías; facturación; entre otros. Esta aplicación móvil y web
                                te ayuda a mejorar la atención al cliente, generando a su vez mayores recursos
                                económicos. Brinda la mejor la mejor experiencia al cliente, garantizado mayor
                                satisfacción. Automatiza procesos y soluciona muchos de los problemas de un gimnasio,
                                tanto a nivel administrativo, como para el cliente. Una innovadora oportunidad, con
                                grandes resultados.</p>
                        </p>
                    </div>
                </div>
                <div className="container-slider-slide">
                    <div className={"container-slider-slide-unique"}>
                        <img src={Image3} alt=""/>
                        <p className={"legend"}>
                            <p className={"legend-title"}><span>Salas de espera</span> innovadoras</p>
                            <p className={"legend-text"}>Exclusiva plataforma web amigable y creativa que viene a
                                revolucionar el concepto de sala de espera. En esta solución se facilita la comunicación
                                entre banco y cliente, generando a su vez una comunidad más humana y orgánica, ya que
                                ambos pueden interactuar rápidamente a través de los distintos módulos: reservar salas
                                de trabajo, asistir o dar ponencias, agendar citas con gerentes, anunciar o buscar
                                servicios profesionales, ver vídeos de charlas pasadas, entre otros. También posee un
                                módulo de gestión y un dashboard con indicadores claves para la banca. Una solución
                                única que resulta interesante para todos los bancos que desean adaptarse, evolucionar y
                                obtener mejores resultados en cualquier tiempo.</p>
                        </p>
                    </div>
                </div>
                <div className="container-slider-slide">
                    <div className={"container-slider-slide-unique"}>
                        <img src={Image4} alt=""/>
                        <p className={"legend"}>
                            <p className={"legend-title"}><span>Torniquetes</span> Inteligentes</p>
                            <p className={"legend-text"}>Solución desarrollada e implementada que facilita el control de
                                acceso autónomo mediante hardware y software de última generación, con el soporte
                                interno de un motor biométrico de reconocimiento facial inteligente, que a su vez cuenta
                                con un sistema web para la gestión de la información, al mismo tiempo que brinda
                                seguridad, confidencialidad, integridad y alta disponibilidad sobre los datos
                                almacenados. Una oportunidad única para las empresas con las que podrá garantizar el
                                control de entradas de forma rápida, confiable e ingeniosa.</p>
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}