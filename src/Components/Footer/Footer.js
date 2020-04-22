import React from "react";
import '../../Styles/Footer/FooterStyles.css';
import FooterLogo from '../../Assets/Images/Footer/Logohorizontalblanco.png';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className={"container-footer"}>
                <div className={"copyright"} align={"left"}>
                    <img src={FooterLogo} alt=""/>
                    <p>&copy; 2020 Nevam Software - todos los derechos reservados</p>
                </div>
                <div className={"contact"} align={"right"}>
                    <p>contacto@nevamsoft.com</p>
                    <p>Juan de la Barrera, Edificio C-2, Departamento 102, Generalísimo José María Morelos y Pavón, Cuaititlán Izcalli</p>
                </div>
            </div>
        );
    }
}