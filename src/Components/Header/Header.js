import React from "react";
import HeaderImage from '../../Assets/Images/fondomenu.jpg';
import '../../Styles/Header/HeaderStyles.css';
import LogoNevam from '../../Assets/Images/Logohorizontalblanco.png';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    showMenu= ()=>{
        if(window.innerWidth < 901){
            let menu= document.getElementById('show-hide');
            if( menu.classList.contains('image-items-menu')){
                menu.classList.remove('image-items-menu');
                menu.classList.add('image-items-menu-show');
            }else{
                menu.classList.remove('image-items-menu-show');
                menu.classList.add('image-items-menu');
            }
        }
    }

    render(){
        return(
            <div className="container-header">
                <div className="header-image">
                    <img src={HeaderImage} alt=""/>

                    <div className="header-image-items">
                        <div className="image-items-logo">
                            <img src={LogoNevam} alt=""/>
                        </div>
                        <div className="image-items-menu" id={"show-hide"}>
                            <a onClick={this.showMenu} href={"#slider"} className="pipe-right">Proyectos</a>
                            <a onClick={this.showMenu} href={"#app"} className="pipe-right">Tecnologías</a>
                            <a onClick={this.showMenu} href={"#servicio"} className="pipe-right">Servicios</a>
                            <a onClick={this.showMenu} href={"#sectores"} className="pipe-right">Sectores</a>
                            <a onClick={this.showMenu} href={"#contacto"}>Contacto</a>
                        </div>
                        <div className="item-menu-hide">
                            <p onClick={this.showMenu}>Menú</p>
                        </div>
                    </div>
                </div>

                {/*}
                <img src={HeaderImage} alt=""/>
                <div className={"container-header-logo"}>
                    <img src={LogoNevam} alt=""/>
                    <div
                        className="container-header-logo-tabs"
                        id={"show-hide"}
                    >
                        <a href={"#slider"} className={"first-item"}>Proyectos</a>
                        <a href={"#app"}>Tecnologías</a>
                        <a href={"#servicio"}>Servicios</a>
                        <a href={"#sectores"}>Sectores</a>
                        <a href={"#contacto"}>Contacto</a>
                    </div>
                    <p
                        id={"menu-icon"}
                        className={"icon-disabled"}
                        onClick={this.showMenu}
                    >Menú</p>
                </div>*/}
            </div>
        );
    }
}