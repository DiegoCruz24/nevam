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
                        <p className="inner-block-right-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid blanditiis corporis ea et illo in ipsa iste magnam</p>
                        <p className="inner-block-right-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid blanditiis corporis ea et illo in ipsa iste magnam</p>
                        <div className="inner-block-right-data">
                            <div className="inner-block-right-data-item">
                                <img src={User} alt=""/>
                                <div className="inner-block-right-data-item-info">
                                    <p className={"item-info-title"}>Titulo 1</p>
                                    <p className={"item-info-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="inner-block-right-data-item">
                                <img src={Speed} alt=""/>
                                <div className="inner-block-right-data-item-info">
                                    <p className={"item-info-title"}>Titulo 2</p>
                                    <p className={"item-info-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="inner-block-right-data-item">
                                <img src={Check} alt=""/>
                                <div className="inner-block-right-data-item-info">
                                    <p className={"item-info-title"}>Titulo 3</p>
                                    <p className={"item-info-text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}