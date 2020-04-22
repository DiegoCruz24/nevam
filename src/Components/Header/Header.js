import React from "react";
import HeaderImage from '../../Assets/Images/Fondoheader.jpg';
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
                        <p>Servicios</p>
                        <p>Contactanos</p>
                    </div>
                </div>
            </div>
        );
    }
}