import React from "react";
import '../../Styles/PhoneSection/PhoneSectionStyles.css';
import PhoneCover from '../../Assets/Images/PhoneSection/Fondo2.jpg';
import User from '../../Assets/Images/PhoneSection/icono-A.png';
import Speed from '../../Assets/Images/PhoneSection/icono-B.png';
import Check from '../../Assets/Images/PhoneSection/icono-C.png';

export default class PhoneSection extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"container-phone-section"}>
                <img src={PhoneCover} alt=""/>
                <div className="container-phone-section-block left">
                    <div className="inner-block-left">
                        <p>Creamos soluciones con la más alta tecnología</p>
                    </div>
                </div>
                <div className="container-phone-section-block right">
                    <div className="inner-block-right">
                        <p className="inner-block-right-title">Reconocimiento facial</p>
                        <p className="inner-block-right-text">Integración con cualquier software, gestión en local y en la nube, escalables.</p>
                        <p className="inner-block-right-text">Reconocimiento en oscuridad, conectividad WIFI, entradas y salidas para el control de acceso</p>
                        <div className="inner-block-right-data">
                            <div className="inner-block-right-data-item">
                                <img src={User} alt=""/>
                                <div className="inner-block-right-data-item-info">
                                    <p className={"item-info-title"}>Mayor Seguridad</p>
                                    <p className={"item-info-text"}>Anti-Falsificación de rostro</p>
                                </div>
                            </div>
                            <div className="inner-block-right-data-item">
                                <img src={Speed} alt=""/>
                                <div className="inner-block-right-data-item-info" style={{paddingTop: 10 + 'px'}}>
                                    <p className={"item-info-title"}>Buen rendimiento</p>
                                    <p className={"item-info-text"}>Duración de reconocer el rostro &#60; 0.2s/ usuario</p>
                                    <p className={"item-info-text"}>Duración del registro &#60; 3s/ usuario</p>
                                </div>
                            </div>
                            <div className="inner-block-right-data-item">
                                <img src={Check} alt=""/>
                                <div className="inner-block-right-data-item-info">
                                    <p className={"item-info-title"}>Implementación</p>
                                    <p className={"item-info-text"}>Implementación de despliegue seguro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}