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
                            <p>Damos <span className={"text-blue"}>soluciones innovadoras</span> </p>
                            <p>para <span className={"text-blue"}>todas</span> tus necesidades</p>
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

                {/*}
                <div className="container-home-slider">
                    <Slider/>
                </div>

                <div className="container-home-solutions">
                    <Solutions/>
                </div>*/}
            </div>
        );
    }
}