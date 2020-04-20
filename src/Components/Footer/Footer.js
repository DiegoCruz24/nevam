import React from "react";
import '../../Styles/Footer/FooterStyles.css';
import FooterLogo from '../../Assets/Images/Footer/Logoblanco.png';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className={"container-footer"}>
                <img src={FooterLogo} alt=""/>
                <p>contacto@nevamsoft.com</p>
                <p>&copy; 2020 Nevam Software - todos los derechos reservados</p>
            </div>
        );
    }
}