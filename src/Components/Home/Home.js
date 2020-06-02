import React from "react";
import FondoHEader from '../../Assets/Images/fondo1.jpg';
import '../../Styles/Home/HomeStyles.css';
import Slider from "../Slider/Slider";
import Solutions from "../Solutions/Solutions";
import Header from "../Header/Header";

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-home">
                <div className="container-home-header">
                    <Header/>
                    <img src={FondoHEader} alt="navem"/>
                    <div className="container-home-header-info">
                        <div className="container-home-header-info-title">
                            <p>Desarrolo de <span className={"text-blue"}>Software</span> e Integración</p>
                            <p>de Sistemas <span className={"text-blue"}>para todas tus necesidades</span></p>
                        </div>
                        <div className="container-home-header-info-text">
                            <p>Somos una empresa que desarrolla soluciones creativas y a tu medida. Te ahorramos
                                recursos económicos, tiempo y esfuerzo, y además, te garantizamos soluciones amigables,
                                fáciles de usar y exclusivas para tu empresa. ¿Te interesa saber mas de nosotros?
                                contactanos y descubre, sin compromiso, todo lo que podemos hacer por ti.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container-home-slider">
                    <Slider/>
                </div>
                <div id="servicio"></div>

                <div className="container-home-solutions" id={"prueba"}>
                    <Solutions/>
                </div>
                <div id="contacto"></div>
            </div>
        );
    }
}