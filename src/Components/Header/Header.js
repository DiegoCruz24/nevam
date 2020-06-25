import React from "react";
import HeaderImage from '../../Assets/Images/fondomenu.jpg';
import '../../Styles/Header/HeaderStyles.css';
import LogoNevam from '../../Assets/Images/Logohorizontal.png';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-header">
                <img src={HeaderImage} alt=""/>
                <div className={"container-header-logo"}>
                    <img src={LogoNevam} alt=""/>
                    <div className="container-header-logo-tabs">
                        <a href={"#servicio"}>Servicios</a>
                        <a href={"#contacto"}>Contacto</a>
                    </div>
                </div>
            </div>
        );
    }
}