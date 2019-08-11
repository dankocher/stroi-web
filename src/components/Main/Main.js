import React from 'react';
import './Main.scss';
import banner from './images/banner.jpg';
import services from '../../constants/services';

import data from './main';
import {Link} from "react-router-dom";
import Paragraph from "../Pharagraph";
import CertificatesScreen from "../Certificates/CertificatesScreen";

class Main extends React.Component {

    render() {
        return (
            <div className={'main'}>
                <div className="banner">
                    <img src={banner} className={'image'} alt='Компания' />
                </div>
                <div className="content">
                    <Paragraph text={data.welcome}/>
                    <Paragraph text={data.introduction}/>
                    <ul>
                        {
                            services.map((s, i) => (
                                <li key={`service-${i}`}><Link to={`/service/${s.alias}`}>{s.name}</Link></li>
                            ))
                        }
                    </ul>
                    <Paragraph text={data.description}/>
                </div>
                <CertificatesScreen {...this.props}/>
            </div>
        );
    }
}

export default Main;
