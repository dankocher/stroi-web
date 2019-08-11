import React, {Component} from 'react';
import './Service.scss';
import services from '../../../../constants/services';
import CertificatesScreen from "../../../Certificates/CertificatesScreen";
import Paragraph from "../../../Paragraph";

class Service extends Component {

    render() {
        const service = services.find(s => s.alias === this.props.service);

        return <div className="service">
            <div className="s-content">
                <img className={'-image'} src={service.image} alt={service.name}/>
                <div className="-title">{service.name}</div>
                <Paragraph className={'s-description'} text={service.description}/>
            </div>
            <CertificatesScreen {...this.props}/>
        </div>
    }
}

export default Service;