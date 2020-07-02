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
                <div className={"container-footer-logo"} align={"center"}>
                    <img src={FooterLogo} alt=""/>
                </div>
                <div className="copyright" align={"left"}>
                    <p>&copy; 2020 Nevam Software - todos los derechos reservados</p>
                    <p>contacto@nevamsoft.com</p>
                </div>
                {/*<div className={"contact"} align={"right"}>

                </div>*/}
            </div>
        );
    }
}