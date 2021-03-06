import React from "react";
import SolutionsBack from '../../Assets/Images/Solutions/Fondo3.jpg';
import '../../Styles/Solutions/SolutionsStyles.css';
import DesarrolloDeAplicaciones from '../../Assets/Images/Solutions/desarrollo-de-aplicaciones.png';
import IntegracionDeSistemas from '../../Assets/Images/Solutions/integracion-de-sistemas.png';
import ArquitecturaDeSistemas from '../../Assets/Images/Solutions/consultoria.png';
import InterfacesGRaficas from '../../Assets/Images/Solutions/desarrollo-de-interfaz.png';
import InteligenciaDeNegocio from '../../Assets/Images/Solutions/desarrollo-de-inteligencia.png';
import TecnologiasWeb from '../../Assets/Images/Solutions/desarrollo-de-tecnología.png';
import RealidadAumentada from '../../Assets/Images/Solutions/realidad-aumentada.png';
import Footer from "../Footer/Footer";

export default class Solutions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-solutions">
                <img src={SolutionsBack} alt=""/>
                <div className="container-block">
                    <div className="container-solutions-title">
                        <p><span className="text-blue-solution">Integramos</span> y automatizamos</p>
                        <p>tu empresa y tus <span className="text-blue-solution">servicios</span> </p>

                        <div className="container-solutions-info">
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={DesarrolloDeAplicaciones} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Desarrollo de aplicaciones ios & android</p>
                                    <p className="data-text">Sabemos la importancia de contar con desarrollos móviles capaces de agilizar y simplificar la operación de tu negocio</p>
                                </div>
                            </div>
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={IntegracionDeSistemas} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Integración de sistemas</p>
                                    <p className="data-text">Analizamos y reestructuramos tus soluciones para obtener una mayor eficiencia en tu negocio</p>
                                </div>
                            </div>
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={ArquitecturaDeSistemas} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Consultoria en arquitectura de sistemas</p>
                                    <p className="data-text">La planeación y análisis de nuestros expertos en todos los desarrollos nos permite ver el alcance a la medida para tu negocio</p>
                                </div>
                            </div>
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={InterfacesGRaficas} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Desarrollo de interfaces graficas con UX</p>
                                    <p className="data-text">Estamos convencidos que una buena experiencia de usuario asegura el éxito para tus futuros clientes</p>
                                </div>
                            </div>
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={InteligenciaDeNegocio} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Desarrollo de inteligencia</p>
                                    <p className="data-text">Desarrollamos sistemas que contemplan todos los posibles casos que puedan llegar a ocurrir con tus clientes</p>
                                </div>
                            </div>
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={TecnologiasWeb} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Desarrollo de tecnologías web y sistemas inteligentes</p>
                                    <p className="data-text">Sabemos que poder administrar tus soluciones es vital para el crecimiento de tu negocio</p>
                                </div>
                            </div>
                            <div className="container-solutions-info-item">
                                <div className="container-solutions-info-item-image">
                                    <img src={RealidadAumentada} alt=""/>
                                </div>
                                <div className="container-solutions-info-item-data">
                                    <p className="data-title">Desarrollo de realidad aumentada</p>
                                    <p className="data-text">Estamos preparados para el desarrollo con tecnologías útiles e innovadoras que harán destacar a tu negocio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}