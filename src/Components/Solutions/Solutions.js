import React from "react";
import SolutionsBack from '../../Assets/Images/Solutions/Fondo2.png';
import '../../Styles/Solutions/SolutionsStyles.css';
import DesarrolloDeAplicaciones from '../../Assets/Images/Solutions/Desarrolo-de-aplicaciones.png';
import IntegracionDeSistemas from '../../Assets/Images/Solutions/integración-de-sistemas.png';
import ArquitecturaDeSistemas from '../../Assets/Images/Solutions/Consultoria-de-sistemas.png';
import InterfacesGRaficas from '../../Assets/Images/Solutions/Desarrollo-de-interfaces.png';
import InteligenciaDeNegocio from '../../Assets/Images/Solutions/Desarrollo-de-inteligencia-de-negocio.png';
import TecnologiasWeb from '../../Assets/Images/Solutions/Desarrollo-de-tecnologías-web.png';
import RealidadAumentada from '../../Assets/Images/Solutions/Desarrollo-de-realidad-aumentada.png';
import Footer from "../Footer/Footer";

export default class Solutions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-solutions">
                <img src={SolutionsBack} alt=""/>
                <div className="container-solutions-title">
                    <p>Nosotros <span className="text-blue-solution">integramos</span> y automatizamos tu empresa y tus <span className="text-blue-solution">servicios</span> </p>
                    <div className="container-solutions-info">
                        <div className="container-solutions-info-item top">
                            <img src={DesarrolloDeAplicaciones} alt=""/>
                        </div>
                        <div className="container-solutions-info-item top">
                            <img src={IntegracionDeSistemas} alt=""/>
                        </div>
                        <div className="container-solutions-info-item top">
                            <img src={ArquitecturaDeSistemas} alt=""/>
                        </div>
                        <div className="container-solutions-info-item">
                            <img src={InterfacesGRaficas} alt=""/>
                        </div>
                        <div className="container-solutions-info-item">
                            <img src={InteligenciaDeNegocio} alt=""/>
                        </div>
                        <div className="container-solutions-info-item">
                            <img src={TecnologiasWeb} alt=""/>
                        </div>
                        <div className="container-solutions-info-item">
                            <img src={RealidadAumentada} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container-solutions-footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}