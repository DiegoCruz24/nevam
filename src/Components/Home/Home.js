import React from "react";
import FondoHEader from '../../Assets/Images/Fondo1.jpg';
import '../../Styles/Home/HomeStyles.css';
import Slider from "../Slider/Slider";
import Solutions from "../Solutions/Solutions";
import Header from "../Header/Header";
import PhoneSection from "../PhoneSection/PhoneSection";
import Sectors from "../Sectors/Sectors";

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-home">
                <div className="home-header">
                    <Header/>
                </div>
                <div className="container-home-header">
                    <img
                        src={FondoHEader}
                        alt="navem"
                        className={"home-header-background"}
                    />
                    <div className="container-home-header-info">
                        <div className="container-home-header-info-title">
                            <p>Desarrollo de <span className={"text-white"}>Software</span></p>
                            <p>e Integración de sistemas</p>
                            <p><span className={"text-white"}>para todas tus necesidades</span></p>
                        </div>
                        <div className="container-home-header-info-text">
                            <p>Somos una empresa que desarrolla soluciones creativas y a tu medida. Te ahorramos
                                recursos económicos, tiempo y esfuerzo, y además, te garantizamos soluciones amigables,
                                fáciles de usar y exclusivas para tu empresa. ¿Te interesa saber mas de nosotros?
                                contactanos y descubre, sin compromiso, todo lo que podemos hacer por ti.
                            </p>
                        </div>
                        <div className="container-home-header-info-button">
                            <a href="mailto:nevam@gmail.com">Contáctanos</a>
                        </div>
                    </div>

                </div>

                <div id="slider"></div>
                <div className="container-home-slider">
                    <Slider/>
                </div>
                <div id="app"></div>

                <div className="container-home-phoneSection">
                    <PhoneSection/>
                </div>

                <div id="servicio"></div>

                <div className="container-home-solutions" id={"prueba"}>
                    <Solutions/>
                </div>
                <div id="sectores"></div>
                <div className="container-home-sectors">
                    <Sectors/>
                </div>
                <div id="contacto"></div>
            </div>
        );
    }
}