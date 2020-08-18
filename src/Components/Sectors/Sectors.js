import React from "react";
import Image from '../../Assets/Images/Sectors/Fondo4.jpg';
import '../../Styles/Sectors/SectorsStyles.css';
import PublicService from '../../Assets/Images/Sectors/público.png';
import PrivateService from '../../Assets/Images/Sectors/privado.png';
import FinancialService from '../../Assets/Images/Sectors/financiero.png';
import EducationalService from '../../Assets/Images/Sectors/educativo.png';
import SportsServices from '../../Assets/Images/Sectors/Deportivo.png';
import Footer from "../Footer/Footer";
import Phone1 from '../../Assets/Images/Sectors/Samsung Galaxy S9.png';
import Phone2 from '../../Assets/Images/Sectors/Samsung Load.png';
import Phone3 from '../../Assets/Images/Sectors/Samsung sportsworld.png';
import Phone4 from '../../Assets/Images/Sectors/Samsung sportsworld 2.png';
import Phone5 from '../../Assets/Images/Sectors/iPhonce sportsworld.png';

export default class Sectors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            actualSector: 'publico',
            publicDesc: 'Las necesidades de una información tansparente y ágil crecen exponencialmente cada día. En Nevam nos preocupamos por la integridad, funcionalidad y calidad de nuestro software para el sector público. ',
            privateDesc: 'Cada empresa tiene sus propias problemáticas. Nosotros entendemos esas problemáticas, te escuchamos. Por ello ofrecemos un desarrollo robusto, eficiente y a la medida para PYMES y grandes empresas',
            financialDesc: 'El sector financiero cada vez utiliza nuevas estrategias para la resolución de determinados problemas. En Nevam, estamos a la vanguardia con desarrollos para el sector financiero utilizando los métodos más sofisticados y calificados.',
            eduDesc:'La educación evoluciona a tal grado que la distancia ya no es un factor para aprender. Nosotros entendemos la importancia del saber y contamos con desarrollos a la medida para el aprendizaje y control de escuelas.',
            sportDesc: 'Tu cuerpo, tu bienestar, tu salud. La gente de Nevam siempre a favor y por ello focalizamos soluciones para centros deportivos, siempre un paso adelante de la meta.'
        }
    }

    render(){
        return(
            <div className={"container-sectors"}>
                <img src={Image} alt=""/>
                <div className="container-sectors-block">
                    <div className="container-sectors-block-info">
                        <p className="sectors-block-info-title">Sectores</p>
                        <p className="sectors-block-info-text">Hemos trabajado para diferentes sectores los cuales tienen visiones distintas, no importan los retos asociados a cada proyecto ya que hemos brindado soluciones de las cuales estamos orgullosos.</p>
                        <p className={"foot-page"}>No importa el problema tenemos la solución</p>
                    </div>
                    <div className="phone-image big-screen">
                        <img
                            src={
                                this.state.actualSector === 'publico' ? Phone1 :
                                    this.state.actualSector === 'privado' ? Phone2 :
                                        this.state.actualSector === 'financiero' ? Phone3 :
                                            this.state.actualSector === 'educativo' ? Phone4 :
                                                this.state.actualSector === 'deportivo' ? Phone2 : Phone1
                            }
                            alt=""
                        />
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
                                        this.state.actualSector === 'publico' ? this.state.publicDesc:
                                            this.state.actualSector === 'privado' ? this.state.privateDesc:
                                                this.state.actualSector === 'financiero' ? this.state.financialDesc:
                                                    this.state.actualSector === 'educativo' ? this.state.eduDesc:
                                                        this.state.actualSector === 'deportivo' ? this.state.sportDesc: ''
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="small-screen">
                        <img
                            src={
                                this.state.actualSector === 'publico' ? Phone1 :
                                    this.state.actualSector === 'privado' ? Phone2 :
                                        this.state.actualSector === 'financiero' ? Phone3 :
                                            this.state.actualSector === 'educativo' ? Phone4 :
                                                this.state.actualSector === 'deportivo' ? Phone2 : Phone1
                            }
                            alt=""
                        />
                    </div>
                </div>
                <div className={"container-sector-footer"}>
                    <Footer/>
                </div>
            </div>
        );
    }
}