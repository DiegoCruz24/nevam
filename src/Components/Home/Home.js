import React from "react";
import FondoHEader from '../../Assets/Images/Fondo1.png';
import '../../Styles/Home/HomeStyles.css';
import LogoNevam from '../../Assets/Images/Logohorizontal.png';
import Slider from "../Slider/Slider";
import Solutions from "../Solutions/Solutions";

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-home">
                <div className="container-home-header">
                    <img src={FondoHEader} alt="navem"/>
                    <div className="container-home-header-logo">
                        <img src={LogoNevam} alt=""/>
                    </div>
                    <div className="container-home-header-info">
                        <div className="container-home-header-info-title">
                            <p>Desarrollamos <span className={"text-blue"}>soluciones</span> </p>
                            <p>para <span className={"text-blue"}>cada</span> necesidad</p>
                        </div>
                        <div className="container-home-header-info-text">
                            <p>Somos un equipo altamente competitivo, dedicado al desarrollo de software; con altos
                                niveles de compromiso y lealtad, utilizamos todo nuestro expertise en cada proyecto.
                                Todas nuestras áreas están capacitadas para atender las necesidades y solucionar las
                                necesidades de nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-home-slider">
                    <Slider/>
                </div>

                <div className="container-home-solutions">
                    <Solutions/>
                </div>
            </div>
        );
    }
}