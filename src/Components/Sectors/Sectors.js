import React from "react";
import Image from '../../Assets/Images/Sectors/Fondo4.jpg';
import '../../Styles/Sectors/SectorsStyles.css';
import PublicService from '../../Assets/Images/Sectors/público.jpg';
import PrivateService from '../../Assets/Images/Sectors/privado.jpg';
import FinancialService from '../../Assets/Images/Sectors/financiero.jpg';
import EducationalService from '../../Assets/Images/Sectors/educativo.jpg';
import SportsServices from '../../Assets/Images/Sectors/Deportivo.jpg';
import Footer from "../Footer/Footer";

export default class Sectors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            actualSector: 'publico',
        }
    }

    render(){
        return(
            <div className={"container-sectors"}>
                <img src={Image} alt=""/>

                <div className="container-sectors-block">
                    <div className="container-sectors-block-info">
                        <p className="sectors-block-info-title">Sectores</p>
                        <p className="sectors-block-info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid amet animi architecto blanditiis, delectus deserunt dolores eos facere fugit itaque laudantium minus neque odit qui repudiandae similique vitae! Praesentium.</p>
                    </div>
                </div>
                <div className="container-sectors-block-images">
                    <div className="sectors-block-images-wrapper">
                        <ul className="sectors-block-images-wrapper-menu">
                            <li
                                onClick={() => this.setState({ actualSector: 'publico'})}
                                className={this.state.actualSector === 'publico' ? 'sector-selected-item': ''}
                            >Publico</li>
                            <li
                                onClick={() => this.setState({ actualSector: 'privado'})}
                                className={this.state.actualSector === 'privado' ? 'sector-selected-item': ''}
                            >Privado</li>
                            <li
                                onClick={() => this.setState({ actualSector: 'financiero'})}
                                className={this.state.actualSector === 'financiero' ? 'sector-selected-item': ''}
                            >Financiero</li>
                            <li
                                onClick={() => this.setState({ actualSector: 'educativo'})}
                                className={this.state.actualSector === 'educativo' ? 'sector-selected-item': ''}
                            >Educativo</li>
                            <li
                                onClick={() => this.setState({ actualSector: 'deportivo'})}
                                className={this.state.actualSector === 'deportivo' ? 'sector-selected-item': ''}
                            >Deportivo</li>
                        </ul>
                        <div className="sectors-block-images-wrapper-display">
                            <img
                                src={
                                    this.state.actualSector === 'publico' ? PublicService :
                                        this.state.actualSector === 'privado' ? PrivateService :
                                            this.state.actualSector === 'financiero' ? FinancialService :
                                                this.state.actualSector === 'educativo' ? EducationalService :
                                                    this.state.actualSector === 'deportivo' ? SportsServices : PublicService
                                }
                                alt=""
                            />
                            <div className="sectors-block-images-wrapper-display-data">
                                <p className="sectors-wrapper-display-data-title">
                                    {
                                        this.state.actualSector === 'publico' ? 'Publico':
                                            this.state.actualSector === 'privado'? 'Privado':
                                                this.state.actualSector === 'financiero'? 'Financiero':
                                                    this.state.actualSector === 'educativo'? 'Educativo':
                                                        this.state.actualSector === 'deportivo'? 'Deportivo': 'Publico'

                                    }
                                </p>
                                <p className="sectors-wrapper-display-data-text">
                                    {
                                        this.state.actualSector === 'publico' ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid amet animi architecto blanditiis, delectus deserunt dolores eos facere fugit itaque laudantium minus neque odit qui repudiandae similique vitae! Praesentium.':
                                            this.state.actualSector === 'privado' ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid amet animi architecto blanditiis, delectus deserunt dolores eos facere fugit itaque laudantium minus neque odit qui repudiandae similique vitae! Praesentium.':
                                                this.state.actualSector === 'financiero' ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid amet animi architecto blanditiis, delectus deserunt dolores eos facere fugit itaque laudantium minus neque odit qui repudiandae similique vitae! Praesentium.':
                                                    this.state.actualSector === 'educativo' ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid amet animi architecto blanditiis, delectus deserunt dolores eos facere fugit itaque laudantium minus neque odit qui repudiandae similique vitae! Praesentium.':
                                                        this.state.actualSector === 'deportivo' ? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid amet animi architecto blanditiis, delectus deserunt dolores eos facere fugit itaque laudantium minus neque odit qui repudiandae similique vitae! Praesentium.': ''
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-sector-footer"}>
                    <Footer/>
                </div>
            </div>
        );
    }
}